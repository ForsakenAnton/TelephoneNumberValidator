const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

// 1 555-555-5555
// 1 (555) 555-5555
// 1(555)555-5555
// 1 555 555 5555
// 5555555555
// 555-555-5555
// (555)555-5555
const regexValidPhoneNumber = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

const validateInput = () => {
    const text = userInput.value;
    if (!text) {
        alert("Please provide a phone number");
    } else if (!regexValidPhoneNumber.test(text)) {
        resultsDiv.textContent = `Invalid US number: ${text}`;
    } else {
        resultsDiv.textContent = `Valid US number: ${text}`;
    }
}

userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        validateInput();
    }
});

userInput.addEventListener("input", (e) => {
    const regexValidSymbols = /^[\s\d()-]+$/;

    if (!regexValidSymbols.test(e.target.value)) {
        let value = e.target.value;
        const lastSymbol = value[value.length - 1];
        value = value.replace(lastSymbol, "");
        e.target.value = value;
    }
});

checkBtn.addEventListener("click", () => {
    validateInput();
});

clearBtn.addEventListener("click", () => {
    // userInput.textContent = "";
    resultsDiv.textContent = "";
});



// There is only debug below
const debugValidateInput = (text) => {
    if (!text) {
        console.log("Please provide a phone number");
    } else if (!regexValidPhoneNumber.test(text)) {
        resultsDiv.textContent = `Invalid US number: ${text}`;
        console.log(`Invalid US number: ${text}`);
    } else {
        resultsDiv.textContent = `Valid US number: ${text}`;
        console.log(`Valid US number: ${text}`);
    }
}

debugValidateInput("1 555-555-5555"); // valid
debugValidateInput("1 (555) 555-5555"); // valid
debugValidateInput("5555555555"); // valid
debugValidateInput("555-555-5555"); // valid
debugValidateInput("(555)555-5555"); // valid
debugValidateInput("1(555)555-5555"); // valid

debugValidateInput("555-5555"); // invalid
debugValidateInput("5555555"); // invalid
debugValidateInput("1 555)555-5555"); // invalid

debugValidateInput("1 555 555 5555"); // valid
debugValidateInput("1 456 789 4444"); // valid

debugValidateInput("123**&!!asdf#"); // invalid
debugValidateInput("55555555"); // invalid
debugValidateInput("(6054756961)"); // invalid

debugValidateInput("2 (757) 622-7382"); // invalid
debugValidateInput("0 (757) 622-7382"); // invalid
debugValidateInput("-1 (757) 622-7382"); // invalid
debugValidateInput("2 757 622-7382"); // invalid
debugValidateInput("10 (757) 622-7382"); // invalid

debugValidateInput("27576227382"); // invalid
debugValidateInput("(275)76227382"); // invalid
debugValidateInput("2(757)6227382"); // invalid
debugValidateInput("2(757)622-7382"); // invalid
debugValidateInput("555)-555-5555"); // invalid

debugValidateInput("(555-555-5555"); // invalid
debugValidateInput("(555)5(55?)-5555"); // invalid
debugValidateInput("55 55-55-555-5"); // invalid
debugValidateInput("11 555-555-5555"); // invalid
