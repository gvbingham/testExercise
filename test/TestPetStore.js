const chakram = require('chakram');
const expect = chakram.expect;
const faker = require('faker');
const config = require('../config.js');
const secrets = require('../secrets.js');
const testUrl = `${config.baseUrl}${config.apiVersion}/user`;

describe('TestPetStore', function() {
  describe('User', function() {
    it('Should create an Account given default values', async function() {
      // Arrange
      const user = {
        'id': 0,
        'username': 'string',
        'firstName': 'string',
        'lastName': 'string',
        'email': 'string',
        'password': 'string',
        'phone': 'string',
        'userStatus': 0,
      };
      const responseSchema = {
        type: 'object',
        properties: {
          body: {
            type: 'object',
            properties: {
              code: {type: 'number'},
              message: {type: 'string'},
              type: {type: 'string'},
            },
          },
        },
      };

      // Act
      const response = await chakram.post(testUrl, user);

      // Assert
      expect(response).to.have.status(200);
      expect(response.body.type).to.be.equal('unknown');
      expect(response.body.message).to.match(/^\d*$/);
      expect(response).to.have.schema(responseSchema);
    });

    it('Should create an Account given randomized yet valid data', async function() {
      // Arrange
      const user = {
        'id': faker.random.number(),
        'username': faker.internet.userName(),
        'firstName': faker.name.firstName(),
        'lastName': faker.name.lastName(),
        'email': faker.internet.email(),
        'password': faker.internet.password(),
        'phone': faker.phone.phoneNumber(),
        'userStatus': 0, // find out what this is all about
      };
      const responseSchema = {
        type: 'object',
        properties: {
          body: {
            type: 'object',
            properties: {
              code: {type: 'number'},
              message: {type: 'string'},
              type: {type: 'string'},
            },
          },
        },
      };

      // Act
      const response = await chakram.post(testUrl, user);

      // Assert
      expect(response).to.have.status(200);
      expect(response.body.type).to.be.equal('unknown');
      expect(response.body.message).to.match(/\d/);
      expect(response).to.have.schema(responseSchema);

      // TODO: Need to add Teardown and removal of new account
    });
  });
});
