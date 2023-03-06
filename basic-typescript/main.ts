const bob = "hey I'm bob"

const bob2 = () => {};
console.log(bob);

const a = 5.321;
const b = {
    x: 5,
    y: 123.12
}

const c: {x:number, y:string} = {
    x: 121,
    y: "asdads"
}

interface MyObj {
    x: number;
    y: number
}

const d: MyObj = {
    x: 123,
    y: 456
}

// d.x = "adss" // <- don't allow
d.x = 1231.231


const add1 = (x:number, y:number) => x + y;

type AddFunc = (x:number, y:number) => number;
const add2: AddFunc = (x: number, y:number) => x + y;
// const add3 = ({a,b} : {a:number, b:number}) => a + b;
const add3 = (nums: {a:number, b:number}) => nums.a + nums.b;


let mayBeNum: number | string = 5
mayBeNum = "hello";

interface Dog {
    bark: string
}
interface Cat {
    purr: string
}

type DogCat = Dog & Cat | string | number ;
let dogMayCat: DogCat = {
    bark: "barrrr",
    purr: "yaaa"
}
console.log(typeof dogMayCat);
dogMayCat = "asdfsadf"
console.log(add2(dogMayCat as any, dogMayCat as any))
console.log(typeof dogMayCat);
dogMayCat = 5
console.log(add2(dogMayCat as number, dogMayCat as any))

const functionA = (x: any) => {
    console.log(x);
}

functionA("stand")