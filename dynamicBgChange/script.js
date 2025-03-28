const inputColor = document.querySelector("#bgColor");
const container = document.querySelector(".container");
const savedColor = localStorage.getItem("bgColor");

if(savedColor){
  container.style.background = savedColor;
  inputColor.value = savedColor;
}


inputColor.addEventListener("input", () => {
  container.style.background = inputColor.value;
  localStorage.setItem("bgColor", inputColor.value);
});
