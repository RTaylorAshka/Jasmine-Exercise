
it('should calculate the monthly rate correctly', function () {
  const testValues = { amount: 25500, years: 9, rate: 6};
  console.log(calculateMonthlyPayment(testValues));
  expect(calculateMonthlyPayment(testValues)).toEqual('306.15');

});


it("should return a result with 2 decimal places", function() {
  const testValues = { amount: 8900, years: 7, rate: 5};
  expect(calculateMonthlyPayment(testValues)).toEqual('125.79');

});

/// etc
