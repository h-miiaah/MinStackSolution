var MinStack = function() {
    this.min = [];
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (this.min.length === 0 || val <= this.min[this.min.length - 1]) this.min.push(val);
    this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    var val = this.stack.pop();
    if (val === this.min[this.min.length - 1]) this.min.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack.length ? this.stack[this.stack.length - 1] : 0;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min.length ? this.min[this.min.length - 1] : 0;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */



/*

MinStack
- The min array is used to keep track of the minimum value in the stack.
- The stack array is used to keep track of the elements in the stack.

MinStack.prototype.push
- If the stack is empty, or if the new value is less than or equal to the current minimum value, push the new value to the min stack.
- Push the new value to the stack.

MinStack.prototype.pop
- The pop method is removing the last element from the stack and returning it.
- If the last element is the current minimum, we need to remove it from the min stack as well.
- If the stack is empty, we return undefined.

MinStack.prototype.top
- The top() method returns the top element of the stack.

MinStack.prototype.getMin
- The getMin method returns the minimum value in the stack.

*/
