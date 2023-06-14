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

module.exports = {
  validateStringField,
  validateNumberField,
};
