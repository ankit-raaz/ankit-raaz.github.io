// JavaScript
function checkSelectedOption() {
  // Get all radio inputs with the specified name
  const radioInputs = document.getElementsByName("slider");

  // Loop through the radio inputs to find the checked one
  for (let i = 0; i < radioInputs.length; i++) {
    if (radioInputs[i].checked) {
      console.log("Checked option: ", radioInputs[i].id);
      // You can do whatever you want with the selected value here
      break; // Exit the loop since we found the checked radio input
    }
  }
}