let height = Number(prompt("plase enter m:"));
let weight = Number(prompt("plase enter kg:"));
let bmi = (height * height) / weight;
if (bmi <= 18.5) {
  console.log("underweight");
} else if (bmi > 18.5 && bmi < 25) {
  console.log("normal weight");
} else if (bmi > 25 && bmi < 30) {
  console.log("over weight");
} else if (bmi >= 30) {
  console.log("obese");
}
