function mincost(arr) {
    const minHeap = new MinHeap();
    for (let num of arr) {
        minHeap.insert(num);
    }
    
    let totalCost = 0;
    
    while (minHeap.size() > 1) {
        const first = minHeap.extractMin();
        const second = minHeap.extractMin();
        const cost = first + second;
        totalCost += cost;
        minHeap.insert(cost);
    }
    
    return totalCost;
}

// MinHeap implementation
class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    extractMin() {
        if (this.size() === 1) {
            return this.heap.pop();
        }
        
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        const element = this.heap[index];
        
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];
            
            if (element >= parent) break;
            
            this.heap[index] = parent;
            index = parentIndex;
        }
        
        this.heap[index] = element;
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];
        
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;
            
            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild < element) {
                    swap = leftChildIndex;
                }
            }
            
            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild < element) ||
                    (swap !== null && rightChild < leftChild)
                ) {
                    swap = rightChildIndex;
                }
            }
            
            if (swap === null) break;
            
            this.heap[index] = this.heap[swap];
            index = swap;
        }
        
        this.heap[index] = element;
    }
}

module.exports = mincost;
