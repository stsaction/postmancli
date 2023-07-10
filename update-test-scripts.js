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
In the above code, we import the expect function from the chai library. Then, we define test cases using the it function provided by Mocha. Inside each test case, we perform assertions using the expect function and the to.eql assertion method.

Make sure you have the chai library installed by running the following command:

shell
Copy code
npm install --save-dev chai
With this setup, you can run your Chai tests using a test runner like Mocha.







