console.log(`\n "ARRAY METHODS"
yourArray.nameOfTheMethod(argument)
PUSH`);

//PUSH. Not only pushes to an array, but gives a return value too.
console.log(`let myArray = ["Milk", "Sugar", "Water"]`);
let myArray = ["Milk", "Sugar", "Water"];
console.log(`myArray.push("Tea")`);
myArray.push("Tea");
console.log(myArray);
console.log(`You can assign (add =) a new variable and push at the same time: let myNewArray = myArray.push("Biscuits");`);
myNewArray = myArray.push("Biscuits");
console.log(`myArray`, myArray);
console.log(`console.log(myNewArray) will show number of items in Array, while console.log(myArray) (the original array) will list the items in it.`);
console.log(myNewArray, myArray);

//POP. Removes the LAST value in an array. Returns a value to that item, so that the item can be stored in a variable.
console.log(`PUSH
console.log(myArray.pop() shows just the item popped out`, myArray.pop(), myArray);
console.log(`let popArray = myArray.pop() will show the "next" last item`);
let popArray = myArray.pop();
console.log(popArray);
console.log(myArray);
let oneToFive = [1, 2, 3, 4, 5];
console.log(oneToFive, `console.log(oneToFive)`);
let pushed = oneToFive.push(7);
console.log(oneToFive, `console.log(oneToFive) with .push(7)`);
console.log(pushed, `console.log(pushed) shows # of items in new Array, pushed`);
let popped = oneToFive.pop(); console.log(`let popped = oneToFive.pop()`);
console.log(popped, `console.log(poped) shows last item of old (oneToFive) array, popped`);
console.log(oneToFive, `popped, now back to original array oneToFive`);

//SHIFT shifts an item from the start of an Array, and returns its value that can be assigned a new vairable
console.log(`
SHIFT`);
console.log(myArray);
console.log(myArray.shift(), `first item shows from myArray`);
console.log(myArray);

//UNSHIFT shifts an item into the start of the array. Item needs to be stipulated.
console.log(myArray.unshift(), `shows # of items in myArray.unshift(), but notice that as of yet, I've not unshifted anything into it.`);
let myUnshiftedArray = myArray.unshift("Chocolate");
console.log(`let myUnshiftedArray = myArray.unshift()`);
console.log(myUnshiftedArray, `console.log(myUnshiftedArray) shows # items in myUnshiftedArray`);
console.log(myArray);

let oneToFour = [1, 2, 3, 4];
console.log(oneToFour);
let shifted = oneToFour.shift();
console.log(shifted);
console.log(oneToFour);
let unshifted = oneToFour.unshift(5, 1);
console.log(unshifted);
console.log(oneToFour);
console.log(oneToFour.shift());
console.log(oneToFour);
console.log(oneToFour.unshift(0));
console.log(oneToFour);
console.log(oneToFour.push(5));
console.log(oneToFour);
console.log(oneToFour.push(6, 7, 8));
console.log(oneToFour);

//REVERSE
console.log(`\nREVERSE`);
console.log(oneToFour, `log oneToFour`);
console.log(oneToFour.reverse(), `log oneToFour.reverse()`);
console.log(oneToFour, `log oneToFour`);
console.log(`let reverse = oneToFour.reverse()`);
let reverse = oneToFour.reverse();
console.log(reverse, `log reverse`);
console.log(oneToFour, `log oneToFour`);

//SLICE
console.log(`\nSLICE`);
console.log(`let planets = ["Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Venus", "Naptune"]`);
let planets = ["Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Venus", "Neptune"];
console.log(planets.slice(2, 6), planets, `with slice, the original array is unchanged`);
console.log(`let slicedPlanets = planets.slice(2, 6)`);
let slicedPlanets = planets.slice(2, 6);
console.log(slicedPlanets, `notice that 6 is not included.`);

//SORT
console.log(`\nSORT`);
    //sort sorts either alphabetically or ascending numbers, unicode (ie 1, 11, 2, 22, 3...)
