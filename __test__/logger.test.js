'use strict';

const logger=require('../src/middlewares/logger');

describe("logger middleware test",()=>{
    let consoleSpy;
    let req = {};
    let res = {};
    let next = jest.fn();
    beforeEach(()=>{
        consoleSpy=jest.spyOn(console,"log")
    });
    test('it\'s logging things',()=>{
        logger(req,res,next);
        expect(consoleSpy).toHaveBeenCalled();
    })
    it('it calls next method',()=>{
        logger(req,res,next);
        expect(next).toHaveBeenCalled();
    })
})