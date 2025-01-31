let $ = document
let backBtn = $.querySelector('#back')
let shoeTitle = $.querySelector('h1')
let shoeDesc = $.querySelector('p')
let shoeImage = $.querySelector('img')

let productsArray = [
    { id: 1, title: 'Sport Shoe', price: 53, img: 'images/1.png', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atnobis, ipsum quas excepturi sed minus modi officia corrupti, veniamrem tempora, tenetur dicta nesciunt neque! Voluptate consequunturincidunt molestias? (Sport Shoe)' },
    { id: 2, title: 'Women Shoe', price: 81, img: 'images/2.png', desc: 'Lorem ipsum dolor sit amet, consecteturadipisicing elit. Aperiam atnobis, ipsum quas excepturi sed minus modi officia corrupti, veniamrem tempora, tenetur dicta nesciunt neque! Voluptate consequunturincidunt molestias? (Women Shoe)' },
    { id: 3, title: 'Boots',      price: 34, img: 'images/3.png', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atnobis, ipsum quas excepturi sed minus modi officia corrupti, veniamrem tempora, tenetur dicta nesciunt neque! Voluptate consequunturincidunt molestias? (Boots)' },
]

let locationParams = new URLSearchParams(location.search)
let productID = locationParams.get('id') // string  

let productObject = productsArray.find((product) => product.id === Number(productID) )

if (productObject) {
    shoeTitle.innerHTML = productObject.title
    shoeDesc.innerHTML = productObject.desc
    // shoeImage.setAttribute('src', productObject.img)
    shoeImage.src = productObject.img
} else {
    history.back()
}

backBtn.addEventListener('click', function () {
    history.back()
})

// ✌ :))