'use strict';
const server=require('../src/server');
const supertest=require("supertest");
const request = supertest(server.app);

describe("API Server",()=>{
    it("gitting data from home rout/",async()=>{
        const response= await request.get('/');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual("hello worlled")
    })
})