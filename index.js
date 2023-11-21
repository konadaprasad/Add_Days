const addDays = require("date-fns/addDays");

const date = (number) => {
  const result = addDays(new Date(2020, 7, 22), number);
  return `${result.getDate()}-${result.getMonth() + 1}-${result.getFullYear()}`;
};
module.exports = date;
