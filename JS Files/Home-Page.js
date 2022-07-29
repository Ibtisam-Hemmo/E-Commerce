signOutBtn.addEventListener("click", signOut);

// If you pressed sign out Icon, you will be in the landing page
function signOut() {
    location.replace("./index.html");
    isSeller = false;
    isCustomer = false;
}

// If the seller is in the page, add the add form 
if(JSON.parse(localStorage.getItem("isCustomer"))){
    console.log('log')
    add_form.innerHTML ='';
}