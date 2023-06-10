'use strict'

const app = require('../src/server');
const supertest = require("supertest");
const request = supertest(app.server);

describe('Home route', () => {
  it("test status code of home route", async () => {
      const response = await request.get('/');
      expect(response.status).toEqual(200);
  })
  it("test text of home route", async() => {
    const response = await request.get('/');
    expect(response.text).toEqual('Hello');
  })
})

describe('500 internal error handler', ()=> {
  it('500 internal error status', async () => {
    const response = await request.get('/test500')
    expect(response.status).toEqual(500)
  })
  it('500 internal error type of text', async () => {
    const response = await request.get('/test500')
    expect(typeof response.body).toEqual('object')
  })
})

describe('404 internal error handler', ()=> {
  it('404 internal error status', async () => {
    const response = await request.get('/123123')
    expect(response.status).toEqual(404)
  })
  it('500 internal error type of text', async () => {
    const response = await request.get('/123123')
    expect(typeof response.body).toEqual('object')
  })
})



