'use strict';

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: '1st change',
        input: event,
      },
      null,
      2
    ),
  };
};
