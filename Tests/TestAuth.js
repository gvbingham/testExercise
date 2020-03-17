//@ts-check
'use strict';
var chakram = require('chakram');
var expect = chakram.expect;

describe('TestPetStore', function () {
    it('Auth', async function() {
        var request = await chakram.get('https://petstore.swagger.io/v2/user/login?username=gvbingham&password=qwerty', 
            { 
                headers: {
                    accept: 'application/json'
                }
            }
        );
        expect(request).to.have.responsetime(800);
        expect(request).to.have.header('content-type', 'application/json');
    });
});