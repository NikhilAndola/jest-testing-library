// If you want to test whether a particular function throws an error when it's called, use toThrow

function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
  }

  module.exports = compileAndroidCode;