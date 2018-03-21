const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

  describe('#Add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33, 11);

      expect(res)
        .toBe(44)
        .toBeA('number');
    });
  });  

  // "done" argument is a function that lets mocha know we are testing an asynchronous function.
  // without "done", mocha prints the output before evaluating the callback.
  it('should async add two numbers', (done) => {
    utils.asyncAdd(3, 4, (sum) => {
      expect(sum)
        .toBe(7)
        .toBeA('number');
      done();
    });
  });

  it('should square a number', () => {
    var res = utils.square(3);

    expect(res)
      .toBe(9)
      .toBeA('number');
  });

  it('should async square a number', (done) => {
    utils.asyncSquare(3, (res) => {
      expect(res)
        .toBe(9)
        .toBeA('number');
      done();
    });
  });
});

it('should receive correctly first and last name', () => {
  var user = {
    age: 22,
    location: 'Milano'
  };
  var res = utils.setName(user, 'Matteo Casarin');
  expect(res).toInclude({
    firstName: 'Matteo',
    lastName: 'Casarin'
  });
});

// it('should expect some values', () => {
//   // .toBe con oggetti e array da errore
//   expect({name: 'matteo'}).toEqual({name: 'matteo'});
//   expect([2,3,4,5]).toInclude(5);
//   expect({
//     name:'matteo',
//     age:22,
//     location:'Milano'
//   }).toInclude({
//       age: 25
//     });
// });
