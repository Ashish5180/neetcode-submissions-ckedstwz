class MyQueue {
    constructor() {
        this.items=[]
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.items.push(x)
    }

    /**
     * @return {number}
     */
    pop() {
        return this.items.shift()
    }

    /**
     * @return {number}
     */
    peek() {
        return this.items[0]
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.items.length===0
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
