pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response body has correct data", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.data.id).to.eql(2);
    pm.expect(jsonData.data.email).to.eql("janet.weaver@reqres.in");
    pm.expect(jsonData.data.first_name).to.eql("Janet");
    pm.expect(jsonData.data.last_name).to.eql("Weaver");
    pm.expect(jsonData.data.avatar).to.eql("https://reqres.in/img/faces/2-image.jpg");
});

pm.test("Response body has correct support", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.support.url).to.eql("https://reqres.in/#support-heading");
    pm.expect(jsonData.support.text).to.eql("To keep ReqRes free, contributions towards server costs are appreciated!");
});
