const chakram = require('chakram');
const expect = chakram.expect;
const faker = require('faker');
const config = require('../config.js');
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
      expect(response).to.have.responsetime(800);
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
        'phone': faker.phone.phoneNumber(), 'userStatus': 0, // find out what this is all about
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
      expect(response).to.have.responsetime(800);
      expect(response.body.type).to.be.equal('unknown');
      expect(response.body.message).to.match(/^\d*$/);
      expect(response).to.have.schema(responseSchema);

      // TODO: Need to add Teardown and removal of new account
    });
    it('Get Username should get 404 given user not found', async function() {
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
      const response = await chakram.get(`${testUrl}/usernotfound`);

      // Assert
      expect(response).to.have.status(404);
      expect(response.body.type).to.be.equal('error');
      expect(response.body.code).to.be.equal(1);
      expect(response.body.message).to.be.equal('User not found');
      expect(response).to.have.responsetime(800);
      expect(response).to.have.schema(responseSchema);
    });
    it('Get Username should get 405 given no username', async function() {
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
      const response = await chakram.get(`${testUrl}`);

      // Assert
      expect(response).to.have.status(405);
      expect(response.body.type).to.be.equal('unknown');
      expect(response.body.code).to.be.equal(405);
      expect(response).to.have.responsetime(800);
      expect(response).to.have.schema(responseSchema);
    });
    it('Get Username should get user by name', async function() {
      const responseSchema = {
        type: 'object',
        properties: {
          body: {
            type: 'object',
            properties: {
              id: {type: 'number'},
              username: {type: 'string'},
              firstName: {type: 'string'},
              lastName: {type: 'string'},
              email: {type: 'string'},
              password: {type: 'string'},
              phone: {type: 'string'},
              userStatus: {type: 'number'},
            },
          },
        },
      };

      // Act
      const response = await chakram.get(`${testUrl}/user1`);

      // Assert
      expect(response).to.have.status(200);
      expect(response).to.have.responsetime(800);
      expect(response.body.id).to.be.equal(10);
      expect(response.body.username).to.be.equal('user1');
      expect(response.body.firstName).to.be.equal('user1');
      expect(response.body.lastName).to.be.equal('user1');
      expect(response.body.email).to.be.equal('user1');
      expect(response.body.password).to.be.equal('user1');
      expect(response.body.phone).to.be.equal('user1');
      expect(response.body.userStatus).to.be.equal(123);
      expect(response).to.have.schema(responseSchema);
    });
  });
});
