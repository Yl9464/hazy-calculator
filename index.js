const calculate = (calculationSteps) => {
  let num1 = []
  let num2 = ('')
  let operation = ['+', '-', '*', '/']

  for (let i = 0; i < operation.length; i++) {
    if (operation !== operation[i]) return NaN

    if (operation === operation[2]) {
      const answer = [num1 * num2]

      num1 * Number(num2)

      return answer
    }
  }

  return (calculate(calculationSteps))
}

module.exports = calculate
