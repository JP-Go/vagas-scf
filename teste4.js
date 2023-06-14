var data = require("./fakeData");
const { validateNumberField, validateUserData } = require("./validators");
module.exports = function (req, res) {
  const { id } = req.query;

  if (!validateNumberField(id))
    return res.status(400).json({
      message: "Id not given or not valid",
    });

  const reg = data.find((u) => u.id === parseInt(id, 10));
  if (!reg)
    return res.status(400).json({
      message: "No user with this id was found",
    });

  const [errors, validatedUserData] = validateUserData(req.body);

  if (errors.length > 0)
    return res.status(400).json({
      message: "There were errors with your request",
      errors,
    });
  const { name, job } = validatedUserData;
  reg.name = name;
  reg.job = job;

  res.send(reg);
};
