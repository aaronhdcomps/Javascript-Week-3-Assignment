// 1. Write code to display a triangle in the console that looks similar to the following.
// You should use a loop to accomplish this.
// #
// ##
// ###
// ####
// ###
// ##
// #
let myString = "#";
for (let i = 1; i <= 3; i++) {
    console.log(myString);
    myString += "#";    
}
for (let i = 4; i > 0; i--) {
    console.log(myString);
    myString = myString.slice(0, -1);    
}