let afternoonTea = ["Tea", "Milk", "Scones", "Jam"];
console.log(`let afternoonTea = ["Tea", "Milk", "Scones", "Jam"]`);
console.log(afternoonTea.sort());
console.log(afternoonTea, `sort ALWAYS alters the original array`);
let phoneNumber = [0, 6, 8, 8, 1, 9, 4, 11, 4, 0, 9];
console.log(`let phoneNumber = [0, 6, 8, 8, 1, 9, 4, 11, 4, 0, 9]`);
console.log(phoneNumber.sort());
console.log(phoneNumber, `sort ALWAYS alters the original array`);
    //to stop sort creating a new array, we need to slice then sort
console.log(`let styles = ["music", "tv", "film"]`);
let styles = ["music", "tv", "film"];
console.log(`let sortedStyles = styles.slice().sort()`);
let sortedStyles = styles.slice().sort();
console.log(styles, `styles`);
console.log(sortedStyles, `sortedStyles`);

//FILL
console.log(`\nFILL`);
console.log(styles, `styles`);
console.log(`styles[0] = "cinema"`);
styles[0] = "cinema";
console.log(styles);
styles.push("music");
console.log(styles);

console.log(`console.log(styles.fill("A"))`, styles.fill("A"));
console.log(`console.log(styles.fill("B", 0, 2) fills index 0 upto but not including 2 with a B`, styles.fill("B", 0, 2));

//CONCATENATING ARRAYS
console.log(`\n "CONCATENATING ARRAYS"`);

console.log(`let abc = ["a", "b", "c"]
let xyz = ["x", "y", "z"]
let abcxyz = abc.concat(xyz)
let xyzabc = xyz.concat(abc)`);
let abc = ["a", "b", "c"];
let xyz = ["x", "y", "z"];
let abcxyz = abc.concat(xyz);
let xyzabc = xyz.concat(abc);
console.log(abcxyz, xyzabc);

let firstHalf = [1, 2, 3, 4, 5];
let secondHalf = [6, 7, 8, 9, 10];
let oneToTen = firstHalf.concat(secondHalf);
console.log(oneToTen);

//MULTIDIMENSIONAL ARRAYS
console.log(`\n
"MULTIDIMENSIONAL ARRAYS"`);
console.log(`You can have arrays within arrays. But, their values will be per array, rather than per item, 
thus myArray = [[1, 2, 3],[4, 5, 6]] contains two values, 0 ([1, 2, 3]) and 1 '[4, 5, 6]). 
These two values are subarrays, each with three values. To manipulate these arrays, you need more [] and indices:`);
console.log(`myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]`);
myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(myArray);
console.log(`console.log(myArray[1][2]) will log the third number from the second array 
(as indexing starts at 0), in other words, the number 6`, myArray[1][2]);

console.log(`https://repl.it/@JustinSawyer/JavascriptFundamentalsADCMultiDimArrays1-1, 
https://repl.it/@JustinSawyer/JavascriptFundamentalsADCConcatMultiDim2-1#main.js`);


//PAGE
let membersDogsDAmour = ["Tyla", "Bam Bam", "Jo Dog", "Steve James"];


//push
function pushMembers() {
    document.getElementById("original1").innerText = `"Original lineup was: + membersDogsDAmour";
Original lineup was: ${membersDogsDAmour}
"Original lineup was: + membersDogsDAmour[0] + ", " + membersDogsDAmour[1] + ", " + membersDogsDAmour[2] + and + membersDogsDAmour[3]";
Original lineup was: ${membersDogsDAmour[0]}, ${membersDogsDAmour[1]}, ${membersDogsDAmour[2]} and ${membersDogsDAmour[3]}`;
    document.getElementById("comment1").innerHTML = `array.push() returns # of values in <code>[array]</code> when called:`;
    document.getElementById("push").innerText = `New line up was: + membersDogsDAmour.push("Darryl Bath") members,
consisting of + membersDogsDAmour[0] + ", " + membersDogsDAmour[1] + ", " + membersDogsDAmour[2] + ", " + membersDogsDAmour[3] + and + membersDogsDAmour[4];
New line up was: ${membersDogsDAmour.push("Darryl Bath")} members,
consisting of ${membersDogsDAmour[0]}, ${membersDogsDAmour[1]}, ${membersDogsDAmour[2]}, ${membersDogsDAmour[3]} and ${membersDogsDAmour[4]}`;
}

