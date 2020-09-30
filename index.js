//
//var age = prompt("enter your age");
//if(age > 15)
//console.log (please come);
//else (
   // console.log(you can go)
var userAge = prompt("your age?");
var permit= prompt("you must have a parent permit, so do you have permit?");
var adault = prompt("CNIC must required. do you have your CNIC");
if (userAge >= "15" && permit == "yes")
console.log("you can participate")
else if(userAge > 15 && adault == "yes")
console.log("yes.. you can participate THANK YOU")
else{
    console.log("sorry you are not allwed")
}