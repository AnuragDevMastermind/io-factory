const properties = [
  { name: "Commercial Park", shortName: "C", buildTime: 10, earning: 3000 },
  { name: "Pub", shortName: "P", buildTime: 4, earning: 1000 },
  { name: "Theater", shortName: "T", buildTime: 5, earning: 1500 },
]
const totalUnit = 7

const combination = []

sortProperties(properties, totalUnit)
generateCombinations(properties, totalUnit)
printMaxEarnings(combination, properties, totalUnit)


/**
 * Sorts the properties based on their earning per unit time.
 * @param {Array} properties Array of property objects.
 * @param {number} totalUnit Total time units available.
 */
function sortProperties(properties, totalUnit) {
  properties.forEach((property) => {
    property.maxCount = Math.floor(totalUnit / property.buildTime)
  })

  properties.sort((a, b) => {
    const ratioA = a.earning / a.buildTime
    const ratioB = b.earning / b.buildTime
    return ratioB - ratioA
  })
}

/**
 * Generates all possible combinations of properties.
 * @param {Array} properties Array of property objects.
 */
function generateCombinations(properties) {
  const buildTimes = properties.map(property => Math.floor(totalUnit / property.buildTime));

  generateCombinationsHelper(buildTimes, buildTimes)
}

/**
 * Helper function to generate combinations recursively.
 * @param {Array} pArr Array representing current combination.
 * @param {Array} upArr Array representing maximum units for each property.
 */
function generateCombinationsHelper(pArr, upArr) {

  if (pArr.every((val) => val === 0)) return

  if (checkValidCombination(pArr, properties, totalUnit)) {
    const totalEarning = calculateEarningsForCombination(
      pArr,
      properties,
      totalUnit
    )
    combination.push(totalEarning)
  }

  let newPArr = pArr.slice()
  const n = pArr.length 

  for (let i = n - 1; i >= 0; i--) {
    if (pArr[i] > 0) {
      newPArr[i]--
      generateCombinationsHelper(newPArr, upArr)
      break 
    }
    else {
      newPArr[i] = upArr[i]
      
      if (i > 0) continue
      
      if (newPArr[i - 1] > 0) {
        newPArr[i - 1]--
        for (let j = i; j < n; j++) {
          newPArr[j] = upArr[j]
        }
        generateCombinationsHelper(newPArr, upArr)
      }
    }
  }
}

/**
 * Checks if a combination is valid based on total time units.
 * @param {Array} temp Array representing the current combination.
 * @param {Array} properties Array of property objects.
 * @param {number} timeUnit Total time units available.
 * @returns {boolean} True if combination is valid, otherwise false.
 */
function checkValidCombination(temp, properties, timeUnit) {
  let sum = 0
  for (let j = 0; j < temp.length; j++) {
    sum += temp[j] * properties[j].buildTime
  }
  return sum < timeUnit
}

/**
 * Calculates total earning for a combination.
 * @param {Array} combination Array representing a combination.
 * @param {Array} properties Array of property objects.
 * @param {number} totalTime Total time units available.
 * @returns {Object} Object containing total earning and combination.
 */
function calculateEarningsForCombination(combination, properties, totalTime) {
  let totalEarning = 0
  let remainingTime = totalTime
  for (let j = 0; j < combination.length; j++) {
    for (let k = 1; k <= combination[j]; k++) {
      remainingTime -= properties[j].buildTime
      totalEarning += properties[j].earning * remainingTime
    }
  }
  return { earning: totalEarning, combination }
}

/**
 * Prints maximum earnings and corresponding solutions.
 * @param {Array} earnings Array of earnings objects.
 * @param {Array} properties Array of property objects.
 * @param {number} timeUnit Total time units available.
 */
function printMaxEarnings(earnings, properties, timeUnit) {
  const sortedEarnings = earnings.sort((a, b) => b.earning - a.earning)
  const maxEarning = sortedEarnings[0].earning
  console.log(`Time Unit: ${timeUnit}`)
  console.log(`Earnings: $${maxEarning}\nSolutions`)
  sortedEarnings.forEach((earning, index) => {
    if (earning.earning === maxEarning) {
      let str = "  "
      str += `${index + 1}. `
      for (let i = 0; i < earning.combination.length; i++) {
        str += `${properties[i].shortName}:${earning.combination[i]} `
      }
      console.log(str)
    } else {
      return
    }
  })
}
