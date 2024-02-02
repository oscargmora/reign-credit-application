//Signature Names//
function getOwnerOneNamesSignature() {
	let firstNameSignature = document.getElementById("owner-one-first-name").value;
	let lastNameSignature = document.getElementById("owner-one-last-name").value;
	document.getElementById("name-p-signature-owner-one").innerText =
		firstNameSignature + " " + lastNameSignature;
}

function getOwnerTwoNamesSignature() {
	let firstNameSignature = document.getElementById("owner-two-first-name").value;
	let lastNameSignature = document.getElementById("owner-two-last-name").value;
	document.getElementById("name-p-signature-owner-two").innerText =
		firstNameSignature + " " + lastNameSignature;
}

// Owner Two Form - Making Visible and Hidden + Form Cleaning //
let checkbox = document.getElementById("add-principal-owner");
let inputDiv = document.getElementById("owner-two-section");
let ownerTwoSignature = document.getElementById("second-owner-signature-input-container");

function addOwnerTwo() {
	if (checkbox.checked === true) {
		inputDiv.classList.add("visible");
		inputDiv.classList.remove("none");
		ownerTwoSignature.classList.add("visible");
		ownerTwoSignature.classList.remove("none");
		document.getElementById("owner-two-first-name").required = true;
		document.getElementById("owner-two-last-name").required = true;
		document.getElementById("owner-two-percent-ownership").required = true;
		document.getElementById("owner-two-address").required = true;
		document.getElementById("owner-two-city").required = true;
		document.getElementById("owner-two-state").required = true;
		document.getElementById("owner-two-zip-code").required = true;
		document.getElementById("owner-two-birth-month-select").required = true;
		document.getElementById("owner-two-birth-day-select").required = true;
		document.getElementById("owner-two-birth-year-select").required = true;
		document.getElementById("owner-two-social-security").required = true;
		document.getElementById("owner-two-phone-number").required = true;
		document.getElementById("owner-two-email").required = true;
		document.getElementById("signature-input-owner-two").required = true;

		document.getElementById("owner-two-first-name").setAttribute("name", "Owner Two First Name");
		document.getElementById("owner-two-last-name").setAttribute("name", "Owner Two Last Name");
		document
			.getElementById("owner-two-percent-ownership-hidden")
			.setAttribute("name", "Owner Two Percent Ownership");
		document.getElementById("owner-two-address").setAttribute("name", "Owner Two Address");
		document.getElementById("owner-two-city").setAttribute("name", "Owner Two City");
		document.getElementById("owner-two-state").setAttribute("name", "Owner Two State");
		document.getElementById("owner-two-zip-code").setAttribute("name", "Owner Two Zip Code");
		document
			.getElementById("owner-two-birth-month-select")
			.setAttribute("name", "Owner Two Birth Month");
		document
			.getElementById("owner-two-birth-day-select")
			.setAttribute("name", "Owner Two Birth Day");
		document
			.getElementById("owner-two-social-security")
			.setAttribute("name", "Owner Two Social Security");
		document.getElementById("owner-two-phone-number").setAttribute("name", "Owner Two Phone Number");
		document.getElementById("owner-two-email").setAttribute("name", "Owner Two Email");
		document.getElementById("owner-two-homeowner-yes").setAttribute("name", "Owner Two Homeowner");
		document.getElementById("owner-two-homeowner-no").setAttribute("name", "Owner Two Homeowner");
		document.getElementById("signature-input-owner-two").setAttribute("name", "Signature Owner Two");
	}
}

function hideInputDiv() {
	inputDiv.classList.add("none");
	inputDiv.classList.remove("visible");
	ownerTwoSignature.classList.add("none");
	ownerTwoSignature.classList.remove("visible");
	document.getElementById("owner-two-first-name").required = false;
	document.getElementById("owner-two-last-name").required = false;
	document.getElementById("owner-two-percent-ownership").required = false;
	document.getElementById("owner-two-address").required = false;
	document.getElementById("owner-two-city").required = false;
	document.getElementById("owner-two-state").required = false;
	document.getElementById("owner-two-zip-code").required = false;
	document.getElementById("owner-two-birth-month-select").required = false;
	document.getElementById("owner-two-birth-day-select").required = false;
	document.getElementById("owner-two-birth-year-select").required = false;
	document.getElementById("owner-two-social-security").required = false;
	document.getElementById("owner-two-phone-number").required = false;
	document.getElementById("owner-two-email").required = false;
	document.getElementById("signature-input-owner-two").required = false;

	document.getElementById("owner-two-first-name").removeAttribute("name");
	document.getElementById("owner-two-last-name").removeAttribute("name");
	document.getElementById("owner-two-percent-ownership-hidden").removeAttribute("name");
	document.getElementById("owner-two-address").removeAttribute("name");
	document.getElementById("owner-two-city").removeAttribute("name");
	document.getElementById("owner-two-state").removeAttribute("name");
	document.getElementById("owner-two-zip-code").removeAttribute("name");
	document.getElementById("owner-two-birth-month-select").removeAttribute("name");
	document.getElementById("owner-two-birth-day-select").removeAttribute("name");
	document.getElementById("owner-two-social-security").removeAttribute("name");
	document.getElementById("owner-two-phone-number").removeAttribute("name");
	document.getElementById("owner-two-email").removeAttribute("name");
	document.getElementById("owner-two-homeowner-yes").removeAttribute("name");
	document.getElementById("owner-two-homeowner-no").removeAttribute("name");
	document.getElementById("signature-input-owner-two").removeAttribute("name");
}

