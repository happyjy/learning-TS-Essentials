interface HelloPerson {
  (name: string, age?:number): void; 
}

const helloPerson: HelloPerson = function(name: string, age?: number){
  console.log(`안녕 ${name}이에요`);
}

helloPerson("Yoon", 32);