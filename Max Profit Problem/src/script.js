function maxProfit(timeUnit) {
  const maxTheatres = Math.floor(timeUnit / 5)
  const maxPubs = Math.floor(timeUnit / 4)
  const maxParks = Math.floor(timeUnit / 10)

  let maxEarnings = 0
  let solutions = []

  function exploreCombinations(remainingTime, theatres, pubs, parks, earnings, currentSolution) {
    if (remainingTime < 0) return
    if (earnings > maxEarnings) {
      maxEarnings = earnings
      solutions = [currentSolution]
    } else if (earnings === maxEarnings) {
      solutions.push(currentSolution)
    }
    if (theatres < maxTheatres) {
      exploreCombinations(
        remainingTime - 5,
        theatres + 1,
        pubs,
        parks,
        earnings + (remainingTime - 5) * 1500,
        [...currentSolution, 'T']
      )
    }
    if (pubs < maxPubs) {
      exploreCombinations(
        remainingTime - 4,
        theatres,
        pubs + 1,
        parks,
        earnings + (remainingTime - 4) * 1000,
        [...currentSolution, 'P']
      )
    }
    if (parks < maxParks) {
      exploreCombinations(
        remainingTime - 10,
        theatres,
        pubs,
        parks + 1,
        earnings + (remainingTime - 10) * 3000,
        [...currentSolution, 'C']
      )
    }
  }

  exploreCombinations(timeUnit, 0, 0, 0, 0, [])

  const output = solutions.map(solution => {
    const counts = { T: 0, P: 0, C: 0 }
    solution.forEach(property => counts[property]++)
    return `T: ${counts.T} P: ${counts.P} C: ${counts.C}`
  })

  return [maxEarnings, output]
}

const testCases = [
  [7, 3000],
  [8, 4500],
  [13, 16500],
]

testCases.forEach(([timeUnit, expectedEarnings]) => {
  const [earnings, solution] = maxProfit(timeUnit)
  console.log(`Time Unit: ${timeUnit}`)
  console.log(`Earnings: $${earnings}`)
  if (earnings === expectedEarnings) {
    console.log("Solutions:")
    solution.forEach((sol, index) => {
      console.log(`${index + 1}. ${sol}`)
    })
  } else {
    console.log("Incorrect solution!")
  }
  console.log()
})
