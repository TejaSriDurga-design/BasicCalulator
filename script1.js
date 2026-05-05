const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {

    // CLEAR
    if (item.id === "clear") {
      display.innerText = "";
    }

    // BACKSPACE
    else if (item.id === "backspace") {
      display.innerText = display.innerText.slice(0, -1);
    }

    // PERCENTAGE
    else if (item.id === "percentage") {
      if (display.innerText !== "") {
        display.innerText = eval(display.innerText) / 100;
      }
    }

    // EQUAL
    else if (item.id === "equal") {
      if (display.innerText !== "") {
        let expression = display.innerText
          .replace(/×/g, "*")
          .replace(/÷/g, "/");

        display.innerText = eval(expression);
      } else {
        display.innerText = "Empty!";
        setTimeout(() => (display.innerText = ""), 2000);
      }
    }

    // NUMBERS & OPERATORS
    else {
      display.innerText += item.innerText;
    }
  };
});


// THEME TOGGLE (unchanged)
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");

let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};
