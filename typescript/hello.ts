export {};

// // This is an industrial-grade general-purpose greeter function:
// const greet = (person: string, date: Date): void => {
//     return console.log(`Hello ${person}, today is ${date}!`);
// };
// greet("Brenda", new Date());

// let message = "Some texts";

// let myArray = ["red", "blue", "green"];
// let myObject = { age: 12, name: "basit" };

// function printCoord(pt: { x: number; y: number }) {
//     console.log("The coordinate's x value is " + pt.x);
//     console.log("The coordinate's y value is " + pt.y);
// }
// // printCoord({ x: 3, y: 7 });

// type id = number | string;

// let myId: id = 3;
// console.log("id: ", myId);

// let myString = "basit" as any as number;
// myString = 5;
// console.log(typeof myString);

// // Change 1:
// const req = { url: "https://example.com", method: "GET" } as const;
// const handleRequest = (url: "https://example.com", method: "GET" | "POST") => {
//     (req.method as string) = "POSTING";
//     console.log(req);
// };
// // Change 2
// handleRequest(req.url, req.method);

// function liveDangerously(x?: number | null) {
//     // No error
//     console.log(x!.toFixed());
// }

// liveDangerously(5);
// const testVar = 5 | 2;
// console.log(testVar);

// interface Circle {
//     kind: "circle";
//     radius: number;
// }
// interface Square {
//     kind: "square";
//     sideLength: number;
// }
// type Shape = Circle | Square;

// function getArea(shape: Shape) {
//     switch (shape.kind) {
//         case "circle":
//             return Math.PI * shape.radius ** 2;
//         case "square":
//             return shape.sideLength ** 2;
//         default:
//             return shape;
//     }
// }

// function firstElement<Type>(arr: Type[]): Type | undefined {
//     return arr[0];
// }

// let output = firstElement([]);
// function map<Input, Output>(
//     arr: Input[],
//     func: (arg: Input) => Output
// ): Output[] {
//     return arr.map(func);
// }
// // Parameter 'n' is of type 'string'
// // 'parsed' is of type 'number[]'
// const parsed = map(["1", "2", "3"], (n) => parseInt(n));

// type md = { length: number };
// // interface md { length: number }

// function longest<Type extends md>(a: Type, b: Type) {
//     if (a.length >= b.length) {
//         return a;
//     } else {
//         return b;
//     }
// }
// // longerArray is of type 'number[]'
// const longerArray = longest([1, 2], [1, 2, 3]);
// // longerString is of type 'alice' | 'bob'
// const longerString = longest("alice", "bob");
// // Error! Numbers don't have a 'length' property
// const notOK = longest(10, 100);
// function minimumLength<Type extends { length: number }>(
//     obj: Type,
//     minimum: number
// ): Type {
//     if (obj.length >= minimum) {
//         return obj;
//     } else {
//         return { length: minimum };
//     }
// }

// type customType = string | number;

// function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
//     return arr1.concat(arr2);
// }

// const arr = combine<customType[]>([1, 2, 3], ["hello"]);

// function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
//     return arr.filter(func);
// }

// const filtered = filter1<number>([1, 2, 3, 4], (num) =>
//     num % 2 === 0 ? true : false
// );

// function filter2<Type, Func extends (arg: Type) => boolean>(
//     arr: Type[],
//     func: Func
// ): Type[] {
//     return arr.filter(func);
// }

// // const filtered = filter2<number>([1, 2, 3, 4], (num) => num % 2 === 0 ? true : false)

// function myForEach(arr: any[], callback: (arg: any, index: number) => void) {
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i], i);
//     }
// }

// myForEach([1, 2, 3], (a) => console.log(a));
// myForEach([1, 2, 3], (a, i) => console.log(a, i));

// // FUNCTION OVERLOADS

// // function fn(x: boolean): void;
// // // Argument type isn't right
// // function fn(x: string): void;
// // function fn(x: boolean) {}

// function fn(x: string): string;
// function fn(x: number): boolean;
// function fn(x: string | number) {
//     return "oops";
// }

// function len(s: string): number;
// function len(arr: any[]): number;
// function len(ele: any) {
//     return ele.length;
// }

// let getValue = () => {
//     let randNum = Math.floor(Math.random() * 10);
//     if (randNum > 5) {
//         return "rand string";
//     }
//     return [1, "ddfs"] as any[];
// };
// let value = getValue();
// len(value);

// interface User {
//     id: number;
//     admin: boolean;
//     becomeAdmin: () => void;
// }

// const user = {
//     id: 123,
//     admin: false,
//     becomeAdmin: function (this: User) {
//         this.admin = true;
//     },
// };

// // interface DB {
// //     filterUsers(filter: (this: User) => boolean): User[];
// // }

// // const getDB = () => {
// //     let db = {
// //         filterUsers: (fn: (this: User) => boolean) => {
// //             return [this];
// //         },
// //     };
// //     return db;
// // };
// // const db: DB = getDB();
// // const admins = db.filterUsers(function (this: User) {
// //     return this.admin;
// // });

