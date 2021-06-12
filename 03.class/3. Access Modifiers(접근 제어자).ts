/* 
  # 3.Access Modifiers(접근제어자)

    * constructor에 private을 선언하면 new키워드로 객체 생성 불가능
      - 이를 통해서 singleton pattern을 구현 가능하게함
    * public은 외부에서 접근 가능
    * private은 외부에서 접근 불가능
    * protected 외부에서 접근 불가능, 상속관계에서는 접근가능

*/ 

class Person3Klass {
  // property
  public name: string = "HyunA";
  private age!: number;

  // constructor
  public constructor(age?: number){
    if(age === undefined){
      this.age = 20;
    } else {
      this.age = age;
    }
  }

  // method
  public async init(){
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

const classP3_1: Person3Klass = new Person3Klass(33);
const classP3_2: Person3Klass = new Person3Klass();

(async()=>{
  console.log("비동기 테스트");
  const result = await classP3_1.init(); 
  console.log("비동기 테스트 > classP3_1: ", classP3_1);
  console.log("비동기 테스트 > result: ", result);
})();
// const classP2: Person2 = new Person2();
console.log(classP3_1);
console.log(classP3_2);
// console.log(classP3_2.age); // age 프로퍼티 접근 불가(private으로 선언됨.)



