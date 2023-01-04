window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
const amountInput = document.getElementById("loan-amount");
const yearsInput = document.getElementById("loan-years");
const rateInput = document.getElementById("loan-rate");

// Put some default values in the inputs
amountInput.value = 12000;
yearsInput.value = 3;
rateInput.value = 1;

// Call a function to calculate the current monthly payment
if (checkForNumbers(getCurrentUIValues())) {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
} else {
  alert("you may only enter numbers!");
  throw new Error("calculator only accepts numbers");
}

function setupIntialValues() {}

// Get the current values from the UI
// Update the monthly payment
function update() {
  if (checkForNumbers(getCurrentUIValues())) {
    updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
  } else {
    alert("you may only enter numbers!");
    throw new Error("calculator only accepts numbers");
  }
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let paymentDisplay = document.getElementById("monthly-payment");
  //console.log(monthly);
  paymentDisplay.innerText = "$" + monthly;
}

function checkForNumbers(values) {
  if (isNaN(values.amount)) {
    return false;
  } else if (isNaN(values.years)) {
    return false;
  } else if (isNaN(values.rate)) {
    return false;
  }

  return true;
}
