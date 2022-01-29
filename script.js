const bigWrapper = document.querySelector(".big-wrapper");
const toggleBTN = document.querySelector(".toggle-btn");

toggleBTN.addEventListener("click", function () {
  bigWrapper.classList.toggle("dark");
});
