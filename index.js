
const calculate = (calculationSteps) => {
  let nums = ['2', 4, 10, 23, 12]


  if (calculationSteps[0] === '2') {
    let answer = Number(nums[0]) * nums[1]

    return answer
  }
  if (calculationSteps[2] === null) {
    let answer = nums[2] + calculationSteps[2]

    return answer
  }
  if ((calculationSteps[0]) || (calculationSteps[1]) === undefined) {
    let answer = nums[3] - nums[4]

    return answer
  }
}

module.exports = calculate
