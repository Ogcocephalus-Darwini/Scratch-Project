// BASE ERROR CLASS FOR OTHER ERRORS TO INHERIT FROM
// DEFINED A STATUS CODE
// TAKES IN A MESSAGE

class CustomError extends Error {
  statusCode;
  constructor(message) {
    super(message);
  }

  // USED IN GLOBAL ERROR HANDLING MIDDLEWARE
  // LOGS THE ERROR AND SENDS BACK A CONSISTENT ERROR RESPONSE TO CLIENT
  serializeError() {
    console.log(`Error message: ❌ ${this.message}\n StatusCode: ${this.statusCode}`);
    return { message: this.message };
  }
}

module.exports = CustomError;
