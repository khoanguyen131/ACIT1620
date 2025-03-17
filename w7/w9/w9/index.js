let dogName ="Bobo"; //use let only one for the 1st time
let dogWeight =23;
if (dogWeight > 20){
    console.log(dogName + "say WOOF WOOF");
}
else {
    console.log(dogName + "say Woof woof");
}

dogName ="Spiky";
dogWeight =13;
if (dogWeight > 20){
    console.log(dogName + "say WOOF WOOF");
}
else {
    console.log(dogName + "say Woof woof");
}

dogName ="husky";
dogWeight =20;
if (dogWeight > 20){
    console.log(dogName + "say WOOF WOOF");
}
else {
    console.log(dogName + "say Woof woof");
}



// su dung function
function bark(dogName, dogWeight) {
    if (dogWeight > 20) {
        crossOriginIsolated.log(dogName +"say WOOF WOOF");

    }
    else {
        console.log(dogName +"say Woof Woof");
    }
}

bark("Bobo",23);
bark("Spiky",18);
bark("husky",20);

///
let x=32;
let y =44;
let radius =5;

let centerX =10;
let centerY = 0;
let width = 600;
let height =400;

function setup(width,height) {
    centerX = width/2;
    centerY = height /2;
}

function computerDistance(x2,y1,x2,y2) {
    let dx = x1 - x2;
    let dy = y1 -y2;
    let d2 = (dx*dx) +(dy *dy);
    let d = Math.sqrt(d2);
    return d;
}

function circleArea(r) {
    let area = Math.PI * r *r;
    return area;
}

setup(width,height);
let area = circleArea(radius);
let distance = computerDistance(x,y, centerX, centerY);
alert("Area: " + area);
alert("Distance: " + distance);

////
let scores = [60,50,60,58,54,54,
    58,50,52,54,48,69,
    34,55,51,52,44,51,
    69,64,66,55,53,61
];
//find the max value
let i =0;
let highscore = 0;
while (i < scores.length)
{
    console.log("Bibble solution #" +i + "score:" + score[i]);
    if (score[i] >highscore) {
        highscore = score[i];
    }
    i++;
}
console.log("Bubbles tests:"+ scores.length);
console.log("Highest bubble score" +highscore);

//vi 69 la lon nhat nhung co toi 2 69
let bestSolutions = [];
for (let i = 0;i< scores.length; i++) {
    if (scores[i] == highscore)
    {
        bestSolutions.push(i);
    }
}
console.log("Solution with the highest score:"+ bestSolutions);


//cach dung math.max
let i = 0;
let highScore= Math.max(...scores);

///
let numbers = new Array(1,2,3,4,5);
console.log(numbers);

let nums = new Array(5);
console.log(nums);

let arr = Array.of(5);
console.log(arr);//[5]
arr.push(4);
console.log(arr); //[1,2,3,4]

arr.pop();
console.log(arr); //remove top element [1,2,3]

arr.unshift(0);
console.log(arr); //[0,1,2,3]

arr.shift();
console.log(arr);//remove from the beginning // [1,2,3]

console.log(arr.indexOf(2));//1
console.log(arr.indexOf(7));//return -1 , khong co loi mac du k co index 7
console.log(arr.lastIndexOf(2)); //1
console.log(arr.includes(3)); // return:true or false, check if 3 in the array
arr.splice(2,1,10,20); //[1,2,10,20] use to add value
console.log(arr); // [1,2,10,20,3]

let sliced = arr.slice(1,4);
console.log(sliced); // [2,20,20]

let arr1 = [1,2,3];
let arr2 = [4,5,6];

let combined = arr1.concat(arr2);
console.log(combined);n //[1,2,3,4,5,6]

let words = ["Hello","World!"];
crossOriginIsolated.log(words.join(""));


let sentence = ('javascrip is fun')

console.log(wordsArray);

let letters = ["d","a","c","b"];
letters.sort();
crossOriginIsolated.log(letters); // ["a","b","c","d"]

letters.reverse();
console.log(letters);

function add(a,b) {
    return a+b;
}
console.log(add(2,3));

const add = (a,b) => a + b;
const multiply =(a,b) => {
    console.log(`Multiplying ${a} and ${b}`);
    return a*b;
}
console.log(multiply(5,6));

const square = x => x* x;
console.log(square(6));

const greet = () => "Hello, World!";
crossOriginIsolated.log(greet());