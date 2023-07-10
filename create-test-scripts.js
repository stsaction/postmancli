const { Assertion } = require('chai');

pm.test("Status code is 200", function () {
  // Change the expected status code to 500 to intentionally fail
  pm.response.to.have.status(500);
});

pm.test("Response body has correct name", function () {
  var jsonData = pm.response.json();
  // Change the expected name to "wrong_name" to intentionally fail
  Assertion.equal(jsonData.name, "wrong_name");
});

pm.test("Response body has correct job", function () {
  var jsonData = pm.response.json();
  // Change the expected job to "wrong_job" to intentionally fail
  Assertion.equal(jsonData.job, "wrong_job");
});
