// Object

let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    features:["AC", "BL" ,"SL"]
};

// console.log(typeof car);
// console.log(car);
//  console.log(car.model);
// console.log(car.features);
// console.log(car.features[1]);
console.log(car);

// JSON mean '{ "brand":"Toyota"}'

let carJSON = JSON.stringify(car);
console.log(carJSON);

let carJSONTest = '{"brand":"Toyota","model":"Corolla","year": 2020,"features":["AC", "BL" ,"SL"]}';

let carObjConvert = JSON.parse(carJSONTest);
console.log(carObjConvert)
console.log(carObjConvert.brand)
console.log(typeof carJSONTest)

// Array

let fruits = ["Apple","Banana","Mango","Cherry","Jackfruits","pineapple"]
console.log(fruits)
console.log(fruits[3])
console.log(fruits[4])
console.log(fruits.length)
// add fruits end
fruits.push("Jackfruits")
console.log(fruits)
// delete fruits end
fruits.pop()
console.log(fruits)

fruits.forEach(fruit => console.log(fruit));
// add fruits start
fruits.unshift("Watermelon")
console.log(fruits);
// delete fruits start
fruits.shift()
console.log(fruits)

// filter
let longNameFruits = fruits.filter(fruit => fruit.length>5);
console.log(longNameFruits)

// upper case

let fruitsUpper = fruits.map(fruit => fruit.toUpperCase());
console.log(fruitsUpper)
// Lower case
let fruitsLower = fruits.map(fruit => fruit.toLowerCase());
console.log(fruitsLower)

console.log(fruits.indexOf("Banana"))

// Slice

let arraySlice = fruits.slice(1,4);
console.log(arraySlice)

// array bitor array push //Two array merge 

let newFruitsArray = fruits.concat(["mango","banana"]);
console.log(newFruitsArray);

console.log(newFruitsArray.slice(3,6));
console.log(newFruitsArray.sort());
console.log(newFruitsArray.reverse());

// map 

let map = new Map();
map.set("name","Arafat");
console.log(map.get("name"));

// multiple array 

let matrix = [
    [1,2,3,4],
    [9,"Arafat","apple",10],
    [5,6,7,8]
    
];
console.log(matrix[1][1])
console.log(matrix[1],[1])
console.log(matrix[0])

// convert array to string

console.log(fruits.toString())


// string 

let firstName = "Arafat"
let lastName = "Islam"
let testS = "Test"

// concatenation

let fulName = "Hello I am " + firstName + " " + lastName + ". "+ "Welcome to JS.";
console.log(fulName)



// Template Literal / concatenation

let fulName2 = `Hello I am ${firstName} ${lastName}. Welcome to JS.`
console.log(fulName2)

// Length

let lengthTest = fulName2.length;
console.log(lengthTest)
console.log(firstName[3])
console.log(fulName2.toLocaleUpperCase())
console.log(fulName2.toLocaleLowerCase())


// Trim

let address = "   Dhaka, Bangladesh, Tangail, Dhaka  "
let addressTrim = address.trim();
console.log(address)
console.log(addressTrim)
console.log(address.trimEnd())
console.log(address.trimStart())

//replace

console.log(address.replace("Dhaka","Rajshahi"))
console.log(address.replaceAll("Dhaka","Rajshahi"))

// index find

console.log(fulName2.indexOf("f"))
console.log(fulName2.indexOf("W"))

// check words or letter

console.log(address.includes("Dhaka"))
console.log(address.includes("Fhaka"))

let password = "SHdes_hh";
console.log(password.startsWith("SH"));
console.log(password.endsWith("Q"));


// slice

console.log(lastName.slice(1,3));

// split
let dummySt = "Hello I am Test Data";
console.log(dummySt.split(" "));

//Date time 

let currentTime = new Date();
console.log(currentTime)
console.log(currentTime.getDay())
console.log(currentTime.getMonth())
console.log(currentTime.getFullYear())
console.log(currentTime.getSeconds())
console.log(currentTime.getMinutes())
console.log(currentTime.getHours())

// Math OBJ

let PIValue =Math.PI
console.log(PIValue);

let a = 5.6;
console.log(Math.round(a));
let a2 = 5.4;
console.log(Math.round(a2));
let b = 11.3;
console.log(Math.ceil(b));
let c = 30.99;
console.log(Math.floor(c));

// Number 

let d = 345.234533245;
console.log(d.toFixed(2))

// Window object

console.log(window.innerWidth)
console.log(window.innerHeight)
console.log(window.location)
// alert
//window.alert("Hey......What up!")
// confirm
//window.confirm("Are you sure?")

// Time out set
setTimeout(()=>document.write("Hi I am 3 sec late"),3000);
//setInterval(()=>document.write("<br> This repeating work <br>"),3000);


// Navigator object  my computer all check kore ex: version ,browser etc

console.log(navigator.appName)
console.log(navigator.appVersion)
console.log(navigator.userAgent)
console.log(navigator.platform)
console.log(navigator.onLine)
console.log(navigator.hardwareConcurrency)

let todaysDate = new Date();
let monthName = todaysDate.toLocaleString('default',{weekday:'long'});

console.log(monthName);

let monthName2 = todaysDate.toLocaleDateString('en-US',{month:'long'});
console.log(monthName2);
