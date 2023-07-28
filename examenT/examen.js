// TODO: STEP 0 - Create an array of category objects with "short_name" property
const categories = [
  { short_name: "Lunch" },
  { short_name: "Dinner" },
  { short_name: "Sushi" },
  // Add more category objects as needed
];
// TODO: STEP 1 - Implement a function to select a random category from the categories array
function getRandomCategory() {
  const randomIndex = Math.floor(Math.random() * categories.length);
  return categories[randomIndex].short_name;
}
// TODO: STEP 2 - Modify the loadMenuItems function to accept the category short name
function loadMenuItems(categoryShortName) {
  // Your code to load menu items for the given category
}
document.addEventListener("DOMContentLoaded", function () {
  // TODO: STEP 3 - Update onclick event for the "Specials" tile
  const specialsTile = document.getElementById("specials-tile");
  specialsTile.onclick = function () {
    const randomCategoryShortName = getRandomCategory();
    loadMenuItems(randomCategoryShortName);
  };

  // ... Other code ...
});
