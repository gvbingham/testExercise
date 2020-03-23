const chakram = require('chakram');
const expect = chakram.expect;
const config = require('../config.js');
const secrets = require('../secrets.js');
const testUrl = `${config.baseUrl}${config.apiVersion}/user`;

describe('TestPetStoreAuthenticate', function() {
  it('Should Authenticate and generate a session ID', async function() {
    const request = await chakram.get(
        `${testUrl}/login?username=${secrets.username}&password=${secrets.password}`,
        {
          headers: {
            accept: 'application/json',
          },
        },
    );
    expect(request).to.have.responsetime(800);
    expect(request).to.have.header('content-type', 'application/json');
    expect(request.body.message).to.include('logged in user session:');
    expect(request.body.message).to.match(/\d{13}/);
  });
});
