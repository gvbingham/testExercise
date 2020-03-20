export {};
const chakram = require('chakram');
const expect = chakram.expect;

describe('TestPetStore', function() {
  describe('User', function() {
    it('Should create an Account', async function() {
      const response = chakram.post('http://petstore.swagger.io/v2/user',
          {
            'id': 0,
            'username': 'string',
            'firstName': 'string',
            'lastName': 'string',
            'email': 'string',
            'password': 'string',
            'phone': 'string',
            'userStatus': 0,
          },
          /* {
            headers : {
              accept: "application/json",
              Content-Type: "application/json",
              Sec-Fetch-Dest: "empty",
              User-Agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
              DNT: 1,
              Content-Type: "application/json",
              Origin: "http://petstore.swagger.io",
              Sec-Fetch-Site: "cross-site",
              Sec-Fetch-Mode: "cors",
              Referer: "http://petstore.swagger.io/",
              Accept-Language: "en-US,en;q=0.9"
            }
          }*/
      );
      return expect(response).to.have.status(200);
    });
  });
});