// Form Cleaning when Input Unused //
function removeUnusedInputsFromForm() {
	let dba = document.getElementById("dba").value;
	let fedId = document.getElementById("fed-id").value;
	let businessType = document.getElementById("business-type").value;
	if (dba === "") {
		document.getElementById("dba").removeAttribute("name");
	}
	if (fedId === "") {
		document.getElementById("fed-id").removeAttribute("name");
	}
	if (businessType === "") {
		document.getElementById("business-type").removeAttribute("name");
	}
}

// Form Cleaning FedID //
function hyphenateFedId() {
	let fedId = document.getElementById("fed-id").value;
	if (fedId.includes("-")) {
		return;
	} else {
		let chars = fedId.split("");
		fedId =
			chars[0] +
			chars[1] +
			"-" +
			chars[2] +
			chars[3] +
			chars[4] +
			chars[5] +
			chars[6] +
			chars[7] +
			chars[8];
		document.getElementById("fed-id").value = fedId;
		if (fedId === "NaN-undefinedundefinedundefinedundefinedundefinedundefinedundefined") {
			document.getElementById("fed-id").value = "";
		}
	}
}

// Form Cleaning Business Start Date //
function hyphenateBusinessStartDate() {
	let businessStartDate = document.getElementById("business-start-date").value;
	if (businessStartDate.includes("-") || businessStartDate.includes("/")) {
		return;
	} else {
		let chars = businessStartDate.split("");
		businessStartDate =
			chars[0] +
			chars[1] +
			"/" +
			chars[2] +
			chars[3] +
			"/" +
			chars[4] +
			chars[5] +
			chars[6] +
			chars[7];
		document.getElementById("business-start-date").value = businessStartDate;
		if (
			businessStartDate === "NaN-undefinedundefinedundefinedundefinedundefinedundefined" ||
			businessStartDate === "NaN/undefinedundefined/undefinedundefinedundefinedundefined"
		) {
			document.getElementById("fed-id").value = "";
		}
	}
}

// Form Cleaning Percent Ownership //
function appendOwnerOnePercentOwnership() {
	let percentOwnership = document.getElementById("owner-one-percent-ownership").value;
	document.getElementById("owner-one-percent-ownership-hidden").value = percentOwnership + "%";
	document.getElementById("owner-one-percent-ownership").removeAttribute("name");
}

function appendOwnerTwoPercentOwnership() {
	let percentOwnership = document.getElementById("owner-two-percent-ownership").value;
	if (percentOwnership === "") {
		return;
	} else {
		document.getElementById("owner-two-percent-ownership-hidden").value = percentOwnership + "%";
		document.getElementById("owner-two-percent-ownership").removeAttribute("name");
	}
}

// Form Cleaning Birthday //
function appendOwnerOneBirthInfo() {
	let birthMonth = document.getElementById("owner-one-birth-month-select").value;
	let birthDay = document.getElementById("owner-one-birth-day-select").value;
	let birthYear = document.getElementById("owner-one-birth-year-select").value;
	document.getElementById("owner-one-date-of-birth").value =
		birthMonth + "/" + birthDay + "/" + birthYear;
	document.getElementById("owner-one-birth-month-select").removeAttribute("name");
	document.getElementById("owner-one-birth-day-select").removeAttribute("name");
	document.getElementById("owner-one-birth-year-select").removeAttribute("name");
}

function appendOwnerTwoBirthInfo() {
	let birthMonth = document.getElementById("owner-two-birth-month-select").value;
	let birthDay = document.getElementById("owner-two-birth-day-select").value;
	let birthYear = document.getElementById("owner-two-birth-year-select").value;
	document.getElementById("owner-two-date-of-birth").value =
		birthMonth + "/" + birthDay + "/" + birthYear;
	document.getElementById("owner-two-birth-month-select").removeAttribute("name");
	document.getElementById("owner-two-birth-day-select").removeAttribute("name");
	document.getElementById("owner-two-birth-year-select").removeAttribute("name");
}

