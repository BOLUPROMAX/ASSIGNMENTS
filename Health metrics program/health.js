let personName = "boluwatife Jimoh";
let weightKg = 80;
let heightM = 1.80;

let heightSquared = heightM * heightM;

let bmi = weightKg / heightSquared;

let isUnderweight = bmi < 18.5;

let isNormalWeight = bmi >= 18.5 && bmi < 25;

let isOverWeight = bmi >= 25;

let isHighRisk = isOverWeight || weightKg > 90;

console.log("Name:", personName);
console.log("BMI:", bmi.toFixed(2));
console.log("Underweight:", isUnderweight);
console.log("Normal Weight:", isNormalWeight);
console.log("Overweight:", isOverWeight);
console.log("High Risk Alert:", isHighRisk);
