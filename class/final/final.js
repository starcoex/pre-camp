const checkValidation = () => {
  const emailInput = document.getElementById("email").value;
  const passwordInput = document.getElementById("password").value;
  const passwordConfirmInput = document.getElementById("passwordConfirm").value;
  if (
    emailInput !== "" &&
    passwordInput !== "" &&
    passwordConfirmInput !== ""
  ) {
    document.getElementById("submit").disabled = false;
  } else {
    document.getElementById("submit").disabled = true;
  }
};

const changeFocus = () => {
  let firstPhoneNumber = document.getElementById("firstPhoneNumber").value;

  if (firstPhoneNumber.length === 3) {
    console.log(firstPhoneNumber);
    document.getElementById("secondPhoneNumber").focus();
  }
};

const changeFocus2 = () => {
  let secondPhoneNumber = document.getElementById("secondPhoneNumber").value;

  if (secondPhoneNumber.length === 4) {
    console.log(firstPhoneNumber);
    document.getElementById("threePhoneNumber").focus();
  }
};

let isStarted = false;
const auth = () => {
  if (isStarted === false) {
    isStarted = true;
    document.getElementById("finish").disabled = true;
    const token = String(Math.floor(Math.random() * 100000)).padStart(5, "0");
    document.getElementById("target").innerText = token;
    let time = 5;
    let timer;
    timer = setInterval(() => {
      if (time >= 0) {
        let second = String(time % 60).padStart(2, "0");
        let minute = Math.floor(time / 60);
        let result = `${minute} : ${second}`;
        document.getElementById("timer").innerText = result;
        time = time - 1;
      } else {
        document.getElementById("finish").disabled = false;
        isStarted = false;
        clearInterval(timer);
      }
    }, 1000);
  } else {
  }
};
