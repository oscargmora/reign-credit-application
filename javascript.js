const canvas = document.querySelector('canvas');
const signaturePadForm = document.querySelector('#signature-pad-form');
const clearButton = document.querySelector('.clear-button');
const ctx = canvas.getContext('2d');
let writingMode = false;

signaturePadForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const imageURL = canvas.toDataURL();
  const image = document.createElement('img');
  image.src = imageURL;
  image.height = canvas.height;
  image.width = canvas.width;
  image.style.display = "block";
  form.appendChild(image);
  clearPad();
})

const clearPad = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

clearButton.addEventListener('click', (event) => {
  event.preventDefault();
  clearPad();
})

const getTargetPosition = (event) => {
  positionX = event.clientX - event.target.getBoundingClientRect().x;
  positionY = event.clientY - event.target.getBoundingClientRect().y;
  
  return [positionX, positionY];
}

const handlePointerMove = (event) => {
  if (!writingMode) return;
  
  const [positionX, positionY] = getTargetPosition(event);
  ctx.lineTo(positionX, positionY);
  ctx.stroke();
}

const handlePointerUp = () => {
  writingMode = false;
}

const handlePointerDown = (event) => {
  writingMode = true;
  ctx.beginPath();
  
  const[positionX, positionY] = getTargetPosition(event);
  ctx.moveTo(positionX, positionY);
}

ctx.lineWidth = 3;
ctx.lineJoin = ctx.lineCap = "round";

canvas.addEventListener("pointerdown", handlePointerDown, {passive: true});
canvas.addEventListener("pointerup", handlePointerUp, {passive: true});
canvas.addEventListener("pointermove", handlePointerMove, {passive: true});


let checkbox = document.getElementById("add-principal-owner");

let inputDiv = document.getElementById("owner-two-section");

function addOwnerTwo() {
  if (checkbox.checked === true) {
    inputDiv.classList.add('visible');
    inputDiv.classList.remove('none');
    document.getElementById('owner-two-first-name').required = true;
    document.getElementById('owner-two-last-name').required = true;
    document.getElementById('owner-two-percent-ownership').required = true;
    document.getElementById('owner-two-address').required = true;
    document.getElementById('owner-two-city').required = true;
    document.getElementById('owner-two-state').required = true;
    document.getElementById('owner-two-zip-code').required = true;
    document.getElementById('owner-two-birth-month-select').required = true;
    document.getElementById('owner-two-birth-day-select').required = true;
    document.getElementById('owner-two-birth-year-select').required = true;
    document.getElementById('owner-two-social-security').required = true;
    document.getElementById('owner-two-phone-number').required = true;
    document.getElementById('owner-two-email').required = true;

    document.getElementById('owner-two-first-name').setAttribute('name','owner-two-first-name');
    document.getElementById('owner-two-last-name').setAttribute('name','owner-two-last-name');
    document.getElementById('owner-two-percent-ownership-hidden').setAttribute('name','owner-two-percent-ownership');
    document.getElementById('owner-two-address').setAttribute('name','owner-two-address');
    document.getElementById('owner-two-city').setAttribute('name','owner-two-city');
    document.getElementById('owner-two-state').setAttribute('name','owner-two-state');
    document.getElementById('owner-two-zip-code').setAttribute('name','owner-two-zip-code');
    document.getElementById('owner-two-birth-month-select').setAttribute('name','owner-two-birth-month');
    document.getElementById('owner-two-birth-day-select').setAttribute('name','owner-two-birth-day');
    document.getElementById('owner-two-social-security').setAttribute('name','owner-two-social-security');
    document.getElementById('owner-two-phone-number').setAttribute('name','owner-two-phone-number');
    document.getElementById('owner-two-email').setAttribute('name','owner-two-email');
    document.getElementById('owner-two-homeowner-yes').setAttribute('name','owner-two-homeowner');
    document.getElementById('owner-two-homeowner-no').setAttribute('name','owner-two-homeowner');
  }
}

