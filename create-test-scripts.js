const { Assertion } = require('chai');

pm.test("Status code is 201", function () {
  pm.response.to.have.status(201);
});

pm.test("Response body has correct name", function () {
  var jsonData = pm.response.json();
  Assertion.equal(jsonData.name, "morpheus");
});

pm.test("Response body has correct job", function () {
  var jsonData = pm.response.json();
  Assertion.equal(jsonData.job, "leader");
});
