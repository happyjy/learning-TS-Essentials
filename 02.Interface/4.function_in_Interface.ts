/* 
  # interface에서 function 사용하기 
    * [POINT1] TS의 this에 대해서 
    * [POINT2] 함수로서 function을 사용할때 this의 scope 주의하기 
      * arrow function을 함수로서 사용할때 this는 binding 되지 않아 scope이 안돼 window 객체를 가르킨다.
*/

interface Person4{
  name: string;
  age: number;
  hello(): void;
}

const p41: Person4 = {
  name: 'Yoon',
  age: 32,
  hello: function(): void {
    console.log(`이름: ${this.name}, 나이: ${this.age}`);
  }
}

const p42: Person4 = {
  name: 'Yoon',
  age: 32,
 /* 
  [POINT1] TS의 this에 대해서 
    * TS의 construct 함수를 제외한 함수는 첫번째 인자에 this를 넣고 type을 설정할 수 있다.
    * 아래 와같은 상황에서 this binding(scope)이 현재 객체에 binding되어 필요 없다. 
    * 하지만 만약 다른 실행 컨텍스트도 필요할때 사용 할 수 있다. 
    * JS의 call, bind, apply와 같이 this의 컨텍스트를 바꿔주는 개념과 같다.
  */
  hello(this: Person4): void {
    console.log(`이름: ${this.name}, 나이: ${this.age}`);
  }
}

console.log(p42.hello());


/* 
  # [point][!] arrow function을 methods로 사용시 this, super 바인딩을 같지 않는다. 그리고 함수 방법으로 사용하지 않는것을 추천한다.
  * [arrow function expresstions - mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
  * [Arrow functions used as methods - mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#description)
  
  
  * [함수(Method)란? - mdn](https://developer.mozilla.org/en-US/docs/Glossary/Method)
    - function이 object의 property로 사용될때 function을 method라고 한다.
    - 두가지 methods가 있다. 
      - 1. Instance Method (객체 인스턴스에 의해 수행되는 내장 작업 인 인스턴스 메서드)
      - 2. Static Method (객체 생성자에서 직접 호출되는 작업인 [정적 메서드(static method)](https://developer.mozilla.org/en-US/docs/Glossary/Static_method))
      ```
        // ## static method 예시
        // In the Notifications API, 
        // the Notification.requestPermission() method is called on the actual Notification constructor itself — it is a static method:
        let promise = Notification.requestPermission();

        // ## instance method 예시
        // The Notification.close() method on the other hand, is an instance method — it is called on an specific notification object instance to close the system notification it represents:
        let myNotification = new Notification('This is my notification');

        myNotification.close();
      ```
    

 */
// const p43: Person4 = {
//   name: 'Yoon',
//   age: 32,
//   [POINT2] 함수로서 function을 사용할때 this의 scope 주의하기 
//   /* 
//     * 아래 this에서는 아래 와 같은 오류 발생
//       - An arrow function cannot have a 'this' parameter.ts(2730)
//   */
//   hello: (this: Person4): void => {
//     console.log(`이름: ${this.name}, 나이: ${this.age}`);
//   }
// }



