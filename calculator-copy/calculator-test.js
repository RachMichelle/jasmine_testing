
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 10000, years: 15, rate: 3.5};
  expect (calculateMonthlyPayment(values)).toEqual('49.27')
});


it("should return a result with 2 decimal places", function() {
  const values = {amount: 10022, years: 10, rate: 7.9};
  expect (calculateMonthlyPayment(values)).toEqual('145.00')
});


