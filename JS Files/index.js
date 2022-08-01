let isSeller = false;
let isCustomer = false;

if(seller){ seller.addEventListener('click', sellerSignIn) }

if(customer){ customer.addEventListener('click',customerSignIn);}

function sellerSignIn(){
    if(!isSeller){
        localStorage.setItem('isSeller', JSON.stringify(!isSeller));
        localStorage.setItem('isCustomer',JSON.stringify(isCustomer));
        location.replace("./Home-Page.html");   
    }
}

function customerSignIn(){
    if(!isCustomer){
        localStorage.setItem('isCustomer', JSON.stringify(!isCustomer));
        localStorage.setItem('isSeller', JSON.stringify(isSeller));
        location.replace("./Home-Page.html");
    }
}
