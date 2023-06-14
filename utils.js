function validateStringField(maybeValid) {
  return (
    maybeValid !== undefined &&
    typeof maybeValid === "string" &&
    maybeValid.length > 0
  );
}

function validateNumberField(maybeValidId) {
  const isNotNaN = !isNaN(parseInt(maybeValidId, 10));
  return isNotNaN && maybeValidId !== undefined;
}

/**
 * Validates the user data coming from the req.body
 * @typedef {[string[],{name:string,job:string}] | [string[],{}]} ValidationResult
 * @param {*} data
 * @returns {ValidationResult} validationResult
 */
function validateUserData(data) {
  const { name, job } = data;
  const errors = [];
  const validated = {};

  if (!validateStringField(name)) {
    errors.push("Invalid name. Name must be a string with a least 1 character");
    validated.name = undefined;
  } else validated.name = String(name);
  if (!validateStringField(job)) {
    errors.push("Invalid job. Job must be a string with a least 1 character");
    validated.job = undefined;
  } else validated.job = String(job);

  return [errors, validated];
}

module.exports = {
  validateUserData,
  validateNumberField,
};
