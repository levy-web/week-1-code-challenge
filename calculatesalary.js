const prompt = require("prompt-sync")();
//function tzhat prompts individuals to input their pay
//has a fixed monthly personal relief 
// calculates total amount to be deducted before calculating the tax

function calcSalary(personalRelief, netSalary,totalDeductions, contribitionBenefit,NHIFDeductions, NSSFDeductions, grossSalary, taxableIncome){
    let paye;
    personalRelief = +2400;
    grossSalary = +prompt("Enter your salary amount:")
    contribitionBenefit = +prompt("Contribution Benefit:")
    NHIFDeductions= +prompt("Enter NHIFDeduction:")
    NSSFDeductions= +prompt("Enter NSSFDeduction:")  

    //calculates the amount that is taxable

    
    totalDeductions = (NHIFDeductions + NSSFDeductions + personalRelief + contribitionBenefit);
    taxableIncome = grossSalary - totalDeductions;

    console.log(`your taxableIncome is ksh: ${taxableIncome}`)
    console.log(`your totalDeductions is ksh: ${totalDeductions}`)

    //calculating monthly paye(tax) 
    //depending on individuals income

    switch(true){
        case (taxableIncome<24000):
            paye = taxableIncome * 0.01;
            break;

        case (taxableIncome>=24001 && taxableIncome<= 32333):
            paye = taxableIncome * 0.25;
            break;

        case (taxableIncome>32333):
            paye = taxableIncome * 0.30;
            break;  

    }
    //deducts the tax(paye) and then returns the netsalary

    netSalary = (parseInt (taxableIncome - paye));
    console.log(`your netSalary is ksh: ${netSalary}`)
    

}
calcSalary()