// let sidebar = document.querySelector(".sidebar");
function showSideBar(){
    
    document.querySelector(".sidebar").classList.remove("hidden");
}
function closeSideBar(){
    document.querySelector(".sidebar").classList.add("hidden");
}
const response = fetch('https://fakestoreapi.com/products?limit=8').then(res =>{
    return res.json();
})
.then(data =>{
    console.log(data);
    data.forEach((product, i )=> {
        // document.querySelector(".productimage").src=`${product.image}`;
    const html = `
    <div class="product1" id="p_${1+i}" style="width:300px; "> 
    <img class="productimage" src="${product.image}" style="width:280px; height:350px">
        <h4 class="productTitle">${product.title}</h4>
        <h5 class="productPrice"><b>Price</b>:$${product.price}</h5>
        <div class="buttonWithEyes">
            <button class="button" onclick="addToCart();" id ="button--${1+i}">Add to cart &#128722; </button><a class="anchor" href="./pages/Details${1+i}.html"><i class="fa-solid fa-eye eyes"></i></a>
        </div>
        
    </div>
    `;
    
    document.querySelector(".productSection").insertAdjacentHTML("afterbegin", html);
        
   });

    
 });

//  function addToCart(){
//      fetch('https://fakestoreapi.com/products/').then(response =>{
//         return response.json();
//     })
//     .then(data =>{
//         console.log(data);
//     const html = `
//     <div class="product1" id="p_${1+data.length}" style="width:300px; "> 
//     <img class="productimage" src="${data[0].image}" style="width:280px; height:350px">
//         <h4 class="productTitle">${data[0].title}</h4>
//         <h5 class="productPrice"><b>Price</b>:$${data[0].price}</h5>
        
//     </div>
//     `;
//     document.querySelector(".cart").insertAdjacentHTML("afterbegin", html);
//  })
// }

const categoryResponse = fetch('https://fakestoreapi.com/products/categories').then(response =>{
    return response.json();
})
.then(data =>{
    console.log(data);
    document.querySelector(".backgroundtextone").textContent = data[2];
    document.querySelector(".backgroundtexttwo").textContent = data[3];
    document.querySelector(".backgroundtextthree").textContent = data[1];
    document.querySelector(".backgroundtextfour").textContent = data[0];
    // data.forEach(category =>{
    //     const categoriesHtml = `
    //      <div class="categoryone" style="width:100px; height:400px; ">${category} </div>`;
    //      document.querySelector(".productsCategory").insertAdjacentHTML("afterbegin", categoriesHtml);
    console.log(data[0]);
    })



    // const cards = document.querySelector('#product');
    //     const cart = document.getElementById('cart');
    //     const totalElement = document.getElementById('total'); 
    //     const selectedItems = {};

    //     function handleCardClick(event) {
    //         const card = event.currentTarget;
    //         const itemId = card.id;
    //         const itemName = card.querySelector('h4').textContent;
    //         const itemPrice = parseFloat(card.querySelector('.productPrice').textContent); 

    //         if (selectedItems[itemId]) {
    //             selectedItems[itemId].count++;
    //         } else {
    //             selectedItems[itemId] = {
    //                 name: itemName,
    //                 price: itemPrice,
    //                 count: 1,
    //             };
    //         }

    //         updateCart();
    //     }

    //     function updateCart() {
    //         cart.innerHTML = '';
    //         let total = 0; 

    //         for (const itemId in selectedItems) {
    //             const item = selectedItems[itemId];
    //             const listItem = document.createElement('li');
    //             const quantityContainer = document.createElement('div'); 
    //             const quantityText = document.createElement('span'); 
    //             const addButton = document.createElement('button');
    //             const subtractButton = document.createElement('button');

    //             addButton.textContent = '+';
    //             subtractButton.textContent = '-';

    //             quantityText.textContent = item.count; 

    //             addButton.addEventListener('click', () => {
    //                 addItem(itemId);
    //             });

    //             subtractButton.addEventListener('click', () => {
    //                 removeItem(itemId);
    //             });

    //             const hr = document.createElement('hr');

    //             quantityContainer.appendChild(subtractButton); 
    //             quantityContainer.appendChild(quantityText); 
    //             quantityContainer.appendChild(addButton); 
    //             quantityContainer.appendChild(hr); 

    //             listItem.textContent = `${item.name} - $${item.price * item.count}`;
    //             listItem.appendChild(quantityContainer); 
    //             cart.appendChild(listItem);

    //             total += item.price * item.count; 
    //         }

    //         totalElement.textContent = ` $${total.toFixed(2)}`; 
    //     }

    //     function addItem(itemId) {
    //         if (selectedItems[itemId]) {
    //             selectedItems[itemId].count++;
    //         }
    //         updateCart();
    //     }

    //     function removeItem(itemId) {
    //         if (selectedItems[itemId]) {
    //             selectedItems[itemId].count--;
    //             if (selectedItems[itemId].count <= 0) {
    //                 delete selectedItems[itemId];
    //             }
    //         }
    //         updateCart();
    //     }

    //     cards.forEach((button) => {
    //         button.addEventListener('click', handleCardClick);
    //     });
// const getProduct = function (product){
//     fetch('https://fakestoreapi.com/products/${product}').then{
//         function (response){
//             console.log(response);
//         }
//     }
// }
// // getProduct("2")

// const html = `
//     <div class="productone" id="p_1" style="width:300px; height:400px; ">${.image} </div>
// `