//pop
function popMembers() {
    let exMember = membersDogsDAmour.pop();
    document.getElementById("pop").innerText = `let exMember = membersDogsDAmour.pop();
exMember only joined for one album, 
then the lineup returned to the original lineup of 
membersDogsDAmour;
exMember;

${exMember} only joined for one album, 
then the lineup returned to the original lineup of 
${membersDogsDAmour}
${exMember}`;
}

//unshift
function unshiftMembers() {
    document.getElementById("original2").innerText = `"Original lineup was: + membersDogsDAmour";
Original lineup was: ${membersDogsDAmour}
"Original lineup was: + membersDogsDAmour[0] + ", " + membersDogsDAmour[1] + ", " + membersDogsDAmour[2] + and + membersDogsDAmour[3]";
Original lineup was: ${membersDogsDAmour[0]}, ${membersDogsDAmour[1]}, ${membersDogsDAmour[2]} and ${membersDogsDAmour[3]}`;
    document.getElementById("comment3").innerHTML = `array.unshift() returns # of values in <code>[array]</code> when called:`;
    document.getElementById("unshift").innerText = `New line up was: + membersDogsDAmour.unshift("Darryl Bath") members,
consisting of + membersDogsDAmour[0] + ", " + membersDogsDAmour[1] + ", " + membersDogsDAmour[2] + ", " + membersDogsDAmour[3] + and + membersDogsDAmour[4];
New line up was: ${membersDogsDAmour.unshift("Darryl Bath")} members,
consisting of ${membersDogsDAmour[0]}, ${membersDogsDAmour[1]}, ${membersDogsDAmour[2]}, ${membersDogsDAmour[3]} and ${membersDogsDAmour[4]}`;
}

//shift
function shiftMembers() {
    let exMember = membersDogsDAmour.shift();
    document.getElementById("shift").innerText = `let exMember = membersDogsDAmour.shift();
exMember only joined for one album, 
then the lineup returned to the original lineup of 
membersDogsDAmour;
exMember;

${exMember} only joined for one album, 
then the lineup returned to the original lineup of 
${membersDogsDAmour};
${exMember}`;
}

//fill
function fillMembers() {
    document.getElementById("fill").innerText = `Original lineup: + membersDogsDAmour;
Original lineup: ${membersDogsDAmour}
Darryl Bath replaced Jo Dog:
membersDogsDAmour.fill("Darryl Bath, 2, 3);

${membersDogsDAmour.fill("Darryl Bath", 2, 3)}

Calling the array returns the array values, not how many variables are in it.
membersDogsDAmour.length;
${membersDogsDAmour.length}`;
}

//slice
function sliceMembers() {
    let foundingMember = membersDogsDAmour.slice(0, 1);
    let otherMembers = membersDogsDAmour.slice(1);
    document.getElementById("slice").innerText = `let foundingMember = membersDogsDAmour.slice(0, 1);
let otherMembers = membersDogsDAmour.slice(1);
foundingMember;
otherMembers;
membersDogsDAmour;

${foundingMember}
${otherMembers}
${membersDogsDAmour}`;
}

//splice
function spliceMembers() {
    let otherMembers = membersDogsDAmour.splice(1);
    document.getElementById("splice").innerText = `REMOVE:
    
let otherMembers = membersDogsDAmour.splice(1);
otherMembers;
membersDogsDAmour;


${otherMembers}
${membersDogsDAmour}

ADD:
membersDogsDAmour.splice(1, 3, "Bam Bam", "Jo Dog", "Steve James")
where the first # tells WHERE to start adding, and the second # tells how many to add.
So, at position 1, add 3:

${membersDogsDAmour.splice(1, 3, "Bam Bam", "Jo Dog", "Steve James")}
${membersDogsDAmour}

splice(x, y, "", "")
x = where to start
y = how many to add/remove. If no "", the assumption is to remove
"", "" = values to be added`;
}

//reverse
function reverseMembers() {
    document.getElementById("reverse").innerText = membersDogsDAmour.reverse();
}

