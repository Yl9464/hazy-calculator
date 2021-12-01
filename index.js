const calculate = (calculatationSteps) => {
  const operations = ['+', '-', '*', '/']

  for (let i = 0; i < calculatationSteps.length; i++) {
    if (calculatationSteps[i] === '') parseInt(calculatationSteps[i])

    if (calculatationSteps[i] === null) calculatationSteps = 0

    if (calculatationSteps[i] === undefined || '' || NaN) {
      calculatationSteps.filter((step) => {
        return step !== undefined
      })

      return [...calculatationSteps, ...operations, ...calculatationSteps]
    }
  }
}


module.exports = calculate
