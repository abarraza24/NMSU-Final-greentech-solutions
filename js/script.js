document.addEventListener("DOMContentLoaded", function () {
    //product page
    var searchInput  = document.getElementById("product-search");
    var filterSelect = document.getElementById("product-filter");
    var productList  = document.getElementById("product-list");
    var productMsg   = document.getElementById("product-message");

    if (searchInput && filterSelect && productList && productMsg) {
        var productCards = productList.querySelectorAll(".product-card");

        function applyProductFilters() {
            var searchTerm = searchInput.value.toLowerCase().trim();
            var category   = filterSelect.value;
            var visible = 0;
            for (var i = 0; i < productCards.length; i++) {
                var card = productCards[i];
                var cardCategory = card.getAttribute("data-category");
                var cardText = card.textContent.toLowerCase();
                var matchesCategory = (category === "all" || cardCategory === category);
                var matchesSearch   = (searchTerm === "" || cardText.indexOf(searchTerm) !== -1);

                if (matchesCategory && matchesSearch) {
                    card.style.display = "";
                    visible = visible + 1;
                } else {
                    card.style.display = "none";
                }

            }
            if (visible === 0) {
                productMsg.textContent = "No products match your search. Try a different keyword or category.";
            } else if (visible === 1) {
                productMsg.textContent = "Showing 1 product.";
            } else {
                productMsg.textContent = "Showing " + visible + " products.";
            }
        }

        searchInput.addEventListener("input", applyProductFilters);
        filterSelect.addEventListener("change", applyProductFilters);
        applyProductFilters();
    }

    //Contact Page
    var contactForm = document.getElementById("contact-form");
    var formMessage = document.getElementById("form-message");
    if (contactForm && formMessage) {
        var nameField    = document.getElementById("contact-name");
        var emailField   = document.getElementById("contact-email");
        var messageField = document.getElementById("contact-message"); 
        function isValidEmail(value) {
            var atIndex  = value.indexOf("@");
            var dotIndex = value.lastIndexOf(".");
            return (atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < value.length - 1);
        }
        
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            var name    = nameField.value.trim();
            var email   = emailField.value.trim();
            var message = messageField.value.trim();

            if (name === "") {
                formMessage.textContent = "Please enter your name before submitting.";
                nameField.focus();
                return;
            }
            if (email === "") {
                formMessage.textContent = "Please enter your email address before submitting.";
                emailField.focus();
                return;
            }
            if (!isValidEmail(email)) {
                formMessage.textContent = "Please enter a valid email address (example: name@example.com).";
                emailField.focus();
                return;
            }
            if (message === "") {
                formMessage.textContent = "Please write a short message before submitting.";
                messageField.focus();
                return;
            }
            if (message.length < 10) {
                formMessage.textContent = "Please write a longer message (at least 10 characters).";
                messageField.focus();
                return;
            }
            formMessage.textContent = "Thanks, " + name + "! Your message has been received. " + "Someone from GreenTech Solutions will get back to you soon.";
            contactForm.reset();
        });
    }

    //Resources Page
    var newsletterForm    = document.getElementById("newsletter-form");
    var newsletterMessage = document.getElementById("newsletter-message");
    
    if (newsletterForm && newsletterMessage) {
        var newsletterEmail = document.getElementById("newsletter-email");
        function isValidNewsletterEmail(value) {
            var atIndex  = value.indexOf("@");
            var dotIndex = value.lastIndexOf(".");
            return (atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < value.length - 1);
        }
        newsletterForm.addEventListener("submit", function (event) {
            event.preventDefault();
            var email = newsletterEmail.value.trim();
            if (email === "") {
                newsletterMessage.textContent = "Please enter your email address before subscribing.";
                newsletterEmail.focus();
                return;
            }
            if (!isValidNewsletterEmail(email)) {
                newsletterMessage.textContent = "That email address doesn't look right. Please double-check it.";
                newsletterEmail.focus();
                return;
            }
            newsletterMessage.textContent = "Thanks! You're on the list. Watch your inbox once a month.";
            newsletterForm.reset();
        });
    }
});