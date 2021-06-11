"use strict";
/*
  # ? 기호
    - options property로 없어도 되는 속성을 지정할때 사용
    - age에 ?이 없으면  "hello2({name: 'Yoon'})" 이 코드는 컴파일시 문제 발생
*/
function hello2(person) {
    console.log("\uC548\uB155! " + person.name + " \uC774\uC57C");
}
hello2({ name: 'Ayoon', age: 0 });
hello2({ name: 'Yoon' });
