/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//create answer holder
//recurse through each val in nums array
    //base case is no more vals
    //recurse case is vals remaining, slice
//return answers array at end

var permute = function(nums, current = [], answer = []) {

    if(nums.length === 1){
        answer.push(current.concat(nums[0]));
     return answer;
    }

    for(let x = 0; x < nums.length; x++){
        current.push(nums[x]);
        answer = permute((nums.slice(0, x).concat(nums.slice(x+1))), current, answer);
        current.pop();
    }
    return answer;
};
