'use strict';



function stamper(req,res,next){
    req.timestamp=new Date();
    next();
}

module.exports = stamper;