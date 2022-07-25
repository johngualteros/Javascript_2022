//Top Level Await

//before
import("./math.js").then((math) => {
  console.log(math.add(1, 2));
});

//after
const math = await import("./math.js");

console.log(math.add(1, 10));

//Fetch
//before
const getData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  console.log(data);
};

//after
const res = await fetch("https://jsonplaceholder.typicode.com/todos");
export const data = await res.json();
console.log(data);

//Connect to mongo db
import mongoose from "mongoose";

export let db;
try {
  db = await mongoose.connect("mongodb://localhost/mongotest");
  console.log(db.connection.name);
} catch (error) {
  console.log(error);
}
//Method at

const arrayNumbers = ["1", "2", "3", "4", "5"];
console.log(arrayNumbers.at(-1));

//HasOwn

const user = {
  name: "John",
  age: 30,
};
console.log(Object.hasOwn(user, "name"));

let nameUser = Object.hasOwn(user, "name")
  ? user.name
  : "Not found in properties";
console.log(nameUser);
//private
class User{
    name="";
    age=0;
    #salt='022edrcrtrwdrrv';

    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    #encryptPassword(){
        return this.#salt+this.name;
    }
}
const userClass = new User("Joe",20);
console.log(userClass.encryptPassword());