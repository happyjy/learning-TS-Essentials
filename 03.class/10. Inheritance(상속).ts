/* 
  # 10. Inheritance(상속)
  * 접근제한자 사용하는 이유는 
    - 각 목적에 맞게 사용하면서 오염 되지 않게 사용하는 것이다.
  * protected
    - 상속받은 클래스에서 접근 O, 외부에는 접근 X
  * override vs Overloading
    - overriding: Same Mehotd Name, Same parameter(상속관계, child class)
    - overloading: Same method Name, Differenct Parameter(같은 클래스)
    [ref](https://cupofprogramming.blogspot.com/2016/10/overloading-vs-overriding-in-java.html)

  * 상속 받았으면 super를 항상 작성해야한다.
*/ 

class Parent10Klass {
  
  constructor(protected _name: string, private _age: number) {}
  public print(): void {
    console.log(`# name: ${this._name}, age: ${this._age}`);
  }

  protected printName(): void{
    console.log(this._name, this._age);
  }
}

class Child10Klass extends Parent10Klass{
  public gender = "male";

  constructor(age: number) {
    super("Jyoon", age)
    
    this.printName();
  }
}


const p10 = new Parent10Klass("yyy", 0);
// p10._name // protected 접근제한자 
// p10.printName() // protected 접근제한자 

const c10 = new Child10Klass(32);
c10.print();