function hideInputDiv() {
  inputDiv.classList.add('none');
  inputDiv.classList.remove('visible');
  document.getElementById('owner-two-first-name').required = false;
  document.getElementById('owner-two-last-name').required = false;
  document.getElementById('owner-two-percent-ownership').required = false;
  document.getElementById('owner-two-address').required = false;
  document.getElementById('owner-two-city').required = false;
  document.getElementById('owner-two-state').required = false;
  document.getElementById('owner-two-zip-code').required = false;
  document.getElementById('owner-two-birth-month-select').required = false;
  document.getElementById('owner-two-birth-day-select').required = false;
  document.getElementById('owner-two-birth-year-select').required = false;
  document.getElementById('owner-two-social-security').required = false;
  document.getElementById('owner-two-phone-number').required = false;
  document.getElementById('owner-two-email').required = false;

  document.getElementById('owner-two-first-name').removeAttribute('name');
  document.getElementById('owner-two-last-name').removeAttribute('name');
  document.getElementById('owner-two-percent-ownership-hidden').removeAttribute('name');
  document.getElementById('owner-two-address').removeAttribute('name');
  document.getElementById('owner-two-city').removeAttribute('name');
  document.getElementById('owner-two-state').removeAttribute('name');
  document.getElementById('owner-two-zip-code').removeAttribute('name');
  document.getElementById('owner-two-birth-month-select').removeAttribute('name');
  document.getElementById('owner-two-birth-day-select').removeAttribute('name');
  document.getElementById('owner-two-social-security').removeAttribute('name');
  document.getElementById('owner-two-phone-number').removeAttribute('name');
  document.getElementById('owner-two-email').removeAttribute('name');
  document.getElementById('owner-two-homeowner-yes').removeAttribute('name');
  document.getElementById('owner-two-homeowner-no').removeAttribute('name');
}



function hyphenateFedId() {
  let fedId = document.getElementById('fed-id').value;
  if (fedId.includes('-')) {
    return;
  } else {
    let chars = fedId.split("");
    fedId = chars[0] + chars[1] + '-' + chars[2] + chars[3] + chars[4] + chars[5] + chars[6] + chars[7] + chars[8];
    document.getElementById('fed-id').value = fedId;
    if (fedId === 'NaN-undefinedundefinedundefinedundefinedundefinedundefinedundefined') {
      document.getElementById('fed-id').value = '';
    }
  }
}

function appendOwnerOnePercentOwnership() {
  let percentOwnership = document.getElementById('owner-one-percent-ownership').value;
  document.getElementById('owner-one-percent-ownership-hidden').value = percentOwnership + '%';
  document.getElementById('owner-one-percent-ownership').removeAttribute('name');
}

function appendOwnerTwoPercentOwnership() {
  let percentOwnership = document.getElementById('owner-two-percent-ownership').value;
  if (percentOwnership === '') {
    return;
  } else {
    document.getElementById('owner-two-percent-ownership-hidden').value  = percentOwnership + '%';
    document.getElementById('owner-two-percent-ownership').removeAttribute('name');
  }
}

function appendOwnerOneBirthInfo() {
  let birthMonth = document.getElementById('owner-one-birth-month-select').value;
  let birthDay = document.getElementById('owner-one-birth-day-select').value;
  let birthYear = document.getElementById('owner-one-birth-year-select').value;
  document.getElementById('owner-one-date-of-birth').value = birthMonth + '/' + birthDay + '/' + birthYear;
  document.getElementById("owner-one-birth-month-select").removeAttribute("name");
  document.getElementById("owner-one-birth-day-select").removeAttribute("name");
  document.getElementById("owner-one-birth-year-select").removeAttribute("name");
}

function appendOwnerTwoBirthInfo() {
  let birthMonth = document.getElementById('owner-two-birth-month-select').value;
  let birthDay = document.getElementById('owner-two-birth-day-select').value;
  let birthYear = document.getElementById('owner-two-birth-year-select').value;
  document.getElementById('owner-two-date-of-birth').value = birthMonth + '/' + birthDay + '/' + birthYear;
  document.getElementById("owner-two-birth-month-select").removeAttribute("name");
  document.getElementById("owner-two-birth-day-select").removeAttribute("name");
  document.getElementById("owner-two-birth-year-select").removeAttribute("name");
}

function hyphenateOwnerOneSocialSecurity() {
  let socialSecurity = document.getElementById('owner-one-social-security').value;
  if (socialSecurity.includes('-')) {
    return;
  } else {
    let chars = socialSecurity.split("");
    socialSecurity = chars[0] + chars[1] + chars[2] + '-' + chars[3] + chars[4] + '-' + chars[5] + chars[6] + chars[7] + chars[8];
    document.getElementById('owner-one-social-security').value = socialSecurity;
    if (socialSecurity === 'NaN-undefinedundefined-undefinedundefinedundefinedundefined') {
      document.getElementById('owner-one-social-security').value = '';
    }
  }
}

