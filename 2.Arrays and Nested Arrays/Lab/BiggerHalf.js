function biggerHalf(nums) {
        let result = [];
        nums.sort((a, b) => a - b);
        
        for (let i = Math.floor(nums.length / 2); i < nums.length; i++){
                result.push(nums[i])
        }
        return result;
}
console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));