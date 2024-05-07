function maxProfit(timeUnit) {
  let temp = timeUnit;
  const solution = { T: 0, P: 0, C: 0 };
  let maximumEarning = 0;

  const propertyType = [
    {
      propertyName: "Theatre",
      earningAfterCompletion: 1500,
      completionTime: 5,
    },
    { propertyName: "Pub", 
      earningAfterCompletion: 1000,
      completionTime: 4 },
    {
      propertyName: "Commercial Park",
      earningAfterCompletion: 3000,
      completionTime: 10,
    },
  ];

  calculationPub(temp);
  calculationPark(temp);
  calculationTheater(temp);

  function calculationPub(tempTime) {
    let count = Math.floor(tempTime / propertyType[1].completionTime);
    let earnings = 0;

    for (let i = 0; i < count; i++) {
      tempTime -= propertyType[1].completionTime;
      earnings += tempTime * propertyType[1].earningAfterCompletion;
    }

    if (earnings > maximumEarning) {
      maximumEarning = earnings;
      solution.P = count;
      solution.T = 0;
      solution.C = 0;
    }
  }

  function calculationPark(tempTime) {
    let count = Math.floor(tempTime / propertyType[2].completionTime);
    let earnings = 0;

    for (let i = 0; i < count; i++) {
      tempTime -= propertyType[2].completionTime;
      earnings += tempTime * propertyType[2].earningAfterCompletion;
    }

    if (earnings > maximumEarning) {
      maximumEarning = earnings;
      solution.C = count;
      solution.T = 0;
      solution.P = 0;
    }
  }

  function calculationTheater(tempTime) {
    let count = Math.floor(tempTime / propertyType[0].completionTime);
    let earnings = 0;

    for (let i = 0; i < count; i++) {
      tempTime -= propertyType[0].completionTime;
      earnings += tempTime * propertyType[0].earningAfterCompletion;
    }

    if (earnings > maximumEarning) {
      maximumEarning = earnings;
      solution.T = count;
      solution.C = 0;
      solution.P = 0;
    }
  }

  return { maximumEarning, solution };
}

let timeUnit = 7;

let result = maxProfit(timeUnit);

console.log(`Time Unit: ${timeUnit}`);
console.log(`Earnings: $${result.maximumEarning}`);
console.log(`Solutions: T:${result.solution.T} P:${result.solution.P} C:${result.solution.C}`);
