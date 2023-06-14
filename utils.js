module.exports = {
  toTitleCase(string) {
    return String(string)
      .split(" ")
      .map((a) => a.charAt(0).toUpperCase() + a.substring(1))
      .join(" ");
  },
};
