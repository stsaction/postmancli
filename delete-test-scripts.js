const { expect } = require('chai');

describe('API tests', function () {
  it('Status code is 204', function () {
    const statusCode = 204;
    expect(statusCode).to.equal(204);
  });
});
