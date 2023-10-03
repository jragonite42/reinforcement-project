const request = require('supertest');
const server = 'http://localhost:3000';
const { response } = require('express');
const { expect } = require('chai');


// const app = require('../app');
const mongoose = require('mongoose');
const User = require('../server/models/userModel'); 

describe('User routes', () => {
  it('should create a new user', async () => {
    const response = await request(server)
      .post('/user/signup')
      .send({ email: 'tiffanyruwokayy1111@gmail.com', name: 'Tiffany', password: 'MY LIL SIS TIFFANY'})
      .expect(200);
  });

  it('should sign in a user', async () => {
    const response = await request(server)
      .post('/user/signin')
      .send({ email: 'tiffanyruwokayy1111@gmail.com', password: 'MY LIL SIS TIFFANY'})
      .expect(200);
  });
  
  it('should sign out a user', async () => {
    // Create a user session by sending a signin request (assumes you have a user signed in)
    // await request(server)
    //   .post('/user/signin')
    //   .send({ email: 'tiffany@gmail.com', password: 'MY LIL SIS TIFFANY' })
    //   .expect(200);

    // Perform the signout request
    const response = await request(server)
      .post('/user/signout')
      .expect(302);

    // Verify that the 'ssid' cookie is cleared
    const cookies = response.headers['set-cookie'];
    // console.log(cookies);
    const ssidCookie = cookies.find((cookies) => cookies.startsWith('ssid='));
    // console.log(ssidCookie);
    expect(ssidCookie).to.be.undefined;
    // Verify the redirect location (if applicable)
    // expect(response.headers.location).toBe('/signin'); 
  });
})