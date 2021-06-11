// # function
// type alias
type EatType = (food: string) => void;
// interface
interface IEat {
  (food: string): void;
}

// # array
// type alias
type PersonList = string[];
// interface
interface IPsersonList {
  [index: number]: string;
}

// # intersection
interface ErrorHandling {
  succss: boolean;
  error?: {message: string};
}
interface ArtistsData {
  artists: {name: string}[];
}
// type alias
type ArtistsResponseType = ArtistsData & ErrorHandling;
// interface
interface IArtistsResponse extends ArtistsData, ErrorHandling { }

let art: ArtistsResponseType;
let iart: IArtistsResponse;


// # union types
interface Bird {
  fly(): void;
  layEggs(): void;
}
interface Fish {
  swim(): void;
  layEggs(): void;
}
// type alias
type PetType = Bird | Fish;
type PetType1 = Bird & Fish;  // inersection
// interface

/* 
  error
  - An interface can only extend an object type or intersection of object types with statically known members.ts(2312)
*/
// interface IPet1 extends PetType {}
interface IPet2 extends PetType1 {}
/* 
  error
  - A class can only implement an object type or intersection of object types with statically known members.ts(2422)
*/
// class Pet1 implements PetType {}
class Pet2 implements PetType1 {
  fly(): void {
    throw new Error("Method not implemented.");
  }
  layEggs(): void;
  layEggs(): void {
    throw new Error("Method not implemented.");
  }
  swim(): void {
    throw new Error("Method not implemented.");
  }
}

// # Declaration Merging - interface
// type alias
// interface
interface MergingInterface{
  a: string;
}
interface MergingInterface{
  b: string;
  }
let mi: MergingInterface ={
  a: "A",
  b: "B"
};
console.log({1: mi.a, 2: mi.b});

// # Declaration Merging - type alias
// type alias
/* 
  * error
    - Duplicate identifier 'MergingType'.ts(2300)
*/
type MergingType = {
  a: string;
}
// type MergingType = {
//   b: string;
// }
// interface
