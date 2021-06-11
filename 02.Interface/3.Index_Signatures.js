"use strict";
function hello3(person) {
    console.log("\uC548\uB155! " + person.name + " \uC774\uC57C, \uB098\uC774\uB294 " + person.age);
    console.log("\uC8FC\uC18C1\uB294 " + person.address);
    console.log("\uC8FC\uC18C2\uB294 " + person.address1);
    console.log("\uC8FC\uC18C3\uB294 " + person.address2);
}
var p31 = {
    name: "Yoon",
    age: 32
};
var p32 = {
    name: "Yoon",
};
var p33 = {
    name: "Yoon",
    address: "주소1 영등포구",
};
var p34 = {
    name: "Yoon",
    address: "주소1 영등포구",
    address1: "주소2 영등포구",
    address2: "주소3 영등포구"
};
hello3(p31);
hello3(p32);
hello3(p33);
hello3(p34);
var s2 = [true, false];
console.log("");
console.log("# [POINT2] index signatures");
console.log(s2);
console.log(s2[0]);
console.log("");
console.log("# [POINT3] Indexer with other members");
var s1 = [true, false, true];
console.log(s1); //[ true, false, true ]
console.log(s1.length); //3
console.log(s1.pop()); //true
console.log(s1); //[ true, false ]
