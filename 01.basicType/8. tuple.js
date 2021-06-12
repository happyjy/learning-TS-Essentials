"use strict";
/*
  # 8. tuple
    * 포함된 요소 개수와 특정 위치에 포함된 유형을 정확히 설정하는 또 다른 종류의 Array 유형
    * [ts - doc](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types)
*/
var a;
a = ["hi", 32];
// a = [10, "hi"];  x
a[0] = "hello";
// a[0] = 32; x
var person = ["Ayoon", 0];
var first = person[0], second = person[1];
var tupleA = ["hello", 1];
var tupleB = ["beautiful", 2, true];
var tupleC = ["world", 3, true, false, true, false, true];
/*
  # tuple with rest parameter and arguemtns
    * Why might optional and rest elements be useful?
    * Well, it allows TypeScript to correspond tuples with parameter lists.
    * Tuples types can be used in rest parameters and arguments, so that the following:
 */
function readButtonInput() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var name = args[0], version = args[1], input = args.slice(2);
    // ...
}
// above code is basically equivalent to:
function readButtonInput1(name, version) {
    var input = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        input[_i - 2] = arguments[_i];
    }
    // ...
}
