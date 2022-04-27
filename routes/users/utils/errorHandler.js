const parsedError = (err) => {
  let objKeys = Object.keys(err.keyValue);
  let objValues = Object.values(err.keyValue);
  console.log("key", objKeys[0]);
  console.log("value", objValues[0]);
  return `${objKeys[0]} ${objValues[0]} is taken!`;
};

const errorHandler = (err) => {
  let message = "";

  if (err.code) {
    switch (err.code) {
      case 11000:
        message = parsedError(err);
        break;
      default:
        message = "Something went wrong here. Very wrong.";
    }
  }
  return message;
};

module.exports = {
  errorHandler,
};
