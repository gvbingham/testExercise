export {};
const chakram = require('chakram');
const expect = chakram.expect;

describe('TestPetStoreAuthenticate', function() {
  it('Should Authenticate and generate a session ID', async function() {
    const request = await chakram.get(
        'https://petstore.swagger.io/v2/user/login?username=test&password=abc123',
        {
          headers: {
            accept: 'application/json',
          },
        },
    );
    expect(request).to.have.responsetime(800);
    expect(request).to.have.header('content-type', 'application/json');
    expect(request.body.message).to.include('logged in user session:');
    expect(request.body.message).to.match();
  });
});