// Form Cleaning Social Security //
function hyphenateOwnerOneSocialSecurity() {
	let socialSecurity = document.getElementById("owner-one-social-security").value;
	if (socialSecurity.includes("-")) {
		return;
	} else {
		let chars = socialSecurity.split("");
		socialSecurity =
			chars[0] +
			chars[1] +
			chars[2] +
			"-" +
			chars[3] +
			chars[4] +
			"-" +
			chars[5] +
			chars[6] +
			chars[7] +
			chars[8];
		document.getElementById("owner-one-social-security").value = socialSecurity;
		if (socialSecurity === "NaN-undefinedundefined-undefinedundefinedundefinedundefined") {
			document.getElementById("owner-one-social-security").value = "";
		}
	}
}

function hyphenateOwnerTwoSocialSecurity() {
	let socialSecurity = document.getElementById("owner-two-social-security").value;
	if (socialSecurity.includes("-")) {
		return;
	} else {
		let chars = socialSecurity.split("");
		socialSecurity =
			chars[0] +
			chars[1] +
			chars[2] +
			"-" +
			chars[3] +
			chars[4] +
			"-" +
			chars[5] +
			chars[6] +
			chars[7] +
			chars[8];
		document.getElementById("owner-two-social-security").value = socialSecurity;
		if (socialSecurity === "NaN-undefinedundefined-undefinedundefinedundefinedundefined") {
			document.getElementById("owner-two-social-security").value = "";
		}
	}
}

// Form Cleaning Phone Numbers //
function appendBusinessPhoneNumber() {
	let phoneNumber = document.getElementById("business-phone-number").value;
	if (phoneNumber.includes("-" || ["(" && ")"])) {
		return;
	} else {
		let chars = phoneNumber.split("");
		phoneNumber =
			chars[0] +
			chars[1] +
			chars[2] +
			"-" +
			chars[3] +
			chars[4] +
			chars[5] +
			"-" +
			chars[6] +
			chars[7] +
			chars[8] +
			chars[9];
		document.getElementById("business-phone-number").value = phoneNumber;
		if (phoneNumber === "NaN-undefinedundefinedundefined-undefinedundefinedundefinedundefined") {
			document.getElementById("business-phone-number").value = "";
		}
	}
}

function appendOwnerOnePhoneNumber() {
	let phoneNumber = document.getElementById("owner-one-phone-number").value;
	if (phoneNumber.includes("-" || ("(" && ")"))) {
		return;
	} else {
		let chars = phoneNumber.split("");
		phoneNumber =
			chars[0] +
			chars[1] +
			chars[2] +
			"-" +
			chars[3] +
			chars[4] +
			chars[5] +
			"-" +
			chars[6] +
			chars[7] +
			chars[8] +
			chars[9];
		document.getElementById("owner-one-phone-number").value = phoneNumber;
		if (phoneNumber === "NaN-undefinedundefinedundefined-undefinedundefinedundefinedundefined") {
			document.getElementById("owner-one-phone-number").value = "";
		}
	}
}

function appendOwnerTwoPhoneNumber() {
	let phoneNumber = document.getElementById("owner-two-phone-number").value;
	if (phoneNumber.includes("-" || ("(" && ")"))) {
		return;
	} else {
		let chars = phoneNumber.split("");
		phoneNumber =
			chars[0] +
			chars[1] +
			chars[2] +
			"-" +
			chars[3] +
			chars[4] +
			chars[5] +
			"-" +
			chars[6] +
			chars[7] +
			chars[8] +
			chars[9];
		document.getElementById("owner-two-phone-number").value = phoneNumber;
		if (phoneNumber === "NaN-undefinedundefinedundefined-undefinedundefinedundefinedundefined") {
			document.getElementById("owner-two-phone-number").value = "";
		}
	}
}

// Form Cleaning - Overall //
function reviseBusinessInputs() {
	removeUnusedInputsFromForm();
	hyphenateFedId();
	appendBusinessPhoneNumber();
	hyphenateBusinessStartDate();
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
	reviseBusinessInputs();
	reviseOwnerOneInputs();
	reviseOwnerTwoInputs();
}

// Submit Form //
function submitForm() {
	createReadableEmail();

	let selectedVal = document.getElementById("sales-rep-select").value;
	document.getElementById("recipient").value = selectedVal;
	let test = document.getElementById("recipient").value;
	if (test === "Rossi Lausso") {
		document.forms.information.action = "https://formsubmit.co/oscgmora@gmail.com";
	} else if (test === "Yvonne Cruz") {
		document.forms.information.action = "https://formsubmit.co/moragoscar@outlook.com";
	} else {
		document.forms.information.action = "https://formsubmit.co/omora@seawoodbuilders.com";
	}
}
