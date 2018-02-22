import request from 'supertest';

import app from '../src/app';

describe('test the name path', () => {
  it('should return 200 status and my name', async() => {
    const response = await request(app).get('/name');
    expect(response.statusCode).toBe(200);
  });
});