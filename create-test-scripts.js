const { Assertion } = require('chai');

pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});

   pm.test("Response body has correct name", function () {
  var jsonData = pm.response.json();
  Assertion.equal(jsonData.name, "morpheus");
});

pm.test("Response body has correct job", function () {
  var jsonData = pm.response.json();
  Assertion.equal(jsonData.job, "leader");
});
