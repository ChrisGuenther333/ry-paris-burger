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