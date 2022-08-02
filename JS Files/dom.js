// From index.html
const seller = document.getElementById('seller');
const customer = document.getElementById('customer');

// From Home-Page.html
const List = document.querySelectorAll("header nav ul li a");
const signOutBtn = document.getElementById('signOut');
const add_form = document.getElementById('add');
const productsContainer = document.getElementById('products-container');

// List[0].classList = "clicked"; // Activating bottom border in Home Page navbar
// List.forEach((ele) => {
//     ele.addEventListener("click", () => {
//         List.forEach((anchor) => {
//         anchor.classList.remove("clicked");
//         ele.classList.add("clicked");
//         });
//     })
// });


let initialProducts =[
    {
        id : 1,
        img_url: './Assets/dress 1.png',
        name : 'Dress',
        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, repellat.',
        price : 20,
        category: 'dresses',
        quantity : 0,
    },

    {
        id : 2,
        img_url: './Assets/dress 2.png',
        name : 'Dress 2',
        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, repellat.',
        price : 30,
        category: 'dresses',
        quantity : 0,
    },

    {
        id : 3,
        img_url: './Assets/dress 3.png',
        name : 'Dress 3',
        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, repellat.',
        price : 10,
        category: 'dresses',
        quantity : 0,
    },

    {
        id : 4,
        img_url: './Assets/dress 4.png',
        name : 'Dress 4',
        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, repellat.',
        price : 40,
        category: 'dresses',
        quantity : 0,
    },

    {
        id : 5,
        img_url: './Assets/dress 5.png',
        name : 'Dress',
        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, repellat.',
        price : 20,
        category: 'dresses',
        quantity : 0,
    },

    {
        id : 6,
        img_url: './Assets/dress 6.png',
        name : 'Dress',
        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, repellat.',
        price : 20,
        category: 'dresses',
        quantity : 0,
    },

    {
        id : 7,
        img_url: './Assets/dress 7.png',
        name : 'Dress',
        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, repellat.',
        price : 20,
        category: 'dresses',
        quantity : 0,
    },

    {
        id : 8,
        img_url: './Assets/dress 8.png',
        name : 'Dress',
        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, repellat.',
        price : 20,
        category: 'dresses',
        quantity : 0,
    },

    {
        id : 9,
        img_url: './Assets/dress 9.png',
        name : 'Dress',
        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, repellat.',
        price : 20,
        category: 'dresses',
        quantity : 0,
    },
]

productsContainer.innerHTML='';

function renderProducts(){ 
    initialProducts.forEach((ele)=>{

        const productContainer = document.createElement('div');
        productContainer.setAttribute('class', 'product-container');
        productContainer.setAttribute('id', ele.id);
        productsContainer.appendChild(productContainer);

        const cartButton = document.createElement("button");
        cartButton.setAttribute('class', 'btn cart-icon');
        productContainer.appendChild(cartButton);

        const cartIcon = document.createElement('i');
        cartIcon.setAttribute('class', 'fa fa-shopping-cart');
        cartButton.appendChild(cartIcon);

        const productImage = document.createElement('img');
        productImage.setAttribute('id', 'product-img');
        productImage.setAttribute('src', ele.img_url )
        productContainer.appendChild(productImage);

        const title = document.createElement('h3');
        title.setAttribute('class', 'title');
        title.textContent = ele.name;
        productContainer.appendChild(title);

        const description = document.createElement('p');
        description.setAttribute('class', 'description');
        description.textContent = ele.description;
        productContainer.appendChild(description);

        const controlButtons = document.createElement('div');
        controlButtons.setAttribute('id', 'control-buttons');
        productContainer.appendChild(controlButtons);

        const price = document.createElement('h3');
        price.setAttribute('class', 'price');
        price.textContent = ele.price + ' $';
        controlButtons.appendChild(price);

        const buttonsContainer = document.createElement('div');
        buttonsContainer.setAttribute('class', 'buttons-container');
        controlButtons.appendChild(buttonsContainer);

        const plusButton = document.createElement("button");
        plusButton.setAttribute('class', 'btn plus');
        plusButton.textContent = '+';
        buttonsContainer.appendChild(plusButton);
        // plusButton.addEventListener('click', increaseQuantity)

        const quantity = document.createElement('h4');
        quantity.setAttribute('class', 'quantity');
        quantity.textContent = ele.quantity;
        buttonsContainer.appendChild(quantity);

        const minusButton = document.createElement("button");
        minusButton.setAttribute('class', 'btn minus');
        minusButton.textContent = '-'
        buttonsContainer.appendChild(minusButton);
    //  minusButton.addEventListener('click', decreaseQuantity)
})}

renderProducts();
