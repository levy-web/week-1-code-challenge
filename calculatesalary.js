const prompt = require("prompt-sync")();
//prompts entry of user information

let grossSalary = +prompt("Enter your salary amount:")
let contribitionBenefit = +prompt("Contribution Benefit:")
let NHIFDeductions= +prompt("Enter NHIFDeduction:")
let NSSFDeductions= +prompt("Enter NSSFDeduction:")


//calculates the taxable income
//and calculate each individuals monthly income depending on their taxable income 
function calcPaye(){
    let taxableIncome = grossSalary - calcTotalDeductions()
    console.log(taxableIncome)
    switch(true){
        case (taxableIncome<24000):
            console.log(taxableIncome)
            paye = taxableIncome * 0.01;
            console.log(paye)
            break;

        case (taxableIncome>=24001 && taxableIncome<= 32333):
            paye = taxableIncome * 0.25;
            break;

        case (taxableIncome>32333):
            paye = taxableIncome * 0.30;
            break;  
    }return paye
}
//calculates the total to be deducted from benefits, nhif, nssf
//and other deductions 
function calcTotalDeductions(){    

    let personalRelief = 2400;    
    let total = (NHIFDeductions + NSSFDeductions + personalRelief + contribitionBenefit)
    return total    
    
}

//deducts the deductions and tax
//and returns the net pay
function calcNet(){
    let netPay = grossSalary - calcTotalDeductions() - calcPaye()
    return `your netsalary is ksh: ${netPay}`
}


console.log(calcNet())