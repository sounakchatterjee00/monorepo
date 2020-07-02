'use strict';

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: '1st changed done',
        input: event,
      },
      null,
      2
    ),
  };
};
