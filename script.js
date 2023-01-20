function printName(name = "World") {
  console.log(`Hello ${name}!`);
  console.log();
}
printName();

const madlib = (theName, subject) => {
  return theName + "'s favorite subject in school is " + subject;
};
console.log(madlib("Anushka", "Art"));

const tipAmount = (bill, serviceLvl, people) => {
  if (serviceLvl == "good") {
    let tip = bill * 0.2;
    let final = bill + tip;
    let total = final / people;
    return total;
  } else if (serviceLvl == "fair") {
    let tip = bill * 0.15;
    let final = bill + tip;
    let total = final / people;
    return total;
  } else if (serviceLvl == "poor") {
    let tip = bill * 0.1;
    let final = bill + tip;
    let total = final / people;
    return total;
  }
};
let result = tipAmount(5000, "poor", 2);
console.log(result);
