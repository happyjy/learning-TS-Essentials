/* 
  # 7. index Signatures in class

  * 클래스 프로퍼티가 동적으로 바뀔때 사용 
  * 초기값을 설정해 줄 필요가 없다. 
  * 
*/ 

class Person7Klass {
  [index: string]: "male" | "female";

  mark: "male" = "male";
}

const classP7_1: Person7Klass = new Person7Klass();
classP7_1.H = "male";
classP7_1.A = "female";
console.log(classP7_1);

const classP7_2: Person7Klass = new Person7Klass();
classP7_2.A1 = "male";
classP7_2.A2 = "female";
classP7_2.A3 = "female";
console.log(classP7_2);