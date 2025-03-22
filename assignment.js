//VARIABLE MANIPULATION



//so here i declared the variable
let TheString = "string";
let Thenumber = 17;
let TheBoolean = true;
let TheArray = [1, 2, 3, 4, 5];

//Here is how i logged the variables into the console
console.log ("String", TheString)
console.log ('number', Thenumber)
console.log ("Boolean", TheBoolean)
console.log ("Array", TheArray)

//Here is the conversion types
//conversion 1: string to array
let TheStringtoArray = TheString.split("") //I used the split("") function for this
//conversion 2: number to string
Thenumber.toString() //i used the .tostring function for this




//CONDITIONAL STATEMENTS AND CONTROL FLOW

function checkAge(age){
    if(isNaN(age) || age < 0){
        return "invalid input."; //this makes sure only integers are considered. NaN means "not a number"
}
switch (true){
    case age < 18:
    return "You are a minor";
    break;
    case age >= 18 && age < 65:
        return "You are an adult";
    break;
        case age > 65:
            return "You are a senior citizen"
}
}

console.log(checkAge(20));


//FUNCTIONS AND SCOPE
function calculatorArea(shape, dimension1, dimension2){
    let area;


    switch (shape.toLowerCase()){  //I used .lowercase to make sure all input for this is converted to lower case to help the computer not get confused incase upper case is used.
        case "rectangle":
            area = dimension1 * dimension2;
            break; //<---this is what i used to stop execution after the matching case has been found by the console

        case "circle":
            area = Math.PI * dimension1 * dimension2;
            break;

        case "triangle":
            area = (dimension1 * dimension2) / 2;
            break;

        default:
            return "Invalids chape"

            
    }
    console.log("This is inside the function", area)
    return area;

}

console.log(calculatorArea("rectangle", 10, 10))
 console.log("This one is outside the function", area)//it will show an error of course.



