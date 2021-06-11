/* 
  # ? 기호
    - options property로 없어도 되는 속성을 지정할때 사용
    - age에 ?이 없으면  "hello2({name: 'Yoon'})" 이 코드는 컴파일시 문제 발생
*/

interface Person2{
  name:string;
  age?: number;
}

function hello2(person: Person2): void{
  console.log(`안녕! ${person.name} 이야`);
}

hello2({name: 'Ayoon', age: 0})
hello2({name: 'Yoon'})

