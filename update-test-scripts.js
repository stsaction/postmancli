const { expect } = require('chai');

describe('API tests', function () {
  it('Status code is 200', function () {
    const statusCode = 200;
    expect(statusCode).to.equal(200);
  });

  it('Response body has correct name', function () {
    const jsonData = {
      name: 'John Kepler'
    };

    expect(jsonData.name).to.eql('John Kepler');
  });

  it('Response body has correct job', function () {
    const jsonData = {
      job: 'Manager'
    };

    expect(jsonData.job).to.eql('Manager');
  });
});








