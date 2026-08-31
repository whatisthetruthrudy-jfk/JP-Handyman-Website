// J & P Handyman Services Website

console.log("J & P Handyman Services website loaded");


// ========================================
// HAMBURGER MENU
// ========================================

function resetMenu() {
    const menuToggle = document.getElementById("menuToggle");
    const mainMenu = document.getElementById("mainMenu");

    if (!menuToggle || !mainMenu) {
        return;
    }

    mainMenu.classList.remove("menu-open");
    menuToggle.classList.remove("menu-active");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
}


// Initialize menu
function initializeMenu() {

    const menuToggle = document.getElementById("menuToggle");
    const mainMenu = document.getElementById("mainMenu");

    if (!menuToggle || !mainMenu) {
        return;
    }

    // Always start with the menu closed
    resetMenu();

    // Prevent duplicate event listeners
    if (menuToggle.dataset.menuInitialized === "true") {
        return;
    }

    menuToggle.dataset.menuInitialized = "true";


    // ========================================
    // OPEN / CLOSE MENU
    // ========================================

    menuToggle.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();

        const isOpen = mainMenu.classList.contains("menu-open");

        if (isOpen) {

            // CLOSE
            mainMenu.classList.remove("menu-open");
            menuToggle.classList.remove("menu-active");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open menu");

        } else {

            // OPEN
            mainMenu.classList.add("menu-open");
            menuToggle.classList.add("menu-active");

            menuToggle.setAttribute("aria-expanded", "true");
            menuToggle.setAttribute("aria-label", "Close menu");

        }

    });


    // ========================================
    // CLOSE MENU AFTER CLICKING A LINK
    // ========================================

    const menuLinks = mainMenu.querySelectorAll("a");

    menuLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            resetMenu();

        });

    });


    // ========================================
    // CLOSE MENU WHEN CLICKING OUTSIDE
    // ========================================

    document.addEventListener("click", function (event) {

        if (
            !mainMenu.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {
            resetMenu();
        }

    });

}


// ========================================
// HANDLE NORMAL PAGE LOAD
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    initializeMenu();

});


// ========================================
// HANDLE BROWSER BACK / FORWARD CACHE
// ========================================

window.addEventListener("pageshow", function () {

    resetMenu();

    initializeMenu();

});


// ========================================
// CONTACT FORM MESSAGE
// ========================================

function estimateMessage() {

    alert(
        "Thank you for contacting J & P Handyman Services. We will get back to you soon!"
    );

}