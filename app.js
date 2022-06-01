const firstBtn = document.getElementById("first-btn");
const secondBtn = document.getElementById("sec-btn");
const blueMonster = document.getElementById("blue-monster");
const pinkMonster = document.getElementById("pink-monster");
const leftLight = document.getElementById("light");
const rightLight = document.getElementById("light-right");

function toggleFirstBtn() {
  firstBtn.classList.toggle("active-btn");
  blueMonster.classList.toggle("on");
  leftLight.classList.toggle("on");
}

firstBtn.addEventListener("click", function () {
  toggleFirstBtn();
});

function toggleSecondBtn() {
  secondBtn.classList.toggle("active-btn");
  pinkMonster.classList.toggle("on");
  rightLight.classList.toggle("on");
}

secondBtn.addEventListener("click", function () {
  toggleSecondBtn();
});
