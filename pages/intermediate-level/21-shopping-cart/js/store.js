let allProducts = [
    { id: 1, title: 'Album 1', price: 5,   img: 'Images/Album1.png', count: 1 },
    { id: 2, title: 'Album 2', price: 15,  img: 'Images/Album2.png', count: 1 },
    { id: 3, title: 'Album 3', price: 20,  img: 'Images/Album3.png', count: 1 },
    { id: 4, title: 'Album 4', price: 100, img: 'Images/Album4.png', count: 1 },
    { id: 5, title: 'Coffee',  price: 5,   img: 'Images/Cofee.png',  count: 1 },
    { id: 6, title: 'Shirt',   price: 50,  img: 'Images/Shirt.png',  count: 1 },
]

let userBasket = []
let tableRowCount = 1

let $ = document
const shopItemsContainer = $.querySelector('.shop-items')
const tBodyContainer = $.querySelector('.table-body')
const removeAllProductsBtn = $.querySelector('#remove-all-products')
const cartTotalPriceElem = $.querySelector('.cart-total-price')

allProducts.forEach(function (product) {
    shopItemsContainer.insertAdjacentHTML("beforeend", 
    `
        <div class="product-item" >
            <span class="shop-item-title">Album ${product.id}</span>
            <img class="shop-item-image" src=${product.img} />
            <div class="shop-item-details">
                <span class="shop-item-price">$ ${product.price}</span>
                <button 
                    class="btn btn-primary shop-item-button"  
                    onclick="addProductToBasketArray(${product.id})"
                >
                  ADD TO CART
                </button>
            </div>
        </div>
    `
    )
})

function addProductToBasketArray(productId) {
    let isInLate =  userBasket.some(product => product.id === productId)
    console.log("isInLate: ", isInLate);
    
    if(!isInLate){

        let newAddProduct = allProducts.find(product => product.id === productId)
        userBasket.push(newAddProduct)
        setLocalStorage(userBasket)
        basketProductsGenerator(userBasket)
    }else{
        alert("این محصول قبلا به سبد خرید اضافه شده است")
    }

}

function basketProductsGenerator(userBasketArray) {
    tBodyContainer.innerHTML = ""
    userBasketArray.forEach((selectedProduct, index) => {
        tBodyContainer.innerHTML +=
            `
          <tr>
            <th scope="row">${index+1}</th>
            <td>
              <img 
                class="cart-item-image ms-3" 
                src=${selectedProduct.img} 
                width="100" 
                height="100 
              />
              <span class="fw-bold">${selectedProduct.title}</span>
            </td>
            <td>
              <span class="cart-price fw-bold">$ ${selectedProduct.price}</span>
            </td>
            <td>
              <input 
                class="cart-quantity-input" 
                type="number" 
                value=${selectedProduct.count} 
                onchange="updateProductCount(${selectedProduct.id}, event)"
             />
              <button class="btn btn-danger" 
                      onclick="removeProductFromBasket(${selectedProduct.id})"       
              >
                REMOVE
              </button>
            </td>
          </tr>
        `
    })
    calcTotalPrice(userBasketArray)
}

function removeProductFromBasket(productId) {
     userBasket = userBasket.filter(product => product.id !== productId)
     setLocalStorage(userBasket)
    basketProductsGenerator(userBasket)
}

removeAllProductsBtn.addEventListener('click', function () {
    userBasket = []
    setLocalStorage(userBasket)
    basketProductsGenerator(userBasket)

})

function calcTotalPrice(userBasketArray) {
    let totalPrice = userBasketArray.reduce((sum, product) => {
        return sum + product.price * product.count
    }, 0)
    cartTotalPriceElem.innerHTML = totalPrice
}

function updateProductCount(productId, event) {
    if(event.target.value > 0) {
        userBasket.forEach(product => {
            if (product.id === productId) {
                product.count = event.target.value
            }
        })
    }else{
        event.target.value = "1"
    }

    calcTotalPrice(userBasket)
    setLocalStorage(userBasket)
    

}
function setLocalStorage(userBasketArry){
    localStorage.setItem("basket", JSON.stringify(userBasketArry))
}

window.onload = () => {
    let localStorageBasket = JSON.parse(localStorage.getItem("basket"))
    console.log("localStorageBasket: ", localStorageBasket);
    if(localStorageBasket) {
        userBasket = localStorageBasket
        basketProductsGenerator(userBasket)
    }
}
