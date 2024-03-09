var func1 = function () {
    console.log("Function 1");
};
var func2 = function () {
    return func1();
};
func2();
