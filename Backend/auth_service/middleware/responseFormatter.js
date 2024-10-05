// responseFormatter.js
const responseFormatter = (req, res, next) => {
    res.success = (message, data = null) => {
      res.status(200).json({
        status: 'success',
        statusCode: 200,
        message,
        data,
        error: null
      });
    };
  
    res.created = (message, data = null) => {
      res.status(201).json({
        status: 'success',
        statusCode: 201,
        message,
        data,
        error: null
      });
    };
  
    res.error = (statusCode, message, errorCode, errorMessage) => {
      res.status(statusCode).json({
        status: 'error',
        statusCode,
        message,
        data: null,
        error: {
          code: errorCode,
          message: errorMessage
        }
      });
    };
  
    next();
  };
  
  module.exports = responseFormatter;
  