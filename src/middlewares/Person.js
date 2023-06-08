


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



// function square(n) {
//     return (req, res, next) => {
//         if (typeof n == "number") {
//             req.number = n * n;
//             next();
//         } else {
//             next(`this is not a number ${n}`);
//         }
//     }
// }
// module.exports = square;