class Queue{

    constructor(){
    this.item = {}; // object
    this.rear = 0;
    this.front = 0;
    }

    enqueue(element){

    this.item[this.rear] =element;
    this.rear++;
}


dequeue(){
    // this.item.shift() due to inbuild function time complexity is lenear in nature
    const items = this.item[this.front];
    delete this.item[this.front];
    this.front++;
    return items;
}

isEmpty(){
     return this.rear - this.front ===0;
}

peak(){
    return this.item[this.front];
}

size(){
    return this.rear - this.front;
}

print(){
    console.log(this.item);
}

}
const queue =new Queue;

console.log(queue.isEmpty());


   