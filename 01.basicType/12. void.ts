
/* 
  예1: 아래 void type은 명시적으로 return이 없다라는 의미 입니다. 
*/
function returnVoid(msg: string): void{
  console.log(msg);
  // return undefined;
}

returnVoid("no return");