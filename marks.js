const prompt = require("prompt-sync")();

//prompts individual to input their marks
let marks  = +prompt("Enter your marks:")

//compares the marks entered to the grade ranks
//console logs the grade of individual
//A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40

if(marks>=80 && marks<=100){
    console.log("A")
}
else if(marks>=60 && marks<=79){
    console.log("B")
}
else if(marks>=50 && marks<=59){
    console.log("C")
}
else if(marks>=40 && marks<=49){
    console.log("D")
}
else if(marks>=0 && marks<=39){
    console.log("E")
}else console.log("Invalid!!!, Marks should be between 0 and 100")