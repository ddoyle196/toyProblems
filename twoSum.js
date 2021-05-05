/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    for(var x = 0; x < nums.length; x++){
        let current = target;
        current -= nums[x];
        for(var y = x+1; y < nums.length; y++){
            if(current - nums[y] === 0){
                return [x, y];
            }
        }
    }
};
