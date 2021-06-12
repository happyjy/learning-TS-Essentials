/* 
  # 8. Singletons
  
    * 1. private consturctor(){}
      - new 키워드로 객체 생성 못하게 
      - 그래야 객체가 하나 생성을 목적으로한 Singletons 패턴 구현 가능

    * 2. private static instance: Singleton | null = null;
      - 싱글톤으로 객체 할당할 프로퍼티 private static으로 선언 

    * 3. public static getInstance 함수 생성
      - static으로 클래스 끼리 데이터가 공유가 가능하다

*/ 

// Person9Klass
class Singleton {
  private static instance: Singleton | null = null;

  public static getInstance(): Singleton {
    /* 
      # SINGLETON 객체 생성
        * [code1]Signleton으로 부터 만든 object가 있으면 그것을 return
        * [code2]없으면, 만들어서 return
     */
      // [code2]
    if(Singleton.instance === null){
      Singleton.instance = new Singleton();
    }

    //[code1]
    return Singleton.instance;
  }
  private constructor(){}
}

const singletonInst1 = Singleton.getInstance()
const singletonInst2 = Singleton.getInstance()

console.log(singletonInst1 === singletonInst2);