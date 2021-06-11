interface IPerson1 {
  name: string;
  age?: number;
  hello(): void;
}

class Person5 implements IPerson1 {
  name: string;
  age?: number | undefined;

  constructor(name: string, age?: number){
    this.name = name;
    this.age = age;
  }

  hello(): void {
    console.log(`안녕하세요! ${this.name} 입니다. 나이는 ${this.age} 입니다.`);
  }
  
}

const personInst = new Person5("Yoon");
const personInst1 = new Person5("Yoon", 32);
personInst.hello()
personInst1.hello()