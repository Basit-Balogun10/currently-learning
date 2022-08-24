"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a;
exports.__esModule = true;
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
function getProperty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a");
getProperty(x, "a");
getProperty(x, "m");
var MyArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 },
];
var MyObject = {
    lang: "python", version: 15
};
function createLabel(nameOrId) {
    throw "unimplemented";
}
var strOrNum = Math.floor(Math.random() * 10) > 5 ? 'text' : 39;
createLabel(strOrNum);
var myArray = ['boy', 'girl', 3, true];
function returnTypeTest(x) {
    return x;
}
var conforms = {
    del: true,
    rodney: false
};
var passedObject = Math.floor({
    firstName: "Saoirse",
    lastName: "Ronan",
    age: 26
});
var sym = Symbol();
var obj = (_a = {},
    _a[sym] = "value",
    _a);
var val = obj[sym];
var NewPoint = /** @class */ (function () {
    function NewPoint() {
    }
    return NewPoint;
}());
var NewThing = /** @class */ (function () {
    function NewThing() {
        this._size = 0;
    }
    Object.defineProperty(NewThing.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            var num = Number(value);
            // Don't allow NaN, Infinity, etc
            if (!Number.isFinite(num)) {
                this._size = 0;
                return;
            }
            this._size = num;
        },
        enumerable: false,
        configurable: true
    });
    return NewThing;
}());
var thing = new NewThing();
var thingSize = thing._size;
var MyClass = /** @class */ (function () {
    function MyClass() {
        this.x = true;
    }
    MyClass.prototype.check = function (s) {
        var checked = this[s];
        return checked;
    };
    MyClass.prototype.doubleCheck = function (s) {
        var checked = this[s];
        return checked;
    };
    return MyClass;
}());
var Sonar = /** @class */ (function () {
    function Sonar() {
        this.pongit = 5;
    }
    Sonar.prototype.ping = function () {
        console.log("ping!");
    };
    return Sonar;
}());
var Ball = /** @class */ (function () {
    function Ball() {
    }
    Ball.prototype.pong = function () {
        console.log("pong!");
    };
    return Ball;
}());
var FileSystemObject = /** @class */ (function () {
    function FileSystemObject(path, networked) {
        this.path = path;
        this.networked = networked;
    }
    FileSystemObject.prototype.isFile = function () {
        return this instanceof FileRep;
    };
    FileSystemObject.prototype.isDirectory = function () {
        return this instanceof Directory;
    };
    FileSystemObject.prototype.isNetworked = function () {
        return this.networked;
    };
    return FileSystemObject;
}());
var FileRep = /** @class */ (function (_super) {
    __extends(FileRep, _super);
    function FileRep(path, content) {
        var _this = _super.call(this, path, false) || this;
        _this.content = content;
        return _this;
    }
    return FileRep;
}(FileSystemObject));
var Directory = /** @class */ (function (_super) {
    __extends(Directory, _super);
    function Directory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Directory;
}(FileSystemObject));
var fso = new FileRep("foo/bar.txt", "foo");
if (fso.isFile()) {
    fso.content;
}
else if (fso.isDirectory()) {
    fso.children;
}
else if (fso.isNetworked()) {
    fso.host;
}
var Box = /** @class */ (function () {
    function Box() {
    }
    Box.prototype.hasValue = function () {
        return this.value !== undefined;
    };
    return Box;
}());
var box = new Box();
box.value;
if (box.hasValue()) {
    var newVal = box.value;
    newVal;
}
var Params = /** @class */ (function () {
    function Params(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        // No body necessary
    }
    return Params;
}());
var a = new Params(1, 2, 3);
console.log(a.x);
console.log(a.z);
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.printName = function () {
        console.log("Hello, " + this.getName());
    };
    return Base;
}());
var Derived = /** @class */ (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Derived.prototype.getName = function () {
        return "world";
    };
    return Derived;
}(Base));
var d = new Derived();
d.printName();
