class ValidationError extends Error {
  constructor(message, errorType) {
    super(message);

    this.name = 'ValidationError';
    this.message = message;
    this.errorType = errorType;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default ValidationError;
