// Mobile Menu Toggle
let mobileMenuToggle = document.querySelector('button.mobile-menu-toggle')
let mobileMenu = document.querySelector('ul.mobile-menu')

mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile-menu-active');
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