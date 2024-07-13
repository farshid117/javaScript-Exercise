let allProducts = [
    { id: 1, title: 'Album 1', price: 5,   img: 'Images/Album1.png', count: 1 },
    { id: 2, title: 'Album 2', price: 15,  img: 'Images/Album2.png', count: 1 },
    { id: 3, title: 'Album 3', price: 20,  img: 'Images/Album3.png', count: 1 },
    { id: 4, title: 'Album 4', price: 100, img: 'Images/Album4.png', count: 1 },
    { id: 5, title: 'Coffee', price: 5,    img: 'Images/Cofee.png',   count: 1 },
    { id: 6, title: 'Shirt',  price: 50,   img: 'Images/Shirt.png',   count: 1 },
]

let userBasket = []

let $ = document
const shopItemsContainer = $.querySelector('.shop-items')
const bastekProductsContainer = $.querySelector('.cart-items')
const removeAllProductsBtn = $.querySelector('#remove-all-products')
const cartTotalPriceElem = $.querySelector('.cart-total-price')

allProducts.forEach(function (product) {
    shopItemsContainer.innerHTML +=
    `
        <div class="product-item" />
        <span class="shop-item-title">Album ${product.id}</span>
        <img class="shop-item-image" src=${product.img} />
        <div class="shop-item-details">
            <span class="shop-item-price">$ ${product.price}</span>
            <button class="btn btn-primary shop-item-button" type="button">
            ADD TO CART
            </button>
        </div>
        </div>
    `
})

function addProductToBasketArray(productId) {


}

function basketProductsGenerator(userBasketArray) {


}

function removeProductFromBasket(productId) {

}

removeAllProductsBtn.addEventListener('click', function () {

})

function calcTotalPrice(userBasketArray) {

}

function updateProductCount(productId, newCount) {

}