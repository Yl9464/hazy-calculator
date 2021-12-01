const isNumVal = (item) => {
  return !isNaN(item) && item !== ''
}

const valItem = (item) => {
  const signs = ['+', '-', '*', '/']

  return isNumVal(item) || signs.includes(item)
}

const startCalc = (calculationSteps) => {
  switch (calculationSteps[1]) {
    case '+':
      return Number(calculationSteps[0]) + Number(calculationSteps[2])
    case '-':
      return Number(calculationSteps[0]) - Number(calculationSteps[2])
    case '*':
      return Number(calculationSteps[0]) * Number(calculationSteps[2])
    case '/':
      return Number(calculationSteps[0]) / Number(calculationSteps[2])
    default:
      return NaN
  }
}

const calculate = (incoming) => {
  let calculationSteps = []

  incoming.forEach((item) => {
    if (valItem(item)) {
      calculationSteps.push(item)
    }
  })

  if (calculationSteps.length !== 3) return NaN

  return startCalc(calculationSteps)
}


module.exports = calculate
