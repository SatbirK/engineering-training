console.log("Engineering Training");
const modalButton = document.getElementById("modalButton");
console.log("modalButton : ", modalButton);
const modalContainer = document.getElementById('modalContainer');

modalButton.addEventListener("click", function () {
  console.log("clicked button!");
  modalContainer.classList.toggle("hidden");
});

