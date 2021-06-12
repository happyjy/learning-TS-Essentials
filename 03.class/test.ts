/* 
  # 10. Abstract Classes
    * Abstract 클래스로 만들고 사용하려면 
      클래스, 프로퍼티, 함수
*/ 

abstract class AbstractKlass11{
  protected _name: string = "mark";
  abstract age: number = 0;

  abstract setName(name: string): void;
  abstract getName(): string;
  getAge(): number {
    return 0;
  }
}

class Klass11 extends AbstractKlass11{
  public age!: number;

  constructor(age: number){
    super();
    this.age = age;
  }

  setName(name: string): void {
    this._name = name;
  }
  getName(): string {
    return this._name
  }
}

const klass11Inst = new Klass11(33);
klass11Inst.setName("jyoon");
const getNameResult = klass11Inst.getName();
const klass11InsAge = klass11Inst.age;

console.log(klass11Inst);
console.log(getNameResult);
console.log(klass11InsAge);