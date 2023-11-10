let passwordLength = 8;

let isUpperCase = false;
let isNumbers = false;
let isSymbols = false;

const passRangInputEl = document.getElementById("passRangInput");
const passRangeValueEl = document.getElementById("passRangeValue");
const genBtnEl = document.getElementById("genBtn");
const passwordEl = document.getElementById("password");

//1) slider select
//2) password generator
//3) password display
//4) copy paste

const generatePassword = (passLength) => {
  //2
  const loweCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseLetters = isUpperCase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
  const numbers = isNumbers ? "0123456789" : "";
  const symbols = isSymbols ? "!@#$%^&*()_+" : "";

  const passwordChar = loweCaseLetters + upperCaseLetters + numbers + symbols;

  let password = "";

  for (let i = 0; i < passLength; i++) {
    const charIndex = Math.floor(Math.random() * passwordChar.length);
    password += passwordChar[charIndex];
  }
  return password;
};

passRangInputEl.addEventListener("input", (e) => {
  //1
  passwordLength = +e.target.value;
  passRangeValueEl.innerText = passwordLength;
});

genBtnEl.addEventListener("click", () => {
  //3
  const upperCaseCheckEl = document.getElementById("uppercase");
  const numbersCheckEl = document.getElementById("numbers");
  const symbolsCheckEl = document.getElementById("symbols");

  isUpperCase = upperCaseCheckEl.checked;
  isNumbers = numbersCheckEl.checked;
  isSymbols = symbolsCheckEl.checked;

  const password = generatePassword(passwordLength);
  passwordEl.innerHTML = password;
  console.log("password :", password);
});

passwordEl.addEventListener("click", (e) => {
  //4
  if (e.target.innerText.length > 0) {
    navigator.clipboard
      .writeText(passwordEl.innerText)
      .then(() => {
        alert("Copied to clipboard");
      })
      .catch((err) => {
        alert("could not copy");
      });
  }
});
