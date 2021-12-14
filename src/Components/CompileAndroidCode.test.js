const CompileCode = require("./CompileAndroidCode")

test('compiling android goes as expected', () => {
    expect(() => CompileCode()).toThrow();
    expect(() => CompileCode()).toThrow(Error);
  
    // You can also use the exact error message or a regexp
    expect(() => CompileCode()).toThrow('you are using the wrong JDK');
    expect(() => CompileCode()).toThrow(/JDK/);
  });