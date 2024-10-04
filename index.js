//const humanAge = document.getElementById("human-age");

function handleChange(event) {
    const userInput = event.target.value;
    const humanAge = document.getElementById("human-age");
    humanAge.setAttribute("value", userInput);
};

function handleClick() {
    const humanAge = document.getElementById("human-age");
    const humanYears = humanAge.value;
    const dogYears = humanYears * 7 + 3;
    const result = document.getElementById("result");
    result.classList.remove("hidden");
    result.innerText = `Dog age is: ${dogYears}`;
    console.log(dogYears);
};