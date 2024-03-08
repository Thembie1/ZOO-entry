function updatePrice() {
  const ageGroupSelect = document.getElementById("ageGroup");
  const quantityInput = document.getElementById("quantity");
  const totalAmountInput = document.getElementById("totalAmount");

  const ageGroup = ageGroupSelect.value;
  const quantity = quantityInput.value;

  let price = 0;

  switch (ageGroup) {
    case "kid":
      price = 100;
      break;
    case "teenager":
      price = 150;
      break;
    case "adult":
      price = 200;
      break;
  }

  const totalAmount = price * quantity;

  totalAmountInput.value = "R" + totalAmount;
}

const zooForm = document.getElementById("zooForm");
zooForm.addEventListener("submit", function(event) {
  event.preventDefault();
  // Add form submission handling logic here
  
  // Example:
  const name = document.getElementById("name").value;
  const ageGroup = document.getElementById("ageGroup").value;
  const quantity = document.getElementById("quantity").value;
  const totalAmount = document.getElementById("totalAmount").value;

  
  console.log("Age Group: " + ageGroup);
  console.log("Quantity: " + quantity);
  console.log("Total Amount Due: " + totalAmount);
});