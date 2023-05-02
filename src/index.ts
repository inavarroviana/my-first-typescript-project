let extinctDinosaurs: number = 76_000_000;
let favouritDinosaur: string = "T-Rex";
let extinct: boolean = true;

extinct = false;

let myConst;
myConst = "Hello World";
myConst = 33;

function littlePig(config: any) {
  return config;
}

let animals: string[] = ["pig", "happy", "John"];

let nums: number[] = [1, 2, 3];
let nums2: Array<number> = [];

let checks: boolean[] = [];

// nums.map(x => x.) // el autocompletado sugiere métodos del tipo de dato del array.

let tupla: [number, string] = [1, "pig"];
let tupla2: [number, string[]] = [1, ["pig", "august"]];

tupla.push(12);

// console.log(tupla);

enum Size {
  Small = "s",
  Medium = "m",
  Large = "lg",
  ExtraLarge = "xl",
}

const variable1 = Size.Large;

// console.log(variable1);

const enum LoadingState {
  Idle,
  Loading,
  Success,
  Error,
}

const state = LoadingState.Success;

console.log(state);

const object: {
  id: number;
  name: string;
} = { id: 1, name: "Frank" };

const object2: {
  id: number;
  name?: string;
} = { id: 1 };

const object3: {
  readonly id: number;
  name?: string;
} = { id: 1 };

// object3.id = 42 // Resulta en error

const object4: {
  id: number;
  name: string;
  size: Size;
} = { id: 1, name: "Frank", size: Size.ExtraLarge };

type Person = {
  id: number;
  name: string;
  size: Size;
  address: {
    number: number;
    street: string;
    city: string;
  };
};

const object5: Person = {
  id: 2,
  name: "Henry",
  size: Size.Medium,
  address: {
    number: 7007,
    street: "Mantua",
    city: "Montevideo",
  },
};
