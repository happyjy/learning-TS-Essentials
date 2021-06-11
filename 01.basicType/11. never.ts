
/* 
  # 예1 함수가 어떤 값을 return 하지 않는 경우
*/
function error(msg: string):never{
  throw new Error(msg);
}

function fail(){
  return error("failed");
}

function infiniteLoop(): never {
  while(true){}
}


/* 
  # 예2 유니온 타입인 경우 타입 가드를 사용하는 케이스
*/
declare const aTest: string | number;
if(typeof aTest !== "string"){
  aTest;
}

/* 
  # 예3 제너릭에서 어떤 값도 반환하지 않는 경우 
*/
type Indexable<T> = T extends string ? T & {[index: string]: any}: never;

type ObjectIndexable = Indexable<{}>
/* 
  * 아래와 같은 에러 발생
    - Type 'string' is not assignable to type 'never'.ts(2322)
    - 즉 잘못된 타입을 막는데 사용한다.
*/
// const bTest: Indexable<{}> = '';