/* 
  # Arrow function expressions
    * [mdn]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#arrow_functions_used_as_methods)으로 알아보는 arrow function, traditional funciton의 차이
    * 정의와 아래 세가지 예시 코드로 traditional, Arrow function을 알아 보자 
    * 세가지 예시 코드 
      * traditional, Arrow functions used as methods
      * traditional, Arrow functions used call, apply and bind
      * Perhaps the greatest benefit of using Arrow functions is with DOM-level methods (setTimeout, setInterval, addEventListener) that usually required some kind of closure, call, apply or bind to ensure the function executed in the proper scope.

  ## Differences & Limitations:
    * Does not have its own bindings to this or super, and should not be used as methods.
    * Does not have arguments, or new.target keywords.
    * Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
    * Can not be used as constructors.
    * Can not use yield, within its body.

  ## traditional, Arrow functions  used as methods
    * traditional function in methods
      ```
        'use strict';

        var obj = { // does not create a new scope
          i: 10,
          // [point]
          b: () => console.log(this.i, this),
          // [point]
          c: function() {
            console.log(this.i, this);
          }
        }

        
        obj.b(); // [point] prints undefined, Window {...} (or the global object)
        obj.c(); // [point] prints 10, Object {...}
      ```
      * Arrow function in methods
        -  Arrow functions do not have their own this. 
        -  Another example involving Object.defineProperty():
        ```

          'use strict';

          var obj = {
            a: 10
          };

          Object.defineProperty(obj, 'b', {
            get: () => {
              // [point]
              console.log(this.a, typeof this.a, this); // undefined 'undefined' Window {...} (or the global object)
              return this.a + 10; // represents global object 'Window', therefore 'this.a' returns 'undefined'
            }
          });
        ```

  ## traditional, Arrow functions call, apply and bind
    * 결론: arrow function에 call, apply, bind 첫번째 인자에 this scope을 binding 해줘도 arrow function의 this는 window 입니다.
    * 이유: Arrow functions establish "this" based on the scope the Arrow function is defined within.

    * 예시: traditional function vs arrow function
      ```js
          // ----------------------
          // Traditional Example
          // ----------------------
          // A simplistic object with its very own "this".
          var obj = {
              num: 100
          }

          // Setting "num" on window to show how it is NOT used.
          window.num = 2020; // yikes!

          // A simple traditional function to operate on "this"
          var add = function (a, b, c) {
            return this.num + a + b + c;
          }

          // call
          var result = add.call(obj, 1, 2, 3) // establishing the scope as "obj"
          console.log(result) // result 106

          // apply
          const arr = [1, 2, 3]
          var result = add.apply(obj, arr) // establishing the scope as "obj"
          console.log(result) // result 106

          // bind
          var result = add.bind(obj) // establishing the scope as "obj"
          console.log(result(1, 2, 3)) // result 106

          // ----------------------
          // Arrow Example
          // ----------------------

          // A simplistic object with its very own "this".
          var obj = {
              num: 100
          }

          // Setting "num" on window to show how it gets picked up.
          window.num = 2020; // yikes!

          // Arrow Function
          var add = (a, b, c) => this.num + a + b + c;

          // call
          console.log(add.call(obj, 1, 2, 3)) // result 2026

          // apply
          const arr = [1, 2, 3]
          console.log(add.apply(obj, arr)) // result 2026

          // bind
          const bound = add.bind(obj)
          console.log(bound(1, 2, 3)) // result 2026 
      ```
  

  ## [중요] Perhaps the greatest benefit of using Arrow functions is with DOM-level methods (setTimeout, setInterval, addEventListener) that usually required some kind of closure, call, apply or bind to ensure the function executed in the proper scope.
    * 예시: Traditional Example vs Arrow Example
    ```
        // * Traditional Example:
        var obj = {
            count : 10,
            doSomethingLater : function (){
                // [point] setTimout callback function에서 this가 obj를 가르키는 방법 2
                // 1. bind함수로 this binding 해주기 
                // 2. arrow function으로 
                setTimeout(function(){ // the function executes on the window scope
                    this.count++;
                    console.log(this.count);
                }, 300);
            }
        }
        obj.doSomethingLater(); // console prints "NaN", because the property "count" is not in the window scope.
        


        // * Arrow Example:
        var obj = {
            count : 10,
            // [point][!]
            // * 현재 상황에서 arrow function은 method로 사용될때 부적합, 
            // * callback function에서는 this가 obj 객체를 binding하고 있음으로 적합
            doSomethingLater : function(){ // of course, arrow functions are not suited for methods
                setTimeout( () => { // since the arrow function was created within the "obj", it assumes the object's "this"
                    this.count++;
                    console.log(this.count);
                }, 300);
            }
        }
        obj.doSomethingLater();
    ```

*/

