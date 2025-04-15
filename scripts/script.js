document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM completamente caricato");
    
    const scrollTopButton = document.getElementById("scrollTop");
    if(scrollTopButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollTopButton.classList.add('active');
            } else {
                scrollTopButton.classList.remove('active');
            }
        });

        scrollTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    const cookieOverlay = document.getElementById("cookieOverlay");
    const acceptCookiesBtn = document.getElementById("acceptCookies");
    
    if (cookieOverlay && acceptCookiesBtn) {
        cookieOverlay.style.display = "flex";
        document.body.classList.add("cookie-lock");
        
        acceptCookiesBtn.addEventListener("click", function() {
            cookieOverlay.style.display = "none";
            document.body.classList.remove("cookie-lock");
        });
    }
});