const calculate = (calculationSteps) => {
  let num1 = []
  let num2 = []
  let operation = ['+', '-', '*', '/']

  if (num1 || num2 < 0) return 8

  for (let i = 0; i < operation.length; i++) {
    const op = operation.length[i]

    let sum = operation[0]

    if (op) {
      sum = (num1) + (sum) + (num2)
    }
  }

  return (calculate(calculationSteps))
}


module.exports = calculate
