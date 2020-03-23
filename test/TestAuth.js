const chakram = require('chakram');
const expect = chakram.expect;
const config = require('../config.js');
const secrets = require('../secrets.js');
const testUrl = `${config.baseUrl}${config.apiVersion}/user`;

describe('TestPetStoreAuthenticate', function() {
  it('Should Authenticate and generate a session ID', async function() {
    const response = await chakram.get(`${testUrl}/login?username=${secrets.username}&password=${secrets.password}`,
        {
          headers: {
            accept: 'application/json',
          },
        },
    );
    expect(response).to.have.status(200);
    expect(response).to.have.responsetime(800);
    expect(response).to.have.header('content-type', 'application/json');
    expect(response.body.message).to.include('logged in user session:');
    expect(response.body.message).to.match(/\d{13}/);
    expect(response.body.type).to.be.equal('unknown');
    expect(response.body.code).to.be.equal(200);
    expect(response.response.headers["x-expires-after"]).to.not.be.empty;
    expect(response.response.headers["x-rate-limit"]).to.not.be.empty;
  });
  it('Should logout', async function() {
    const response = await chakram.get(`${testUrl}/logout`,
        {
          headers: {
            accept: 'application/json',
          },
        },
    );
    expect(response).to.have.status(200);
    expect(response).to.have.responsetime(800);
    expect(response).to.have.header('content-type', 'application/json');
    expect(response.body.message).to.be.equal('ok');
    expect(response.body.type).to.be.equal('unknown');
    expect(response.body.code).to.be.equal(200);
  });
});
