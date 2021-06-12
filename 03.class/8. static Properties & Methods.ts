/* 
  # 8. static Properties & Methods
    * class의 object에서 공통적으로 사용될 프로퍼티, 함수에 대해서 static 키워드를 사용한다.
*/ 

class Person8Klass {
  private static CITY = "BUSAN";
  public getCity() {
    console.log(`${Person8Klass.CITY}에 오신걸 환영 합니다.`);
  }
  public setCity(city: string){
    Person8Klass.CITY = city;
  }
}

const classP8_1: Person8Klass = new Person8Klass();
classP8_1.getCity()

const classP8_2: Person8Klass = new Person8Klass();
classP8_2.getCity()

classP8_1.setCity("Seoul");
classP8_1.getCity();
classP8_2.getCity();
