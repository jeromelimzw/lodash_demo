let _ = require("lodash");

//loop an action N times with _.times(count, function)
const log = () => {
  console.log("a message");
};

_.times(5, log);

//Loop through a collection and return a deeply-nested property from each item with _.map(array, property)
const ownerArr = [
  {
    owner: "Colin",
    pets: [{ name: "jerry" }, { name: "dog2" }]
  },
  {
    owner: "John",
    pets: [{ name: "jonathan" }, { name: "dog4" }]
  }
];

console.log(_.map(ownerArr, "pets[0].name")); //returns the first name of the 0th postion of the pet key

// Create an array of N size and populate them with unique values of the same prefix with _.times(N, _.uniqueId,'ball');
console.log(_.times(6, _.partial(_.uniqueId, "ball_")));

//deep cloning an object with _.cloneDeep(object)

const objA = {
  name: "colin"
};
const objC = objA;
console.log(`normal clone: ${objC === objA}`);

const objB = _.cloneDeep(objA);
console.log(`deep clone: ${objB === objA}`);

//get a random number from a range with _.random(start,end); assumes btw 0 and final if only 1 param

const random = _.random(55, 99);
const randomTillNum = _.random(86);
console.log(`random number ${random} \nrandom till number ${randomTillNum}`);

//extending objects i.e. combining objects with _.assign(obj1,obj2,obj3)
const objD = { name: "colin", car: "suzuki" };
const objE = { age: 17 };
const objF = { pet: "dog" };

const objG = _.assign(_.cloneDeep(objD), _.cloneDeep(objE), _.cloneDeep(objF));
console.log(objG);

//removing properties from object with _.omit with _.omit(obj,'key') or _.omit(obj, ['key1','key2'...])
const objH = _.omit(objG, "name");
console.log(objH);

//select properties from another object to make new object;
const objI = _.pick(objG, ["name", "pet"]);
console.log(objI);

//select random item from list
const luckyDrawBag = [
  "gold",
  "silver",
  "bronze",
  "amethyst",
  "sapphire",
  "ruby"
];
const luckyPick = _.sample(luckyDrawBag);
console.log("1 lucky pick:" + luckyPick);
//multiple random needs checking
// const multiplePick = _.sample(luckyDrawBag, 2);
// console.log(multiplePick);
// console.log(luckyDrawBag);
