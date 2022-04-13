const nums = [3,2,4]
const target = 6
let result = 0

for (let i = 0; i < nums.length; i++) {
  // console.log(i);
  for (let j = 0; j < nums.length; j++) {
    // console.log(i, j);
    // if (nums[i+j]) {
      result = nums[i] + nums[i+j]
      // console.log(result, "result");
      // console.log(nums[i], nums[j], "nums ij");


      // if (i !== j) {
        // console.log(i, j);
        if (result === target) {
          console.log(result);
          console.log(nums[i], nums[j]);
          console.log([i, j]);
          // break
        }
      // }
    // }
    
  }

}