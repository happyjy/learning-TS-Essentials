"use strict";
/*
  05.Generics Class
*/
var Generic4Klass = /** @class */ (function () {
    function Generic4Klass(name, age) {
        this._name = name;
        this._age = age;
    }
    return Generic4Klass;
}());
// constructor Generic4Klass<string, number>(name: string, age: number): Generic4Klass<string, number>
new Generic4Klass("Jyoon", 32);
new Generic4Klass("Jyoon", 32);
// new Generic4Klass<string>(39);
