const buttons = document.querySelectorAll(".control");
const themeBtn = document.querySelector(".theme-btn");

buttons.forEach(button => {
  button.addEventListener("click", function() {
    const activeButton = document.querySelector(".active-btn");
    activeButton.classList.remove("active-btn");

    this.classList.add("active-btn");

    const activeContent = document.querySelector(".active");
    activeContent.classList.remove("active");

    const contentId = button.dataset.id;

    
    document.getElementById(contentId).classList.add("active");
  });
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});
