document.addEventListener("DOMContentLoaded", () => {
    const btns = document.querySelector(".allBtns");
    const display = document.querySelector("#valueDisplayer");
    const evalBtn = document.querySelector(".evaluate");
    const allClear = document.querySelector(".allClear");
    const deleteBtn = document.querySelector(".deleteBtn");
    const percentage = document.querySelector(".percentage");
  
    btns.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn")) {
        display.value += e.target.textContent;
      }
    });
  
    // Evaluate functionality
    evalBtn.addEventListener("click", () => {
      if (display.value) {
        try {
          display.value = eval(display.value);
        } catch {
          display.value = "Error";
        }
      }
    });
  
    // Clear all input
    allClear.addEventListener("click", () => {
      display.value = "";
    });
  
    // Delete last entered character
    deleteBtn.addEventListener("click", () => {
      display.value = display.value.slice(0, -1);
    });
  
    // Percentage functionality
    percentage.addEventListener("click", () => {
      if (display.value) {
        display.value = eval(display.value) / 100;
      }
    });
  });
  