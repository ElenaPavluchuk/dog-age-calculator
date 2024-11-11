const humanAge = document.getElementById("human-age");

function handleChange(event) {
    const userInput = event.target.value;
    humanAge.setAttribute("value", userInput);
};

function handleClick() {
    const humanYears = humanAge.value;
    const dogYears = humanYears * 7 + 3;
    const result = document.getElementById("result");
    result.classList.remove("hidden");
    result.innerText = `Dog age is: ${dogYears}`;
};