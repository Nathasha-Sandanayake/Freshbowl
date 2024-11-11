document.addEventListener("DOMContentLoaded", () => {
    const seeRecipeButtons = document.querySelectorAll(".viewRecipeButton");

    //Fetch details of a food item 
    seeRecipeButtons.forEach(button => {
        button.addEventListener("click", async (event) => {
            const card = event.target.closest(".card");
            const recipeDetails = card.querySelector(".recipeDetails");
            const recipeId = event.target.getAttribute("data-id");

            try {
                const response = await fetch(`http://localhost:8080/api/recipes/${recipeId}`);
                if (!response.ok) {
                    throw new Error("Recipe unavailable");
                }
                const recipe = await response.json();

                recipeDetails.querySelector(".recipeIngredients").textContent = `Ingredients: ${recipe.ingrediants}`;
                recipeDetails.querySelector(".recipeInstructions").textContent = `Instructions: ${recipe.instructions}`;

                recipeDetails.classList.remove("d-none");
                event.target.style.display = "none"; 

            } catch (error) {
                console.error("Error fetching recipe:", error);
            }
        });
    });

    //Go to the previous mode
    document.querySelectorAll(".hideButton").forEach(backButton => {
        backButton.addEventListener("click", (event) => {
            const card = event.target.closest(".card");
            const recipeDetails = card.querySelector(".recipeDetails");
            const seeRecipeBtn = card.querySelector(".viewRecipeButton");
            recipeDetails.classList.add("d-none");
            seeRecipeBtn.style.display = "block"; 
        });
    });
});
