// Constants
const timeUnit = 13;
const theaterBuildTime = 5;
const pubBuildTime = 4;
const commercialParkBuildTime = 10;
const theaterEarning = 1500;
const pubEarning = 1000;
const commercialParkEarning = 3000;

// Main
const earningCombinations = generateEarningCombinations();
printMaxEarnings(earningCombinations);

// Find maximum possible combinations and their earnings
function generateEarningCombinations() {
  const maxTheater = Math.floor(timeUnit / theaterBuildTime);
  const maxPub = Math.floor(timeUnit / pubBuildTime);
  const maxCommercial = Math.floor(timeUnit / commercialParkBuildTime);

  const combinations = [];

  for (let theaterQty = 0; theaterQty <= maxTheater; theaterQty++) {
    for (let pubQty = 0; pubQty <= maxPub; pubQty++) {
      for (
        let commercialParkQty = 0;
        commercialParkQty <= maxCommercial;
        commercialParkQty++
      ) {
        const totalBuildTime =
          theaterBuildTime * theaterQty +
          pubBuildTime * pubQty +
          commercialParkBuildTime * commercialParkQty;
        if (totalBuildTime <= timeUnit) {
          const earnings = calculateEarnings(
            commercialParkQty,
            theaterQty,
            pubQty,
            timeUnit
          );
          combinations.push({
            E: earnings,
            C: commercialParkQty,
            T: theaterQty,
            P: pubQty,
          });
        } else break;
      }
    }
  }

  return combinations;
}

// Function to calculate earnings
function calculateEarnings(comParkCount, theatreCount, pubCount, totalTime) {
  let totalEarning = 0;

  // Commercial park earnings
  for (let i = 1; i <= comParkCount; i++) {
    totalEarning +=
      commercialParkEarning * (totalTime - commercialParkBuildTime * i);
  }

  // Theater earnings
  for (let i = 1; i <= theatreCount; i++) {
    totalEarning +=
      theaterEarning *
      (totalTime -
        (commercialParkBuildTime * comParkCount + theaterBuildTime * i));
  }

  // Pub earnings
  for (let i = 1; i <= pubCount; i++) {
    totalEarning +=
      pubEarning *
      (totalTime -
        (commercialParkBuildTime * comParkCount +
          theaterBuildTime * theatreCount +
          pubBuildTime * i));
  }

  return totalEarning;
}

// Print combinations with maximum earnings
function printMaxEarnings(combinations) {
  combinations.sort((a, b) => b.E - a.E);
  const maxEarning = combinations[0].E;
  console.log(`Time Unit: ${timeUnit}`);
  console.log(`Earnings: $${maxEarning}\nSolutions`);

  for (const [index, combination] of combinations.entries()) {
    if (combination.E === maxEarning) {
      console.log(
        `   ${index + 1}. T:${combination.T} P:${combination.P} C:${
          combination.C
        }`
      );
    } else {
      break;
    }
  }
}
// Constants
const timeUnit = 13;
const theaterBuildTime = 5;
const pubBuildTime = 4;
const commercialParkBuildTime = 10;
const theaterEarning = 1500;
const pubEarning = 1000;
const commercialParkEarning = 3000;

// Main
const earningCombinations = generateEarningCombinations();
printMaxEarnings(earningCombinations);

// Find maximum possible combinations and their earnings
function generateEarningCombinations() {
  const maxTheater = Math.floor(timeUnit / theaterBuildTime);
  const maxPub = Math.floor(timeUnit / pubBuildTime);
  const maxCommercial = Math.floor(timeUnit / commercialParkBuildTime);

  const combinations = [];

  for (let theaterQty = 0; theaterQty <= maxTheater; theaterQty++) {
    for (let pubQty = 0; pubQty <= maxPub; pubQty++) {
      for (
        let commercialParkQty = 0;
        commercialParkQty <= maxCommercial;
        commercialParkQty++
      ) {
        const totalBuildTime =
          theaterBuildTime * theaterQty +
          pubBuildTime * pubQty +
          commercialParkBuildTime * commercialParkQty;
        if (totalBuildTime <= timeUnit) {
          const earnings = calculateEarnings(
            commercialParkQty,
            theaterQty,
            pubQty,
            timeUnit
          );
          combinations.push({
            E: earnings,
            C: commercialParkQty,
            T: theaterQty,
            P: pubQty,
          });
        } else break;
      }
    }
  }

  return combinations;
}

// Function to calculate earnings
function calculateEarnings(comParkCount, theatreCount, pubCount, totalTime) {
  let totalEarning = 0;

  // Commercial park earnings
  for (let i = 1; i <= comParkCount; i++) {
    totalEarning +=
      commercialParkEarning * (totalTime - commercialParkBuildTime * i);
  }

  // Theater earnings
  for (let i = 1; i <= theatreCount; i++) {
    totalEarning +=
      theaterEarning *
      (totalTime -
        (commercialParkBuildTime * comParkCount + theaterBuildTime * i));
  }

  // Pub earnings
  for (let i = 1; i <= pubCount; i++) {
    totalEarning +=
      pubEarning *
      (totalTime -
        (commercialParkBuildTime * comParkCount +
          theaterBuildTime * theatreCount +
          pubBuildTime * i));
  }

  return totalEarning;
}

// Print combinations with maximum earnings
function printMaxEarnings(combinations) {
  combinations.sort((a, b) => b.E - a.E);
  const maxEarning = combinations[0].E;
  console.log(`Time Unit: ${timeUnit}`);
  console.log(`Earnings: $${maxEarning}\nSolutions`);

  for (const [index, combination] of combinations.entries()) {
    if (combination.E === maxEarning) {
      console.log(
        `   ${index + 1}. T:${combination.T} P:${combination.P} C:${
          combination.C
        }`
      );
    } else {
      break;
    }
  }
}
