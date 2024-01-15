const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    // console.log(err);
    const message = err.errors[0].message;
    const extraDetails = "Fill all the details properly";
    // res.status(400).json({ msg: errMsg });
    const status = 422;
    const error = {
      status,
      message,
      extraDetails,
    };

    console.log("validation failed >>>", error);
    next(error);
  }
};

module.exports = validate;
