/* js for menu */

var menuItems = document.getElementById("menu-items");

menuItems.style.maxHeight = "0px";

function menutoggle(){
  if(menuItems.style.maxHeight == "0px"){
    menuItems.style.maxHeight = "200px";
  }else{
    menuItems.style.maxHeight = "0px";
  }
}

// CART JS//

    // Function to update the cart count badge
    function updateCartCount() {
        // Retrieve the cart from localStorage
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        // Calculate the total number of items in the cart
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        
        // Update the badge
        const cartCountElement = document.getElementById('cartCount');
        if (cartCountElement) {
            cartCountElement.textContent = totalItems;
        }
    }

    // Call the function when the page loads
    document.addEventListener('DOMContentLoaded', updateCartCount);
