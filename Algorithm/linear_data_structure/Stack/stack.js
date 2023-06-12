class stack {
    constructor(){
        this.items = []
    }

    push(element){
  this.items.push(element)
    }

    pop(){
        return this.items.pop()
    }
    size(){
        return this.items.length;
    }
    peak(){
        return this.items[this.items.length-1]
    }

    isEmpty(){
        return this.items.lenght===0;
    }

    print(){
        console.log(this.items.toString());
    }

};

const Stack = new stack();
Stack.pop();
Stack.push(40);
Stack.push(50);
Stack.push(60);
console.log(Stack.size());
Stack.print();
Stack.peak();