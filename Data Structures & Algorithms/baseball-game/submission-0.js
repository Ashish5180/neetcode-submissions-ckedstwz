class Solution {
    calPoints(operations) {
        let stack = [];

        for (let op of operations) {
            if (op === "C") {
                stack.pop(); // last hata do
            } 
            else if (op === "D") {
                stack.push(stack[stack.length - 1] * 2);
            } 
            else if (op === "+") {
                let last = stack[stack.length - 1];
                let secondLast = stack[stack.length - 2];
                stack.push(last + secondLast);
            } 
            else {
                stack.push(Number(op)); // number add karo
            }
        }

        // total sum
        return stack.reduce((sum, val) => sum + val, 0);
    }
}