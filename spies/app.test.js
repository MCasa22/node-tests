const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app.js');


describe('App', () => {

  //fake db.js and saveUser function are set here
  var db = {
    saveUser: expect.createSpy()
  };
  //change which 'db' to call
  app.__set__('db', db);

  it('should call saveUser-mocked', () => {
    var email = 'matteo@example.com';
    var password = '12345678';

    app.handleSignUp(email, password);
    //actually calling the fake db.saveUser
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });

  it('should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy('matteo', 22);
    expect(spy).toHaveBeenCalledWith('matteo', 22);
  });

});
