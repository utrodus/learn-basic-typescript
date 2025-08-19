describe("Data Type", function () {
  it("should must declare", function () {
    /*
     * When we declare a variable in TypeScript, we must declare its type.
     * This is different from JavaScript, where variables can be declared without a type.
     * When not declaring a type, TypeScript will infer the type based on the value assigned to the variable.
     * In TypeScript, we can declare the type of a variable using the following syntax:
     * let variableName: type = value;
     */
    let name: string = "Utrodus Said Al Baqi";
    let balance: number = 1000000;
    let isVip: boolean = true;

    console.log(name);
    console.log(balance);
    console.log(isVip);

    /*
     * If we try to assign a value of a different type to a variable, TypeScript will throw an error.
     * But when running the test in this file, it will not throw an error.

     * This is because the TypeScript compiler is not running when we run the test.
     * So before running the test, we need to run compiler to check if there are any error in the code.

     * We can run the TypeScript compiler using the following command:
     * `npx tsc`
     * or for watching the file for changes:
     * `npx tsc --watch`

     * And then fix the error if there is any.

     * After that, we can run the test using the following command:
     * `npm test`
     * or
     * `npx jest`
     *
     * Uncomment the following lines to see the error in the TypeScript compiler.  */

    // name = 100;
    // balance = "eko";
    // isVip = 100;
  });
});