// interface DB {
//     filterUsers(filter: (this: User) => boolean): User[];
// }

// function filter(this: User) {
//     return this.admin;
// }

// const db: DB = {
//     filterUsers: function (filter) {
//         return [];
//     },
// };
// const admins = db.filterUsers(filter);

// type Test = unknown;
// function safeParse(s: Test): unknown {
//     return s.b();
// }
// // Need to be careful with 'obj'!
// let someRandomString = "fdfdsfd";
// const obj = safeParse(someRandomString);

// function doSomething(f: Function) {
//     let output = f(1, 2, 3);
//     return output;
// }

// // REST PARAMERTER
// function multiply(n: number, ...m: Array<number>) {
//     return m.map((x) => n * x);
// }
// // 'a' gets value [10, 20, 30, 40]
// const a = multiply(10, 1, 2, 3, 4);

// // REST ARGUMENT
// const args = [8, 5] as const;
// const angle = Math.atan2(...args);

// type voidFunc = () => void;
// const f1: voidFunc = () => {
//     return true;
// };

// let v1 = f1();

// function f2(): void {
//     //@ts-expect-error
//     return true;
// }

// interface PaintOptions {
//     xPos?: number;
//     yPos?: number;
// }

// function paintShape(opts: PaintOptions) {
//     let xPos = opts.xPos;
// }

// paintShape({ xPos: 100, yPos: 100 });

// interface NumberOrStringDictionary {
//     [index: number]: number | string;
//     length: number; // ok
//     name?: string;
// }

// const ma: NumberOrStringDictionary = [];
// let md  = {}

// interface Box {
//     contents: unknown;
// }
// let x: Box = {
//     contents: "hello world",
// };
// // we could check 'x.contents'
// if (typeof x.contents === "string") {
//     console.log(x.contents.toLowerCase());
// }
// // or we could use a type assertion
// console.log((x.contents as string).toLowerCase());


// function mf1(a: unknown) {
//  a.b();
// }

// function mf2(ased: any) {
//     ased();
// }

// const isUnknown = <MyType>(val: MyType): MyType extends unknown ? boolean : number => {
//     return true
// }

// const mu: unknown = 'unk'
// let res = isUnknown(mu)

// // function isUnknown<T> (val: T): T is unkonwn ? boolean : number {
// //     if (typeof val == unknown) {
// //         return true
// //     }
// //     return false
// // }

// interface NewBox<Type> {
//  contents: Type;
// }
// interface StringBox {
//  contents: string;
// }
// let boxA: NewBox<string> = { contents: "hello" };
// boxA.contents;
// let boxB: StringBox = { contents: "world" };
// boxB.contents;

// boxA = boxB
// boxA

// function doSomething(value: Array<string>) {
//  // ...
// }
// let myArray: string[] = ["hello", "world"];
// // either of these work!
// doSomething(myArray);
// doSomething(new Array("hello", "world"));

// let x: readonly string[] = [];
// let y: string[] = [];
// x = y;

// type BooleansStringNumber = [...boolean[], string, number];
// let bsn: BooleansStringNumber = ['dfsf', 3]

// type StringNumberBooleans = [string, number, ...boolean[]];
// let snb: StringNumberBooleans = ["dfsf", 3, false];

// type StringBooleansNumber = [string, ...boolean[], number];
// let sbn: StringBooleansNumber = ['dfsf', true, 5]

// let point = [3, 4] as const;
// function distanceFromOrigin([x, y]: [number, number]) {
//  return Math.sqrt(x ** 2 + y ** 2);
// }
// distanceFromOrigin(point);

// // function identity<Type>(arg: Type): Type {
// //  return arg;
// // }
// // let myIdentity: <Type>(arg: Type) => Type = identity;

// function identity<Type>(arg: Type): Type {
//  return arg;
// }
// let myIdentity: { <Type>(arg: Type): Type } = identity;

// class GenericNumber<NumType, StrType> {
//  zeroValue: NumType;
//  add: (x: NumType, y: NumType) => NumType;
//  str: StrType
// }

// let myGenericNumber = new GenericNumber<number, string>();

// interface Lengthwise {
//  length: number;
// }


// function loggingIdentity<Type extends Lengthwise, MyType>(arg: Type): Type {
//  console.log(arg.length); // Now we know it has a .length property, so no
//  return arg;
// }

// interface ObjectRecord {
//     [key: string]: number
// }

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key): Type[Key] {
    return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a");
getProperty<typeof x, "b">(x, "a");
getProperty(x, "m");
type RType = ReturnType<typeof getProperty<typeof x, 'a'>>

const MyArray = [
 { name: "Alice", age: 15 },
 { name: "Bob", age: 23 },
 { name: "Eve", age: 38 },
];
type Person = typeof MyArray[number];

type Age = typeof MyArray[number]["age"];
// Or
type Age2 = Person["age"];

type MyObjectType = {
    [index: string]: string | number
}

const MyObject: MyObjectType = {
 lang: "python", version: 15   
}

type Lang = typeof MyObject[string]
type key = "age";
type NewAge = Person[key];

interface Animal {
 live(): void;
}
interface Dog extends Animal {
 woof(): void;
}
type Example1 = Dog extends Animal ? number : string;
type Example2 = RegExp extends Animal ? number : string

interface IdLabel {
 id: number /* some fields */;
}
interface NameLabel {
 name: string /* other fields */;
}
function createLabel(id: number): IdLabel;
function createLabel(name: string): NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
 throw "unimplemented";
}

