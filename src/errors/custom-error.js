class CustomError extends Error {
  statusCode;
  constructor(message) {
    super(message);
  }

  serializeError() {
    console.log(`Error message: ❌ ${this.message}\n StatusCode: ${this.statusCode}`);
    return { message: this.message };
  }
}

module.exports = CustomError;
