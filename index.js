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
    console.log(dogYears);
};

// const calculateDogAge = () => {
//     const humanAgeInput = document.getElementById("human-age");
//     const humanYears = parseInt(humanAgeInput.value, 10);

//     if (isNaN(humanYears) || humanYears < 0) {
//         alert("Please enter a valid non-negative number for human age.");
//         return;
//     }

//     const dogYears = humanYears * 7 + 3;
//     const result = document.getElementById("result");
//     result.innerText = `Dog age is ${dogYears}`;
//     result.classList.remove("hidden");
// };