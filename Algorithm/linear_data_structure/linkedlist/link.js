class Node{
 constructor(value){
    this.value = value;
    this.next = null;
 }
}

 class linklist{
constructor(){
    this.head = null;
    this.size = 0;
}
isEmpty(){
    return this.size === 0;
}
getsize(){
    return this.size;
}

prepend(value){
    const node = new Node(value);
    if (this.isEmpty())
    {
        this.head = node;
    }
    else{
        node.next = this.head;
        this.head = node;
    }
    this.size+=1;
}

}
 
const nood = new linklist();
console.log("list is empty",nood.isEmpty());
nood.prepend(20);
nood.prepend(30);
nood.prepend(40);
nood.prepend(50);
console.log("list size",nood.getsize());