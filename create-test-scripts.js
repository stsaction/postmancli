const { Assertion } = require('chai');

pm.test("Status code is 508", function () {
  pm.response.to.have.status(508);
});

   pm.test("Response body has correct name", function () {
  var jsonData = pm.response.json();
  Assertion.equal(jsonData.name, "./");
});

pm.test("Response body has correct job", function () {
  var jsonData = pm.response.json();
  Assertion.equal(jsonData.job, "leader");
});