//sort
function sortMembers() {
    let unsortedNumbers = [1, 9, 10, 11, 7, 3, 2, 5, 4, 6, 0, 8];
    document.getElementById("sort").innerText = `ALPHABETICALLY ASCENDING A > Z:
To sort: membersDogsDAmour.sort();
${membersDogsDAmour.sort()}
Now alphabeticallt sorted, but original array has changed.

Remove all but founder member: membersDogsDAmour.splice(0, 3);
${membersDogsDAmour.splice(0, 3)}

Return results of original array: membersDogsDAmour;
${membersDogsDAmour}

Re add other members and return result: membersDogsDAmour.splice(1, 3, "Bam Bam", "Jo Dog", "Steve James");
membersDogsDAmour;
${membersDogsDAmour.splice(1, 3, "Bam Bam", "Jo Dog", "Steve James")}
${membersDogsDAmour}

ALPHABETICALLY DESCENDING Z > A:
membersDogsDAmour.sort().reverse()
${membersDogsDAmour.sort().reverse()}

Remove all but founder member: membersDogsDAmour.splice(1, 3);
${membersDogsDAmour.splice(1, 3)}

Return results of original array: membersDogsDAmour;
${membersDogsDAmour}

Re add other members and return result: membersDogsDAmour.splice(1, 3, "Bam Bam", "Jo Dog", "Steve James");
membersDogsDAmour;
${membersDogsDAmour.splice(1, 3, "Bam Bam", "Jo Dog", "Steve James")}
${membersDogsDAmour}

NUMERICALLY ASCENDING:
let unsortedNumbers = [1, 9, 10, 11, 7, 3, 2, 5, 4, 6, 0, 8];
unsortedNumbers.sort();
${unsortedNumbers.sort()}
unsortedNumbers.sort(function(a, b){return a-b});
${unsortedNumbers.sort(function(a, b){return a-b})}

NUMERICALLY DESCENDING:
let unsortedNumbers = [1, 9, 10, 11, 7, 3, 2, 5, 4, 6, 0, 8];
unsortedNumbers.sort();
${unsortedNumbers.sort()}
unsortedNumbers.sort(function(a, b){return b-a});
${unsortedNumbers.sort(function(a, b){return b-a})}`;
}

//concatenate
function concatMembers() {
    let otherMembers = ["Darryl Bath", "Shere", "Ned Christie"];
    let fullLineup = membersDogsDAmour.concat(otherMembers);
    document.getElementById("concat").innerText = `let otherMembers = ["Darryl Bath", "Shere", "Ned Christie"];
let fullLineup = membersDogsDAmour.concat(otherMembers);

fullLineup;
${fullLineup};

membersDogsDAmour;
${membersDogsDAmour}`;
}

