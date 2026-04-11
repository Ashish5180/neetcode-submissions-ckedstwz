class Solution {
    lastStoneWeight(stones) {
        // MaxHeap banao
        const heap = new MaxHeap();
        
        // Saare stones daalo
        for (let stone of stones) {
            heap.push(stone);
        }
        
        // Jab tak 2 se zyada stones hain
        while (heap.size() > 1) {
            const y = heap.pop(); // sabse bhaara
            const x = heap.pop(); // doosra bhaara
            
            if (x !== y) {
                heap.push(y - x); // difference wapas daalo
            }
        }
        
        return heap.size() === 0 ? 0 : heap.top();
    }
}

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this._bubbleUp();
    }

    pop() {
        const max = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this._sinkDown();
        }
        return max;
    }

    top() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    _bubbleUp() {
        let i = this.heap.length - 1;
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if (this.heap[parent] < this.heap[i]) {
                [this.heap[parent], this.heap[i]] =
                [this.heap[i], this.heap[parent]];
                i = parent;
            } else break;
        }
    }

    _sinkDown() {
        let i = 0;
        const n = this.heap.length;
        while (true) {
            let largest = i;
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            if (left < n && this.heap[left] > this.heap[largest])
                largest = left;
            if (right < n && this.heap[right] > this.heap[largest])
                largest = right;
            if (largest !== i) {
                [this.heap[largest], this.heap[i]] =
                [this.heap[i], this.heap[largest]];
                i = largest;
            } else break;
        }
    }
}