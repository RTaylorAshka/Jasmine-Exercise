function calculateMonthlyPayment(values) {
  let n = values.years * 12;
  let monthlyRate = values.rate / 100 / 12;
  let monthlyPayment = (
    (monthlyRate * values.amount) /
    (1 - Math.pow(1 + monthlyRate, -n))
  ).toFixed(2);

  return monthlyPayment.toString();
}
