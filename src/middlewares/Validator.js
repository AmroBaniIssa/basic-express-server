


function Validator(name) {
  return (req, res, next) => {
    if (typeof name == "string") {
      req.string = name ;
      next();
    } else {
      next(`this is not a string ${name}`);
    }
  };
}

module.exports = Validator;
