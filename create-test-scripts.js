const { expect } = require('chai');

describe('API tests', function () {
  it('Status code is 201', function () {
    const statusCode = 201;
    expect(statusCode).to.equal(200);
  });

  it('Response body has correct name', function () {
    const jsonData = { name: 'morpheus' };
    expect(jsonData.name).to.equal('morpheus');
  });

  it('Response body has correct job', function () {
    const jsonData = { job: 'leader' };
    expect(jsonData.job).to.equal('leader');
  });
});