//copyWithin
function copyWithinMembers() {
    document.getElementById("copyW").innerText = `INDEX 0
membersDogsDAmour.copyWithin(0, 0, 1);
${membersDogsDAmour.copyWithin(0, 0, 1)}

membersDogsDAmour.copyWithin(0, 0, 2);
${membersDogsDAmour.copyWithin(0, 0, 2)}

membersDogsDAmour.copyWithin(0, 0, 3);
${membersDogsDAmour.copyWithin(0, 0, 3)}

membersDogsDAmour.copyWithin(0, 0, 4);
${membersDogsDAmour.copyWithin(0, 0, 4)}

membersDogsDAmour.copyWithin(0, 1, 0);
${membersDogsDAmour.copyWithin(0, 1, 0)}

membersDogsDAmour.copyWithin(0, 1, 1);
${membersDogsDAmour.copyWithin(0, 1, 1)}

membersDogsDAmour.copyWithin(0, 1, 2);
${membersDogsDAmour.copyWithin(0, 1, 2)}
Array changed
membersDogsDAmour.splice(0, 1, "Tyla");
${membersDogsDAmour.splice(0, 1, "Tyla")}
membersDogsDAmour;
${membersDogsDAmour}

membersDogsDAmour.copyWithin(0, 1, 3);
${membersDogsDAmour.copyWithin(0, 1, 3)}
Array changed
membersDogsDAmour.splice(0, 2, "Tyla", "Bam Bam");
${membersDogsDAmour.splice(0, 2, "Tyla", "Bam Bam")}
membersDogsDAmour;
${membersDogsDAmour}

membersDogsDAmour.copyWithin(0, 1, 4);
${membersDogsDAmour.copyWithin(0, 1, 4)}
Array changed
membersDogsDAmour.splice(0, 3, "Tyla", "Bam Bam", Jo Dog");
${membersDogsDAmour.splice(0, 3, "Tyla", "Bam Bam", "Jo Dog")}
membersDogsDAmour;
${membersDogsDAmour}

membersDogsDAmour.copyWithin(0, 2, O);
${membersDogsDAmour.copyWithin(0, 2, 0)}

membersDogsDAmour.copyWithin(0, 2, 2);
${membersDogsDAmour.copyWithin(0, 2, 2)}

membersDogsDAmour.copyWithin(0, 2, 3);
${membersDogsDAmour.copyWithin(0, 2, 3)}

membersDogsDAmour.copyWithin(0, 2, 4);
${membersDogsDAmour.copyWithin(0, 2, 4)}
Array changed
membersDogsDAmour.splice(0, 2, "Tyla", "Bam Bam");
${membersDogsDAmour.splice(0, 2, "Tyla", "Bam Bam")}
membersDogsDAmour;
${membersDogsDAmour}

membersDogsDAmour.copyWithin(0, 3, O);
${membersDogsDAmour.copyWithin(0, 3, 0)}

membersDogsDAmour.copyWithin(0, 3, 2);
${membersDogsDAmour.copyWithin(0, 3, 2)}

membersDogsDAmour.copyWithin(0, 3, 3);
${membersDogsDAmour.copyWithin(0, 3, 3)}

membersDogsDAmour.copyWithin(0, 3, 4);
${membersDogsDAmour.copyWithin(0, 3, 4)}
Array changed
membersDogsDAmour.splice(0, 1, "Tyla");
${membersDogsDAmour.splice(0, 1, "Tyla")}
membersDogsDAmour;
${membersDogsDAmour}

membersDogsDAmour.copyWithin(0, 4, O);
${membersDogsDAmour.copyWithin(0, 4, 0)}

membersDogsDAmour.copyWithin(0, 4, 2);
${membersDogsDAmour.copyWithin(0, 4, 2)}

membersDogsDAmour.copyWithin(0, 4, 3);
${membersDogsDAmour.copyWithin(0, 4, 3)}

membersDogsDAmour.copyWithin(0, 4, 4);
${membersDogsDAmour.copyWithin(0, 4, 4)}

INDEX 1
membersDogsDAmour.copyWithin(1, 0, 1);
${membersDogsDAmour.copyWithin(1, 0, 1)}
Array changed
membersDogsDAmour.splice(1, 1, "Bam Bam");
${membersDogsDAmour.splice(1, 1, "Bam Bam")}
membersDogsDAmour;
${membersDogsDAmour}

membersDogsDAmour.copyWithin(1, 0, 2);
${membersDogsDAmour.copyWithin(1, 0, 2)}
Array changed
membersDogsDAmour.splice(1, 2, "Bam Bam", Jo Dog");
${membersDogsDAmour.splice(1, 2, "Bam Bam", "Jo Dog")}
membersDogsDAmour;
${membersDogsDAmour}

membersDogsDAmour.copyWithin(1, 0, 3);
${membersDogsDAmour.copyWithin(1, 0, 3)}
Array changed
membersDogsDAmour.splice(1, 3, "Bam Bam", Jo Dog", "Steve James");
${membersDogsDAmour.splice(1, 3, "Bam Bam", "Jo Dog", "Steve James")}
membersDogsDAmour;
${membersDogsDAmour}

membersDogsDAmour.copyWithin(1, 0, 4);
${membersDogsDAmour.copyWithin(1, 0, 4)}
Array changed
membersDogsDAmour.splice(1, 3, "Bam Bam", Jo Dog", "Steve James");
${membersDogsDAmour.splice(1, 3, "Bam Bam", "Jo Dog", "Steve James")}
membersDogsDAmour;
${membersDogsDAmour}

membersDogsDAmour.copyWithin(1, 1, 0);
${membersDogsDAmour.copyWithin(1, 1, 0)}

membersDogsDAmour.copyWithin(1, 1, 1);
${membersDogsDAmour.copyWithin(1, 1, 1)}

membersDogsDAmour.copyWithin(1, 1, 2);
${membersDogsDAmour.copyWithin(1, 1, 2)}

membersDogsDAmour.copyWithin(1, 1, 3);
${membersDogsDAmour.copyWithin(1, 1, 3)}

membersDogsDAmour.copyWithin(1, 1, 4);
${membersDogsDAmour.copyWithin(1, 1, 4)}

membersDogsDAmour.copyWithin(1, 2, O);
${membersDogsDAmour.copyWithin(1, 2, 0)}

membersDogsDAmour.copyWithin(1, 2, 2);
${membersDogsDAmour.copyWithin(1, 2, 2)}

membersDogsDAmour.copyWithin(1, 2, 3);
${membersDogsDAmour.copyWithin(1, 2, 3)}
Array changed
membersDogsDAmour.splice(1, 1, "Bam Bam");
${membersDogsDAmour.splice(1, 1, "Bam Bam")}
membersDogsDAmour;
${membersDogsDAmour}

membersDogsDAmour.copyWithin(1, 2, 4);
${membersDogsDAmour.copyWithin(1, 2, 4)}
Array changed
membersDogsDAmour.splice(1, 2, "Bam Bam", "Jo Dog");
${membersDogsDAmour.splice(1, 2, "Bam Bam", "Jo Dog")}
membersDogsDAmour;
${membersDogsDAmour}

membersDogsDAmour.copyWithin(1, 3, O);
${membersDogsDAmour.copyWithin(1, 3, 0)}

membersDogsDAmour.copyWithin(1, 3, 2);
${membersDogsDAmour.copyWithin(1, 3, 2)}

membersDogsDAmour.copyWithin(1, 3, 3);
${membersDogsDAmour.copyWithin(1, 3, 3)}

membersDogsDAmour.copyWithin(1, 3, 4);
${membersDogsDAmour.copyWithin(1, 3, 4)}
Array changed
membersDogsDAmour.splice(1, 1, "Bam Bam");
${membersDogsDAmour.splice(1, 1, "Bam Bam")}
membersDogsDAmour;
${membersDogsDAmour}

membersDogsDAmour.copyWithin(1, 4, O);
${membersDogsDAmour.copyWithin(1, 4, 0)}

membersDogsDAmour.copyWithin(1, 4, 2);
${membersDogsDAmour.copyWithin(1, 4, 2)}

membersDogsDAmour.copyWithin(1, 4, 3);
${membersDogsDAmour.copyWithin(1, 4, 3)}

membersDogsDAmour.copyWithin(1, 4, 4);
${membersDogsDAmour.copyWithin(1, 4, 4)}

INDEX 2
membersDogsDAmour.copyWithin(2, 0, 1);
${membersDogsDAmour.copyWithin(2, 0, 1)}
Array changed
membersDogsDAmour.splice(2, 1, "Jo Dog");
${membersDogsDAmour.splice(2, 1, "Jo Dog")}
membersDogsDAmour;
${membersDogsDAmour}

membersDogsDAmour.copyWithin(2, 0, 2);
${membersDogsDAmour.copyWithin(2, 0, 2)}
Array changed
membersDogsDAmour.splice(2, 2, "Jo Dog", "Steve James");
${membersDogsDAmour.splice(2, 2, "Jo Dog", "Steve James")}
membersDogsDAmour;
${membersDogsDAmour}

membersDogsDAmour.copyWithin(2, 0, 3);
${membersDogsDAmour.copyWithin(2, 0, 3)}
Array changed
membersDogsDAmour.splice(2, 2, "Jo Dog", "Steve James");
${membersDogsDAmour.splice(2, 2, "Jo Dog", "Steve James")}
membersDogsDAmour;
${membersDogsDAmour}

membersDogsDAmour.copyWithin(2, 0, 4);
${membersDogsDAmour.copyWithin(2, 0, 4)}
Array changed
membersDogsDAmour.splice(2, 2, "Jo Dog", "Steve James");
${membersDogsDAmour.splice(2, 2, "Jo Dog", "Steve James")}
membersDogsDAmour;
${membersDogsDAmour}

membersDogsDAmour.copyWithin(2, 1, 0);
${membersDogsDAmour.copyWithin(2, 1, 0)}

membersDogsDAmour.copyWithin(2, 1, 1);
${membersDogsDAmour.copyWithin(2, 1, 1)}

membersDogsDAmour.copyWithin(2, 1, 2);
${membersDogsDAmour.copyWithin(2, 1, 2)}
Array changed
membersDogsDAmour.splice(2, 1, "Jo Dog");
${membersDogsDAmour.splice(2, 1, "Jo Dog")}
membersDogsDAmour;
${membersDogsDAmour}

membersDogsDAmour.copyWithin(2, 1, 3);
${membersDogsDAmour.copyWithin(2, 1, 3)}
Array changed
membersDogsDAmour.splice(2, 2, "Jo Dog", "Steve James");
${membersDogsDAmour.splice(2, 2, "Jo Dog", "Steve James")}
membersDogsDAmour;
${membersDogsDAmour}

membersDogsDAmour.copyWithin(2, 1, 4);
${membersDogsDAmour.copyWithin(2, 1, 4)}
Array changed
membersDogsDAmour.splice(2, 2, "Jo Dog", "Steve James");
${membersDogsDAmour.splice(2, 2, "Jo Dog", "Steve James")}
membersDogsDAmour;
${membersDogsDAmour}

membersDogsDAmour.copyWithin(2, 2, O);
${membersDogsDAmour.copyWithin(2, 2, 0)}

membersDogsDAmour.copyWithin(2, 2, 2);
${membersDogsDAmour.copyWithin(2, 2, 2)}

membersDogsDAmour.copyWithin(2, 2, 3);
${membersDogsDAmour.copyWithin(2, 2, 3)}

membersDogsDAmour.copyWithin(2, 2, 4);
${membersDogsDAmour.copyWithin(2, 2, 4)}

membersDogsDAmour.copyWithin(2, 3, O);
${membersDogsDAmour.copyWithin(2, 3, 0)}

membersDogsDAmour.copyWithin(2, 3, 2);
${membersDogsDAmour.copyWithin(2, 3, 2)}

membersDogsDAmour.copyWithin(2, 3, 3);
${membersDogsDAmour.copyWithin(2, 3, 3)}

membersDogsDAmour.copyWithin(2, 3, 4);
${membersDogsDAmour.copyWithin(2, 3, 4)}
Array changed
membersDogsDAmour.splice(2, 1, "Jo Dog");
${membersDogsDAmour.splice(2, 1, "Jo Dog")}
membersDogsDAmour;
${membersDogsDAmour}

membersDogsDAmour.copyWithin(2, 4, O);
${membersDogsDAmour.copyWithin(2, 4, 0)}

membersDogsDAmour.copyWithin(2, 4, 2);
${membersDogsDAmour.copyWithin(2, 4, 2)}

membersDogsDAmour.copyWithin(2, 4, 3);
${membersDogsDAmour.copyWithin(2, 4, 3)}

membersDogsDAmour.copyWithin(2, 4, 4);
${membersDogsDAmour.copyWithin(2, 4, 4)}

INDEX 3
membersDogsDAmour.copyWithin(3, 0, 1);
${membersDogsDAmour.copyWithin(3, 0, 1)}
Array changed
membersDogsDAmour.splice(3, 1, "Steve James");
${membersDogsDAmour.splice(3, 1, "Steve James")}
membersDogsDAmour;
${membersDogsDAmour}

membersDogsDAmour.copyWithin(3, 0, 2);
${membersDogsDAmour.copyWithin(3, 0, 2)}
Array changed
membersDogsDAmour.splice(3, 1, "Steve James");
${membersDogsDAmour.splice(3, 1, "Steve James")}
membersDogsDAmour;
${membersDogsDAmour}

membersDogsDAmour.copyWithin(3, 0, 3);
${membersDogsDAmour.copyWithin(3, 0, 3)}
Array changed
membersDogsDAmour.splice(3, 1, "Steve James");
${membersDogsDAmour.splice(3, 1, "Steve James")}
membersDogsDAmour;
${membersDogsDAmour}

membersDogsDAmour.copyWithin(3, 0, 4);
${membersDogsDAmour.copyWithin(3, 0, 4)}
Array changed
membersDogsDAmour.splice(3, 1, "Steve James");
${membersDogsDAmour.splice(3, 1, "Steve James")}
membersDogsDAmour;
${membersDogsDAmour}

membersDogsDAmour.copyWithin(3, 1, 0);
${membersDogsDAmour.copyWithin(3, 1, 0)}

membersDogsDAmour.copyWithin(3, 1, 1);
${membersDogsDAmour.copyWithin(3, 1, 1)}

membersDogsDAmour.copyWithin(3, 1, 2);
${membersDogsDAmour.copyWithin(3, 1, 2)}
Array changed
membersDogsDAmour.splice(3, 1, "Steve James");
${membersDogsDAmour.splice(3, 1, "Steve James")}
membersDogsDAmour;
${membersDogsDAmour}

membersDogsDAmour.copyWithin(3, 1, 3);
${membersDogsDAmour.copyWithin(3, 1, 3)}
Array changed
membersDogsDAmour.splice(3, 1, "Steve James");
${membersDogsDAmour.splice(3, 1, "Steve James")}
membersDogsDAmour;
${membersDogsDAmour}

membersDogsDAmour.copyWithin(3, 1, 4);
${membersDogsDAmour.copyWithin(3, 1, 4)}
Array changed
membersDogsDAmour.splice(3, 1, "Steve James");
${membersDogsDAmour.splice(3, 1, "Steve James")}
membersDogsDAmour;
${membersDogsDAmour}

membersDogsDAmour.copyWithin(3, 2, O);
${membersDogsDAmour.copyWithin(3, 2, 0)}
Array changed
membersDogsDAmour.splice(3, 1, "Steve James");
${membersDogsDAmour.splice(3, 1, "Steve James")}
membersDogsDAmour;
${membersDogsDAmour}

membersDogsDAmour.copyWithin(3, 2, 2);
${membersDogsDAmour.copyWithin(3, 2, 2)}
Array changed
membersDogsDAmour.splice(3, 1, "Steve James");
${membersDogsDAmour.splice(3, 1, "Steve James")}
membersDogsDAmour;
${membersDogsDAmour}

membersDogsDAmour.copyWithin(3, 2, 3);
${membersDogsDAmour.copyWithin(3, 2, 3)}
Array changed
membersDogsDAmour.splice(3, 1, "Steve James");
${membersDogsDAmour.splice(3, 1, "Steve James")}
membersDogsDAmour;
${membersDogsDAmour}

membersDogsDAmour.copyWithin(3, 2, 4);
${membersDogsDAmour.copyWithin(3, 2, 4)}
Array changed
membersDogsDAmour.splice(3, 1, "Steve James");
${membersDogsDAmour.splice(3, 1, "Steve James")}
membersDogsDAmour;
${membersDogsDAmour}

membersDogsDAmour.copyWithin(3, 3, O);
${membersDogsDAmour.copyWithin(3, 3, 0)}

membersDogsDAmour.copyWithin(3, 3, 2);
${membersDogsDAmour.copyWithin(3, 3, 2)}

membersDogsDAmour.copyWithin(3, 3, 3);
${membersDogsDAmour.copyWithin(3, 3, 3)}

membersDogsDAmour.copyWithin(3, 3, 4);
${membersDogsDAmour.copyWithin(3, 3, 4)}

membersDogsDAmour.copyWithin(3, 4, O);
${membersDogsDAmour.copyWithin(3, 4, 0)}

membersDogsDAmour.copyWithin(3, 4, 2);
${membersDogsDAmour.copyWithin(3, 4, 2)}

membersDogsDAmour.copyWithin(3, 4, 3);
${membersDogsDAmour.copyWithin(3, 4, 3)}

membersDogsDAmour.copyWithin(3, 4, 4);
${membersDogsDAmour.copyWithin(3, 4, 4)}
`;
}
