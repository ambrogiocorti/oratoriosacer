document.addEventListener("DOMContentLoaded", function() {
    let scrollTopButton = document.getElementById("scrollTop");

    window.onscroll = function() {
        if (document.documentElement.scrollTop > 100) {
            scrollTopButton.style.display = "block";
        } else {
            scrollTopButton.style.display = "none";
        }
    };

    scrollTopButton.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
