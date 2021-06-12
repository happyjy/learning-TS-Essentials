/* 
  # 6. readonly properties
    * [point] readonly라서 에러 
*/ 

class Person6Klass {
  public readonly name: string = "Jyoon";
  public readonly country: string;

  public constructor(public _name: string, public age?: number){  
    this.country = "australia"
  }

  hello(){
    // this.country = "Korea"; // [point] readonly라서 에러 
  }
}

const classP6_1: Person6Klass = new Person6Klass("Jyoon", 33);
// classP6_1.name = "YJY";  // [point] readonly라서 에러 
