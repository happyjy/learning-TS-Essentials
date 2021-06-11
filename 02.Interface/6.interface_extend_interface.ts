interface IPerson2{
  name: string;
  age?: number;
}

interface IKorean extends IPerson2 {
  city: string;
}

const pk: IKorean = {
  name: "Yoon",
  city: 'Seoul'
}

console.log(pk);

// interface HTMLDivElement extends HTMLElement { }
HTMLDivElement