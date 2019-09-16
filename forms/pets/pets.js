let petNames = ["Darcy","Jack","Jerry","Marty","Vito","Vinny","Riley","Saddie","Marge","Sam"];

//Remove Vinny from the array
var removeVinny = petNames.splice(5,1);
console.log(petNames);

//Remove Marty from the array
var removeMarty = petNames.splice(3,1);
console.log(petNames);

//Add Nancy to the front of the array
var addNancy = petNames.unshift("Nancy");
console.log(petNames);

//Add my name at the end of the array
var addMyName = petNames.push("Maxime");
console.log(petNames);

//Find index of Riley 
var findIndexRiley = petNames.indexOf("Riley");
console.log(petNames);

//Find index of Cindy
var findIndexCindy = petNames.indexOf("Cindy");
console.log(petNames);

//Creation of withMarmaduke variable
var withMarmaduke = (petNames + " ,Marmaduke");
console.log(withMarmaduke);