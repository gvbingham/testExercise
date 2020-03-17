//@ts-check
'use strict';
var chakram = require('chakram');
var expect = chakram.expect;
chakram.startDebug();
var x;

describe('TestPetStore', function () {
    beforeEach('Auth', async function() {
        var x = chakram.get('https://petstore.swagger.io/v2/user/login?username=gvbingham&password=qwerty', 
            { 
                headers: {
                    accept: 'application/json'
                }
            }
        );
        await chakram.wait();
    });
    describe('Pet', function () {
        it('', function(){

        });
    });
    describe('Store', function () {
        it('', async function () {
            //TODO Write some tests
        });
    });
    describe('User', function () {
        it('Should create an Account', async function () {
            var response = chakram.post('http://petstore.swagger.io', 
                {
                    'id': 0,
                    'username': 'string',
                    'firstName': 'string',
                    'lastName': 'string',
                    'email': 'string',
                    'password': 'string',
                    'phone': 'string',
                    'userStatus': 0
                },
                {
                    headers: {
                        api_key: 'special-key',
                        session: '1584476396227',
                    } 
                }
            );
            chakram.stopDebug();
            return expect(response).to.have.status(200);
        });
    });
});
