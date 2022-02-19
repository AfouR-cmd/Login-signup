// CONTINUE THIS TO LOAD THE LOGIN WHEN THE PAGE LOADS
window.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  form.classList.add('active');
});
// window.addEventListener('DOMContentLoaded', init);
// Switch form, Login/Signup
const about = document.querySelector('.about');
const aboutBtn = document.querySelectorAll('.about-btn');
const articles = document.querySelectorAll('.content');
// const greetings = document.querySelector('.greetings');

about.addEventListener('click', function (e) {
  const id = e.target.dataset.id;
  if (id) {
    aboutBtn.forEach(function (btn) {
      btn.classList.remove('active');
      e.target.classList.add('active');
    });
    articles.forEach(function (article) {
      article.classList.remove('active');
      const element = document.getElementById(id);
      element.classList.add('active');
    });
  }
});

// End Switch form, Login/Signup
// LOGIN
const login = document.querySelector('form');
// console.log(login);
(userField = login.querySelector('.username')),
  (userInput = userField.querySelector('input')),
  (passwordField = login.querySelector('.password')),
  (passwordInput = passwordField.querySelector('input'));
// LOGIN
login.onsubmit = (e) => {
  e.preventDefault();
  userInput.value == ''
    ? userField.classList.add('shake', 'error')
    : checkUsername();
  passwordInput.value == ''
    ? passwordField.classList.add('shake', 'error')
    : checkPass();

  setTimeout(() => {
    userField.classList.remove('shake');
    passwordField.classList.remove('shake');
  }, 500);
  userInput.onkeyup = () => {
    checkUsername();
  };
  passwordInput.onkeyup = () => {
    checkPass();
  };

  function checkUsername() {
    let pattern = /^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$/;

    if (!userInput.value.match(pattern)) {
      userField.classList.add('error');
      userField.classList.remove('valid');

      let errorText = userField.querySelector('.error-text');
      userInput.value !== ''
        ? (errorText.innerText = `Enter a valid username 'eg: dont_touch'`)
        : (errorText.innerText = `Username can't be blank`);
    } else {
      userField.classList.remove('error');
      userField.classList.add('valid');
    }
  }
  function checkPass() {
    if (passwordInput.value === '') {
      passwordField.classList.add('error');
      passwordField.classList.remove('valid');
    } else {
      passwordField.classList.remove('error');
      passwordField.classList.add('valid');
    }
  }
  if (
    !passwordField.classList.contains('error') &&
    !passwordField.classList.contains('error')
  ) {
    window.location.href = login.getAttribute('action');
  }
};
// SIGNUP
let signup = document.getElementById('signup');
let signupUField = signup.querySelector('.username');
signupUInput = signupUField.querySelector('input');
let usernameField = signup.querySelector('.fullName');
usernameInput = usernameField.querySelector('input');
let emailField = signup.querySelector('.email');
emailInput = emailField.querySelector('input');
let passwordsignUpField = signup.querySelector('.password');
passInput = passwordsignUpField.querySelector('input');

signup.onsubmit = (e) => {
  e.preventDefault();
  signupUInput.value == ''
    ? signupUField.classList.add('shake', 'error')
    : checkUsernameSignup();
  usernameInput.value == ''
    ? usernameField.classList.add('shake', 'error')
    : check_fullName();
  emailInput.value == ''
    ? emailField.classList.add('shake', 'error')
    : checkEmail();
  passInput.value == ''
    ? passwordsignUpField.classList.add('shake', 'error')
    : checkPassword();

  setTimeout(() => {
    signupUField.classList.remove('shake');
    usernameField.classList.remove('shake');
    emailField.classList.remove('shake');
    passwordsignUpField.classList.remove('shake');
  }, 500);
  signupUInput.onkeyup = () => {
    checkUsernameSignup();
  };
  usernameInput.onkeyup = () => {
    check_fullName();
  };
  emailInput.onkeyup = () => {
    checkEmail();
  };
  passInput.onkeyup = () => {
    checkPassword();
  };

  // USERNAME
  function checkUsernameSignup() {
    let pattern = /^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$/;
    if (!signupUInput.value.match(pattern)) {
      signupUField.classList.add('error');
      signupUField.classList.remove('valid');

      let errorText = signupUField.querySelector('.error-text');
      signupUInput.value !== ''
        ? (errorText.innerText = `Enter a valid username 'eg: dont_touch'`)
        : (errorText.innerText = `username can't be blank`);
    } else {
      signupUField.classList.remove('error');
      signupUField.classList.add('valid');
    }
  }
  // FULL NAME
  function check_fullName() {
    let nameRes =
      /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
    if (!usernameInput.value.match(nameRes)) {
      usernameField.classList.add('error');
      usernameField.classList.remove('valid');

      let errorText = usernameField.querySelector('.error-text');
      usernameInput.value !== ''
        ? (errorText.innerText = `Enter a valid name `)
        : (errorText.innerText = `Fullname can't be blank `);
    } else {
      usernameField.classList.remove('error');
      usernameField.classList.add('valid');
    }
  }
  // EMAIL
  function checkEmail() {
    let emailTest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailInput.value.match(emailTest)) {
      emailField.classList.add('error');
      emailField.classList.remove('valid');

      let errorText = emailField.querySelector('.error-text');
      console.log(errorText);
      emailInput.value !== ''
        ? (errorText.innerText = `Enter valid email eg: @gmail.com`)
        : (errorText.innerText = `Email can't be blank`);
    } else {
      emailField.classList.remove('error');
      emailField.classList.add('valid');
    }
  }

  // PASSWORD

  function checkPassword() {
    // let pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (passInput.value === '') {
      passwordsignUpField.classList.add('error');
      passwordsignUpField.classList.remove('valid');
    } else {
      passwordsignUpField.classList.remove('error');
      passwordsignUpField.classList.add('valid');
    }
  }
  if (
    !passwordsignupField.classList.contains('error') &&
    !passwordsigunpField.classList.contains('error')
  ) {
    window.location.href = signup.getAttribute('action');
  }
};
