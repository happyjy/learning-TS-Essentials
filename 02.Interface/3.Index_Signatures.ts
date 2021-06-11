/* 
  # [POINT1] index signatures
    * Person3에는 key가 string, value가 any type인 값을 갖게 된다. 
*/
interface Person3{
  name:string;
  age?: number;
  // [POINT1]
  [index: string]: any;
}

function hello3(person: Person3): void{
  console.log(`안녕! ${person.name} 이야, 나이는 ${person.age}`);
  console.log(`주소1는 ${person.address}`);
  console.log(`주소2는 ${person.address1}`);
  console.log(`주소3는 ${person.address2}`);
}

const p31: Person3 = {
  name: "Yoon",
  age: 32
}
const p32: Person3 = {
  name: "Yoon",
}
const p33: Person3 = {
  name: "Yoon",
  address: "주소1 영등포구", 
}
const p34: Person3 = {
  name: "Yoon",
  address: "주소1 영등포구",
  address1: "주소2 영등포구",
  address2: "주소3 영등포구"
}

hello3(p31);
hello3(p32);
hello3(p33);
hello3(p34);

/* 
  # [POINT2] positional indexer
    * key가 number, value가 boolean 값으로 설정
*/
interface States1 {
  // POINT2
  [index: number]: boolean;
}

let s2: States1 = [true, false];
console.log("");
console.log("# [POINT2] index signatures");
console.log(s2);
console.log(s2[0]);

/* 
  # [POINT3] Indexer with other members
    * Indexer with other members
    * Besides indexers, indexable interfaces allow to add additional properties
    * When using positional indexer (i.e. indexer of number type) we can define array properties/* methods which need to be exposed.
*/
interface States2{
    [index3: number]: boolean;
    length: number;
    pop(): boolean | undefined;
}

console.log("");
console.log("# [POINT3] Indexer with other members");
let s1: States2 = [true, false, true];
console.log(s1); //[ true, false, true ]
console.log(s1.length); //3
console.log(s1.pop()); //true
console.log(s1); //[ true, false ]