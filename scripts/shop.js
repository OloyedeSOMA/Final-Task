function showSideBar(){
    
    document.querySelector(".sidebar").classList.remove("hidden");
}
function closeSideBar(){
    document.querySelector(".sidebar").classList.add("hidden");
}
const response = fetch('https://fakestoreapi.com/products/').then(res =>{
    return res.json();
})
.then(data =>{
    console.log(data);
    data.forEach((product, i) => {
        // document.querySelector(".productimage").src=`${product.image}`;
    const html = `
    <div class="product1" id="p_${1+product.length}" style="width:300px; "> 
    <img class="productimage" src="${product.image}" style="width:280px; height:350px">
        <h4 class="productTitle">${product.title}</h4>
        <h5 class="productPrice"><b>Price</b>:$${product.price}</h5>
        <div class="buttonWithEyes">
            <button class="button">Add to cart&#128722; </button><a class="anchor" href="./pages/Details${1+i}.html"><i class="fa-solid fa-eye eyes"></i></a>
        </div>
    </div>
    `;
    document.querySelector(".productSection").insertAdjacentHTML("afterbegin", html);
        console.log(product.length);
    });
    
});