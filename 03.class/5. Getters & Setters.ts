/* 
  # 5. Getters & Setters
    * get, set할때 함수를 호출 함으로 다른 동작을 해줄 수 있다. 
    * 예를 들어 setter할때 몇번했는지 count할 수 있다. 
*/ 

class Person5Klass {
  public constructor(public _name: string, public age?: number){  }

  get name() {
    console.log("# get");
    return this._name + " hungry";
  }

  set name(n: string){
    console.log("# set");
    this._name = n;
  }
}

const classP5_1: Person5Klass = new Person5Klass("Jyoon", 32);
console.log(classP5_1._name); // get을 하는 함수 getter
console.log(classP5_1.name); // get을 하는 함수 getter
classP5_1.name = "YJY"; // set을 하는 함수 setter
console.log(classP5_1.name); // get을 하는 함수 getter
