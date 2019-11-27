var ninja = {name:"kevin"}
// object literal 

var ninjaArray = new Array;

ninjaArray.push = ({weapon:"katana"});
// Adds a new object to an array

ninja.atkData = {element:"water"}
// Assigns a new object as a property of another object

console.log(ninja)

console.log(ninjaArray)


function useless(ninjaCallback) {
    return ninjaCallback();
  }


  var text = "Domo arigato!";
  report("Before defining functions");
  
  function useless(ninjaCallback) {
    report("In useless function");
    return ninjaCallback();
  }
  
  function getText() {
    report("In getText function");
    return text;
  }
  
  report("Before making all the calls");
  
  assert(useless(getText) === text,
         "The useless function works! " + text);
  
  report("After the calls have been made");
  
  
  