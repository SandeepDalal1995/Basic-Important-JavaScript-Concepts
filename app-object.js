// Object are key-value pairs and important-note: they reference type.
const aObject = { id: 1, username: "sandeep" }; // here aObject is pointing to the address in the memory. where it stores the data.
console.log(aObject);
console.dir(aObject); // you see complete structure of aObject variable.

// If we want to add more key-value, if we haven't added it in an Object before. say in aObject.
// object.key = value
aObject.userEmail = "sandeepdalal1995@gmail.com";
aObject.age = 32;
console.log(aObject);

// If we want to delete any property/key-value pair
delete aObject.userEmail; // userEmail key-value pair is deleted.
console.log(aObject);

// special key names and square bracket property access
const bObject = { id: 2, "first name": "ajay" }; // here "first name" is the key
// console.log(bObject.first name); // this is not possible to access like this.
console.log(bObject["first name"]); // To access the value of 'first name' key, we use square bracket and passing as string with inverted commas.
console.log(bObject.id); // this is possible
console.log(bObject["id"]); // an alternative

// keys as numbers
const cNumberKeyObject = { 1: "id", 2: "sandeep" };
console.log(cNumberKeyObject);
console.log(cNumberKeyObject[1]); // here javascript totally understand it is a number.
console.log(cNumberKeyObject["1"]); // an alternative becz javascript converts everything as string.

// order of key-value pairs in an object.
// Note: if key are (string) or (mixer of string and numbers) then order will be according to key-pair added to that object and numbered key will be arranged first.
const dMixObject = { id: 2, "first name": "ajay", 1: "rank" };
console.log(dMixObject); // means  1 , id , first name

// Note: if keys are only number and should be positive no including 0.
const dNumberObject = { 10: "123456789", 0: "id", 5: "name", 1: "title" };
console.log(dNumberObject); // means  0 , 1 , 5, 10

// selectBtn;
// console.dir(document.getElementById("selectBtn"));
// const buttonAdded = document.getElementById("buttonAppendHere");
// document.createElement("BUTTON").append("buttonAdded");
// console.dir(document.createElement("button"));
