interface Person8 {
  name: string;
  age?: number;
  readonly gender: string;
}

const p81:Person8 = {
  name: "Yoon",
  gender: "male"
}

//Cannot assign to 'gender' because it is a read-only property.ts(2540)
// p81.gender = 'email'

