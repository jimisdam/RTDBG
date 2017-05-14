var sanitize;

sanitize = function(str) {
  str = str.trim();
  return str = str.replace(/\s+/g, '-').toLowerCase();
};

module.exports = sanitize;
