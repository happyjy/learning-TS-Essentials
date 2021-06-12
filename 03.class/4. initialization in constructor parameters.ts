/* 
  # 4. initialization in constructor parameters
    * [point1] 프로퍼티 설정방법 2
      프로퍼티 설정방법 1 처럼 this에 프로퍼티 값에 접근해 할당하는 방식을, 접근제한자 설정으로 대체 할 수 있다.  

*/ 

class Person4Klass {
  // property
  // public name: string = "HyunA";
  // private age: number;

  // constructor 
  // 프로퍼티 설정방법 1
  // public constructor( name: string,  age: number){  
  //   this.name = name;
  //   this.age = age;
  // }
  
  /* 
    [point1] 프로퍼티 설정방법 2
    프로퍼티 설정방법 1 처럼 this에 프로퍼티 값에 접근해 할당하는 방식을, 접근제한자 설정으로 대체 할 수 있다.  
  */
  public constructor(public name: string, public age?: number){  }

  // method
  public async init(){
    let promise = new Promise((resolve, reject) => {
      setTimeout(()=> {
        // this.age = 100;
        resolve("done");
      }, 1000)
    })

    let result = await promise;
    return result;
  }
}

const classP4_1: Person4Klass = new Person4Klass("Jyoon", 33);

(async()=>{
  console.log("비동기 테스트");
  const result = await classP4_1.init(); 
  console.log("비동기 테스트 > classP3_1: ", classP4_1);
  console.log("비동기 테스트 > result: ", result);
})();

console.log(classP4_1);
// console.log(classP3_2.age); // age 프로퍼티 접근 불가(private으로 선언됨.)
