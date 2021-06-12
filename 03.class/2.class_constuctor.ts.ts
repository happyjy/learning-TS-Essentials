
/* 
  # 생성자 관련 내용

  * [point1] 아래 strict 관련 option을 true로 하면 age의 값이 초기화해야한다고 error을 발생한다.
    * "strictNullChecks": true,                    /* Enable strict null 
    * "strictPropertyInitialization": true,        /* Enable strict checking 
  * [point2] ! 설정이란? 
    * age!: number; 이렇게 설정을한다면
    * const classP2: Person2Klass = new Person2Klass();
      * classP2.age = 100;을 통해서 값을 입력가능하게 하는 옵션이다.
  * [point3] constructor에 async를 사용할 수 없다.
    * 만약 비동기 처리를 해주고 싶다면 constructor가 아닌 다른 함수를 호출하면서 구현해주면 되겠다. 
    * eg) await classP2_1.init();       
    * ! 설정과같이 생각해야할것이 age가 만약에 constructor가 아니라 비동기에 의해서 나중에 설정이 된다고 할때 
      * 이때 age!: number라고 설정해주면 되겠다.   
    * [async&promise, await](https://javascript.info/async-await#await)
*/ 

class Person2Klass {
  /* property 선언 */
  name: string = "HyunA";
  // [point2]
  age!: number;

  constructor(age?: number){
    if(age === undefined){
      this.age = 20;
    } else {
      this.age = age;
    }
  }

  // [point3] constructor에 async를 사용할 수 없다.
  async init(){
    let promise = new Promise((resolve, reject) => {
      setTimeout(()=> {
        this.age = 100;
        resolve("done");
      }, 1000)
    })

    let result = await promise;
    return result;
  }
}

const classP2_1: Person2Klass = new Person2Klass(33);
const classP2_2: Person2Klass = new Person2Klass();

(async()=>{
  console.log("비동기 테스트");
  const result = await classP2_1.init(); 
  console.log("비동기 테스트 > classP2_1: ", classP2_1);
  console.log("비동기 테스트 > result: ", result);
})();
// const classP2: Person2 = new Person2();
console.log(classP2_1);
console.log(classP2_2);