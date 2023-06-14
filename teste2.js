var data = require("./fakeData");

function validateStringField(maybeValid) {
  return (
    maybeValid !== undefined &&
    typeof maybeValid === "string" &&
    maybeValid.length > 0
  );
}

module.exports = function (req, res) {
  const { name, job } = req.body;
  const errors = [];
  if (!validateStringField(name))
    errors.push("Invalid name. Name must be a string with a least 1 character");

  if (!validateStringField(job))
    errors.push("Invalid job. Job must be a string with a least 1 character");

  if (errors.length > 0) {
    return res.status(400).json({
      message: "There were errors with your request",
      errors,
    });
  }

  let lastId = Math.max(data.map((u) => u.id));
  const newUser = {
    id: ++lastId,
    name,
    job,
  };
  data.push(newUser);

  res.send(newUser);
};
