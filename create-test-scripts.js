pm.test("Status code is 201", function () {
    pm.response.to.have.status(201);
});

pm.test("Response body has correct name", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql("morpheus");
});

pm.test("Response body has correct job", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.job).to.eql("leader");
});
