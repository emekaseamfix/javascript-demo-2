

function myFunction1a() {
    document.getElementById("demo1a").innerHTML = Boolean(7 > 9);
  }

  function myFunction1b() {
    document.getElementById("demo1b").innerHTML = 10 > 9;
  }

  function myFunction1c() {
    var x = 0;
    document.getElementById("demo1c").innerHTML = Boolean(x);
  }















  function myFunction2a() {
    var age, voteable;
    age = document.getElementById("age").value;
    voteable = (age < 18) ? "Too young":"Old enough";
    document.getElementById("demo2a").innerHTML = voteable + " to vote.";
  }














  var day;
  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case  6:
      day = "Saturday";
  }
  document.getElementById("demo3a").innerHTML = "Today is " + day;


  var text;
  switch (new Date().getDay()) {
    case 6:
      text = "Today is Saturday";
      break;
    case 0:
      text = "Today is Sunday";
      break;
    default:
      text = "Looking forward to the Weekend";
  }
  document.getElementById("demo3b").innerHTML = text;


  var text;
  switch (new Date().getDay()) {
    case 4:
    case 5:
      text = "Soon it is Weekend";
      break;
    case 0:
    case 6:
      text = "It is Weekend";
      break;
    default:
      text = "Looking forward to the Weekend";
  }
  document.getElementById("demo3c").innerHTML = text;


  var x = "8";
  switch (x) {
    case 0:
      text = "Off";
      break;
    case 1:
      text = "On";
      break;
    default:
      text = "No value found";
  }
  document.getElementById("demo3d").innerHTML = text;












































  var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
  var text = "";
  var i;
  for (i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
  }
  document.getElementById("demo4a").innerHTML = text;

var txt = "";
var person = {fname:"John", lname:"Doe", age:25}; 
var x;
for (x in person) {
  txt += person[x] + " ";
}
document.getElementById("demo4b").innerHTML = txt;

var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}
document.getElementById("demo4c").innerHTML = text;

var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3 || i === 6 || i === 9 ) { continue; }
  text += "The number is " + i + "<br>";
}
document.getElementById("demo4d").innerHTML = text;


var cars = ["BMW", "Volvo", "Saab", "Ford"];
var text = "";

list: {
  text += cars[0] + "<br>"; 
  text += cars[1] + "<br>"; 
  break list;
  text += cars[2] + "<br>"; 
  text += cars[3] + "<br>"; 
}

document.getElementById("demo4e").innerHTML = text;


















var str = "Visit W3Schools!"; 
var n = str.search("W3Schools");
document.getElementById("demo5a").innerHTML = n;

function myFunction5b() {
  var str = document.getElementById("demo5b").innerHTML; 
  var txt = str.replace("Microsoft","W3Schools");
  document.getElementById("demo5b").innerHTML = txt;
}












try {
  adddlert("Welcome guest!");
}
catch(err) {
  document.getElementById("demo6a").innerHTML = err.message;
}
 
function myFunction6b() {
  var message, x;
  message = document.getElementById("demo6b");
  message.innerHTML = "";
  x = document.getElementById("demo6bb").value;
  try { 
    if(x == "")  throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5)  throw "too low";
    if(x > 10)   throw "too high";
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
  }
}

function myFunction() {
  var message, x;
  message = document.getElementById("demo6c");
  message.innerHTML = "";
  x = document.getElementById("demo6cc").value;
  try { 
    if(x == "")  throw "is empty";
    if(isNaN(x)) throw "is not a number";
    x = Number(x);
    if(x > 10)   throw "is too high";
    if(x < 5)  throw "is too low";
  }
  catch(err) {
    message.innerHTML = "Input " + err;
  }
  finally {
    document.getElementById("demo6cc").value = "put a number";
  }
}























