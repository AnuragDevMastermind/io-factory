function maxProfit(timeUnit) {
  const propertyType = [
    { propertyName: "Theatre", earningAfterCompletion: 1500, completionTime: 5 },
    { propertyName: "Pub", earningAfterCompletion: 1000, completionTime: 4 },
    { propertyName: "Commercial Park", earningAfterCompletion: 3000, completionTime: 10 },
  ];

  let maximumEarning = 0;
  const solution = { T: 0, P: 0, C: 0 };

  propertyType.forEach((property, index) => {
    const count = Math.floor(timeUnit / property.completionTime);
    let earnings = 0;

    for (let i = 0; i < count; i++) {
      timeUnit -= property.completionTime;
      earnings += timeUnit * property.earningAfterCompletion;
    }

    if (earnings > maximumEarning) {
      maximumEarning = earnings;
      solution[property.propertyName.charAt(0)] = count;
    }
  });

  return { maximumEarning, solution };
}

const timeUnit = 13;
const result = maxProfit(timeUnit);

console.log(`Time Unit: ${timeUnit}`);
console.log(`Earnings: $${result.maximumEarning}`);
console.log(`Solutions: T:${result.solution.T} P:${result.solution.P} C:${result.solution.C}`);