function hyphenateOwnerTwoSocialSecurity() {
  let socialSecurity = document.getElementById('owner-two-social-security').value;
  if (socialSecurity.includes('-')) {
    return;
  } else {
    let chars = socialSecurity.split("");
    socialSecurity = chars[0] + chars[1] + chars[2] + '-' + chars[3] + chars[4] + '-' + chars[5] + chars[6] + chars[7] + chars[8];
    document.getElementById('owner-two-social-security').value = socialSecurity;
    if (socialSecurity === 'NaN-undefinedundefined-undefinedundefinedundefinedundefined') {
      document.getElementById('owner-two-social-security').value = '';
    }
  }
}

function appendBusinessPhoneNumber() {
  let phoneNumber = document.getElementById('business-phone-number').value;
  if (phoneNumber.includes('-' || ['(' && ')'])) {
    return;
  } else {
    let chars = phoneNumber.split("");
    phoneNumber = chars[0] + chars[1] + chars[2] + '-' + chars[3] + chars[4] + chars[5] + '-' + chars[6] + chars[7] + chars[8] + chars[9];
    document.getElementById('business-phone-number').value = phoneNumber;
    if (phoneNumber === 'NaN-undefinedundefinedundefined-undefinedundefinedundefinedundefined') {
      document.getElementById('business-phone-number').value = '';
    }
  }
}

function appendOwnerOnePhoneNumber() {
  let phoneNumber = document.getElementById('owner-one-phone-number').value;
  if (phoneNumber.includes('-' || ('(' && ')'))) {
    return;
  } else {
    let chars = phoneNumber.split("");
    phoneNumber = chars[0] + chars[1] + chars[2] + '-' + chars[3] + chars[4] + chars[5] + '-' + chars[6] + chars[7] + chars[8] + chars[9];
    document.getElementById('owner-one-phone-number').value = phoneNumber;
    if (phoneNumber === 'NaN-undefinedundefinedundefined-undefinedundefinedundefinedundefined') {
      document.getElementById('owner-one-phone-number').value = '';
    }
  }
}

function appendOwnerTwoPhoneNumber() {
  let phoneNumber = document.getElementById('owner-two-phone-number').value;
  if (phoneNumber.includes('-' || ('(' && ')'))) {
    return;
  } else {
    let chars = phoneNumber.split("");
    phoneNumber = chars[0] + chars[1] + chars[2] + '-' + chars[3] + chars[4] + chars[5] + '-' + chars[6] + chars[7] + chars[8] + chars[9];
    document.getElementById('owner-two-phone-number').value = phoneNumber;
    if (phoneNumber === 'NaN-undefinedundefinedundefined-undefinedundefinedundefinedundefined') {
      document.getElementById('owner-two-phone-number').value = '';
    }
  }
}

function reviseOwnerOneInputs() {
  appendOwnerOnePercentOwnership();
  appendOwnerOneBirthInfo();
  hyphenateOwnerOneSocialSecurity();
  appendOwnerOnePhoneNumber();
}

function reviseOwnerTwoInputs() {
  appendOwnerTwoPercentOwnership();
  appendOwnerTwoBirthInfo();
  hyphenateOwnerTwoSocialSecurity();
  appendOwnerTwoPhoneNumber();
}

function createReadableEmail() {
  hyphenateFedId();
  appendBusinessPhoneNumber();
  reviseOwnerOneInputs();
  reviseOwnerTwoInputs();
}

function submitForm() {
  createReadableEmail();
  
  let selectedVal = document.getElementById("sales-rep-select").value;
  document.getElementById("recipient").value = selectedVal;
  let test = document.getElementById("recipient").value;
  if (test === "rossi-lausso") {
    document.forms.information.action = "https://formsubmit.co/oscgmora@gmail.com";
  } else if (test === "yvonne-cruz") {
    document.forms.information.action = "https://formsubmit.co/moragoscar@outlook.com";
  } else {
    document.forms.information.action = "https://formsubmit.co/omora@seawoodbuilders.com"
  }
}