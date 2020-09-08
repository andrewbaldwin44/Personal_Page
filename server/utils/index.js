function getQueryValue(queryValue, defaultValue) {
  return queryValue !== undefined ? Number(queryValue) : defaultValue;
}

module.exports = {
  getQueryValue,
};
