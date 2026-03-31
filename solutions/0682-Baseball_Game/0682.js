/**
 * @param {string[]} operations
 * @return {number}
 * @link https://leetcode.com/problems/baseball-game/
 */
var calPoints = function (operations) {
    const nums = [];

    for (const op of operations) {
        const size = nums.length;

        if (!Number.isNaN(Number(op))) {
            nums.push(+op);
        } else if (op === "+") {
            const num1 = nums[size - 1];
            const num2 = nums[size - 2];
            nums.push(num1 + num2);
        } else if (op === "C") {
            nums.pop();
        } else nums.push(nums[size - 1] * 2);
    }

    return nums.reduce((total, num) => {
        return (total += num);
    }, 0);
};
