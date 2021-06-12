/* 
  05.Generics Class
*/

class Generic4Klass<T, K> {
  private _name: T;
  private _age: K; 

  constructor(name: T, age: K){
    this._name = name;
    this._age = age;
  }
}

// constructor Generic4Klass<string, number>(name: string, age: number): Generic4Klass<string, number>
new Generic4Klass("Jyoon", 32);
new Generic4Klass<string, number>("Jyoon", 32);
// new Generic4Klass<string>(39);