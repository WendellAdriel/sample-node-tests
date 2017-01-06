const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
  describe('Sync', () => {
    it('should add two numbers', () => {
      let res = utils.add(33,11);
      expect(res).toBe(44).toBeA('number');
    });

    it('should square a number', () => {
      let res = utils.square(10);
      expect(res).toBe(100).toBeA('number');
    });

    it('should set firstName and lastName', () => {
      let user = { location: 'Lisbon', age: 24 };
      let res = utils.setName(user, 'Wendell Adriel');
      expect(res).toInclude({
        firstName: 'Wendell',
        lastName: 'Adriel'
      });
    });
  });

  describe('Async', () => {
    it('should async add two numbers', done => {
      utils.asyncAdd(5, 5, sum => {
        expect(sum).toBe(10).toBeA('number');
        done();
      });
    });
  });
});
