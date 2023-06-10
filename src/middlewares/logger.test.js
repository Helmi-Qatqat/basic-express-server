'use strict'
const logger = require('../middlewares/logger');

describe('test logger', () => {
  const req = {};
  const res = {};
  let consoleSpy;
  const next = jest.fn();
  beforeEach(()=> {
      consoleSpy = jest.spyOn(console, 'log')
  })
  it('test logging', async () => {
    logger(req,res,next)
    expect(consoleSpy).toHaveBeenCalled()
  })
  it('test next function to be called', () => {
    logger(req,res,next)
    expect(next).toHaveBeenCalled()
  })
})