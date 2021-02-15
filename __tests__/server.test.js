'use strict';

const { hasUncaughtExceptionCaptureCallback } = require('process');
const supertest = require('supertest');
const { isMainThread } = require('worker_threads');
const server = require('../server.js');
const request = supertest(server.app);

describe('Testing our express server', () => {
  it('should response to a GET on /', () =>{
    request.get('/')
      .then(response =>{
        expect(response.status).toEqual(200);
        expect(response.text).toEqual('hello');
      });
  });

  it('should respond with json data on GET /foo', async () => {
    const response = await request.get('/foo');

    expect(response.status).toEqual(200);
    expect(response.body.number).toEqual(10);
    expect(response.body.string).toEqual('hello world');
  })
});