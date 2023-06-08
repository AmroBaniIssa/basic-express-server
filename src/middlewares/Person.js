


function Person(name) {
    return (req, res, next) => {
                if (name !== undefined) {
                    req.myName = name;
                    next();
                } else {
                    next(`you do not sent any name`);
                }
            }
   
}

module.exports = Person;



