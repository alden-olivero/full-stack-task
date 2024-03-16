/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
let cartCounter = 0;

        // Function to increase cart counter
        function addToCart() {
            cartCounter++;
            updateCartCounter();
        }

        // Function to update cart counter display
        function updateCartCounter() {
            const cartCounterElement = document.getElementById('cartCounter');
            if (cartCounterElement) {
                cartCounterElement.innerText = cartCounter;
            }
        }
