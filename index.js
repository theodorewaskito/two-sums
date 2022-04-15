function twoSums (nums, target) {
  let output = []

  for (let i = 0; i < nums.length; i++) {

    for (let j = i + 1; j < nums.length; j++) {
      const result = nums[i] + nums[j]

      if (result === target) {
        output.push(i, j)
      }
    }
  }

  return output
}

console.log(twoSums([2, 7, 11, 15], 13)) // 13, Output result function [0, 2]
console.log(twoSums([3, 2, 4], 6)) // 6, Output result function [1, 2]
console.log(twoSums([3, 3], 6)) // 6, Output result function [1, 2]
