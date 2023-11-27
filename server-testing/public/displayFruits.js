// Function to display all fruits
function displayFruits(fruits) {
  const fruitListContainer = document.getElementById("fruitList");

  // Clear existing content
  fruitListContainer.innerHTML = "";

  // Loop through the fruits and create HTML elements
  fruits.forEach((fruit) => {
    const fruitElement = document.createElement("div");
    fruitElement.textContent = `${fruit.name} - Type: ${fruit.type}`;
    fruitListContainer.appendChild(fruitElement);
  });
}

// Fetch all fruits when the page loads
fetch("/allFruits")
  .then((response) => response.json())
  .then((data) => {
    displayFruits(data);
  })
  .catch((error) => console.error("Error fetching fruits:", error));
