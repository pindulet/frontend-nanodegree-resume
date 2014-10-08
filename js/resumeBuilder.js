/*
$("#main").append("Kristian Pinholt");


var awesomeThoughts = "Jeg er Kristian og jeg er for sej";
console.log(awesomeThoughts);

var funThoughts =
	awesomeThoughts.replace("sej","sjov");
	
$("#main").append(funThoughts);
*/

// Data
var name = "Kristian Pinholt";
var role = "Digital ekspert";

var formattedName =
	HTMLheaderName.replace("%data%", name);
	
var formattedRole =
	HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);	

