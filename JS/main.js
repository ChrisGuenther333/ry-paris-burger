// Mobile menu toggle
let mobileNav = document.querySelector('div.mobile-nav');
let mobileMenuToggle = document.querySelector('button.mobile-menu-toggle');
let mobileMenu = document.querySelector('ul.mobile-menu');
// Mobile touch
mobileMenuToggle.addEventListener('touchstart', () => {
    mobileMenu.classList.toggle('mobile-menu-active');
})
// Mouse hover/out
mobileNav.addEventListener('mouseover', () => {
    if (!mobileMenu.classList.contains('mobile-menu-active')) {
        mobileMenu.classList.add('mobile-menu-active');
    }
})
mobileNav.addEventListener('mouseout', () => {
    if (mobileMenu.classList.contains('mobile-menu-active')) {
        mobileMenu.classList.remove('mobile-menu-active');
    }
})

// Save Recipe Button
let saveRecipe = document.querySelector('.save-recipe');
let saved = false;

function checkSave() {
    if (!saved) {
            saveRecipe.innerText = "Saved!"
            saved = true;
        }
    else {
        saveRecipe.innerText = "Save Recipe"
        saved = false;
    }
}