let strOrNum = Math.floor(Math.random() * 10) > 5 ? 'text' : 39
createLabel(strOrNum)

type MessageOf<T> = T extends { message: unknown } ? T["message"] : never
interface Email {
    id: number;
    message: string;
    subject: string;
}
interface NoEmailMessage {
    id: number;
    subject: string;
}
type EmailMessageContents = MessageOf<Email>;
type NoEmailMessageContents = MessageOf<NoEmailMessage>;


type Flatten<T> = T extends any[] ? T[number] : T

let myArray = ['boy', 'girl', 3, true]
type FlattenedArray = Flatten<typeof myArray>
type NotFlattened = Flatten<object>

type FuncReturnType<T> = T extends Function ? number : T

function returnTypeTest<T>(x: T): T {
    return x
}

type Typo = FuncReturnType<typeof returnTypeTest>

type OnlyBoolsAndHorses = {
 [key: string]: boolean;
};
const conforms: OnlyBoolsAndHorses = {
 del: true,
 rodney: false,
};

type Concrete<Type> = {
 [Property in keyof Type]-?: Type[Property];
};
type MaybeUser = {
 id: string;
 name?: string;
 age?: number;
};
type User = Concrete<MaybeUser>;

type Getters<Type> = {
 [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
};
interface NewPerson {
 name: string;
 age: number;
 location: string;
}
type LazyPerson = Getters<NewPerson>;

type FilteredUser<Type> = {
    [Property in keyof Type as Exclude<Property, 'age'>]: Type[Property]
}

type filteredUser = FilteredUser<User>

type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
type NewLang = "en" | "ja" | "pt";
type LocaleMessageIDs = `${NewLang}_${AllLocaleIDs}`;


const passedObject = Math.floor({
 firstName: "Saoirse",
 lastName: "Ronan",
 age: 26,
});


type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`
type MainID = ASCIICacheKey<"my_app">

const sym = Symbol();
let obj = {
  [sym]: "value",
};
let val = obj[sym]

class NewPoint {
 x: number;
 y: number;
}

class NewThing {
 _size = 0;
 get size(): number | string {
 return this._size;
 }
 set size(value) {
 let num = Number(value);
 // Don't allow NaN, Infinity, etc
 if (!Number.isFinite(num)) {
 this._size = 0;
 return;
 }
 this._size = num;
 }
}

const thing = new NewThing()
let thingSize = thing._size

class MyClass {
 [s: string]: boolean | ((s: string) => boolean);
 [k: number]: boolean | ((s: string) => boolean);
 x:boolean = true
 check(s: string) {
    let checked = this[s];
 return checked as boolean
 }
 doubleCheck(s: number) {
    let checked = this[s];
 return checked as boolean
 }
}

interface Pingable {
 ping(): void;
}

interface Pongable {
 pong?(): void;
 pongit: number
}
class Sonar implements Pingable, Pongable {
 pongit = 5
    ping() {
 console.log("ping!");
 }
}
class Ball implements Pingable {
 pong() {
 console.log("pong!");
 }
}

class FileSystemObject {
 isFile(): this is FileRep {
 return this instanceof FileRep;
 }
 isDirectory(): this is Directory {
 return this instanceof Directory;
 }
 isNetworked(): this is Networked & this {
 return this.networked;
 }
 constructor(public path: string, private networked: boolean) {}
}
class FileRep extends FileSystemObject {
 constructor(path: string, public content: string) {
 super(path, false);
 }
}
class Directory extends FileSystemObject {
 children: FileSystemObject[]
}
interface Networked {
 host: string;
}
const fso: FileSystemObject = new FileRep("foo/bar.txt", "foo");
if (fso.isFile()) {
 fso.content
 
} else if (fso.isDirectory()) {
    fso.children
 
} else if (fso.isNetworked()) {
    fso.host
}

class Box<T> {
 value?: T;
 hasValue(): this is { value: T } {
 return this.value !== undefined;
 }
}
const box = new Box<number>();
box.value;
if (box.hasValue()) {
    let newVal = box.value;
    newVal
}

class Params {
 constructor(
 public readonly x: number,
 protected y: number,
 private z: number
 ) {
 // No body necessary
 }
}
const a = new Params(1, 2, 3);
console.log(a.x);
console.log(a.z);

abstract class Base {
 abstract getName(): string;
 printName() {
 console.log("Hello, " + this.getName());
 }
}
class Derived extends Base {
 getName() {
 return "world";
 }
}
const d = new Derived();
d.printName();