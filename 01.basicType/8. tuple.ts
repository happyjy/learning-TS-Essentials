/* 
  # 8. tuple
    * 포함된 요소 개수와 특정 위치에 포함된 유형을 정확히 설정하는 또 다른 종류의 Array 유형
    * [ts - doc](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types)
*/

let a: [string, number];

a = ["hi", 32];
// a = [10, "hi"];  x
a[0] = "hello";
// a[0] = 32; x

const person: [string, number] = ["Ayoon", 0];
const [first, second] = person;
// const [first, second, third] = person; x

/* 
  # tuple은 rest elements는 array, tuple 유형을 가질 수 있다.
*/

type StringNumberBooleans = [string, number, ...boolean[]];
type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];

const tupleA: StringNumberBooleans = ["hello", 1];
const tupleB: StringNumberBooleans = ["beautiful", 2, true];
const tupleC: StringNumberBooleans = ["world", 3, true, false, true, false, true];

/* 
  # tuple with rest parameter and arguemtns 
    * Why might optional and rest elements be useful? 
    * Well, it allows TypeScript to correspond tuples with parameter lists. 
    * Tuples types can be used in rest parameters and arguments, so that the following:
 */
function readButtonInput(...args: [string, number, ...boolean[]]) {
  const [name, version, ...input] = args;
  // ...
}

// above code is basically equivalent to:

function readButtonInput1(name: string, version: number, ...input: boolean[]) {
  // ...
}