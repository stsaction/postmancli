pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response body has correct name", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql("John Kepler");
});

pm.test("Response body has correct job", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.job).to.eql("Manager");
});
