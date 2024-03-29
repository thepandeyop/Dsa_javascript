class Circular_Queue{
constructor (capacity){
this.items = new Array(capacity)
this.capacity = capacity;
 this.currentLenght = 0;
 this.rear = -1;
 this.front = -1;
}

isFull (){
    return this.currentLenght === this.capacity
}

isEmpty(){
return this.currentLenght ===0;
}

enqueue(element){
    if (!this.isFull()){
        this.rear = (this.rear +1)% this.capacity;
        this.items[this.rear] =element;
        this.currentLenght +=1;
        if(this.front=== -1){
            this.front = this.rear;
        }
    }
}

dequeue(){
    if(this.isEmpty()){
        return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front =(this.front +1) % this.capacity;
    this.currentLenght -=1;
    if(this.isEmpty()){
        this.front =-1;
        this.rear= -1;
    }
    return item;

}

size(){
    return this.rear - this.front;
}
peek(){
    if(!this.isEmpty())
    {
        return this.items[this.front];
    }
    return null;
}


print(){
    if(this.isEmpty()){
        console.log("queueu is empty");
    } else{
        let i;
        let str = '';
        for(i =this.front; i==this.rear; i=(i+1)% this.capacity){
            str += this.items[i] + " "
        }
        str+= this.items[i]
        console.log(str)
    }
}

}
const Cir_queue = new Circular_Queue;