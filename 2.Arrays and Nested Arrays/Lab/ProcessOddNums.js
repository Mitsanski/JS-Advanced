function oddNums(nums) {
        return nums
                .filter((x, i) => i % 2 == 1)
                .map(x => x * 2)
                .reverse()
                .join(' ');
}
oddNums([10, 15, 20, 25]);
oddNums([3, 0, 10, 4, 7, 3]);