const wrapperElement = document.getElementById("wrapper");
const searchInputElement = document.getElementById("product-search");


let Products = []; 

async function fetchProducts(){
const response = await fetch("http://localhost:3000/api/products")
const data = await response.json();
Products = data;
renderProducts(Products);
}

function renderProducts(products){
    wrapperElement.innerHTML = JSON.stringify(products.map((a)=>a.name))

}
 

function searchProducts(search) {
    const filteredProducts = Products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
        
    );
    
    renderProducts(filteredProducts);
    // console.log(filteredProducts);
}

searchInputElement.addEventListener("keyup", (e) => {
    const searchTerm = e.target.value;
    searchProducts(searchTerm);
    // console.log(searchTerm);
});

fetchProducts();

console.log(Products);
