//unknown.ts

declare const maybe: unknown;

// const aNumber: number = maybe;

if(maybe === true){
  const aBoolean: boolean = maybe;
  // const aString: string = maybe;
}

if(typeof maybe === "number"){
  const aNumber: number = maybe;
  // const aString: string = maybe;
}

if(typeof maybe === "string"){
  const aString: string = maybe;
  // const aBoolean: boolean = maybe;
}