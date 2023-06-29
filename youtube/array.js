


// const arr = [1,2,3,'Flavio',['a','b'],[4,5,6],[7,8,9]]
// console.log(a[0],a[1])

// for(const i in arr)

// {
//     console.log(i,"=",arr[i]);
// }









// // length of an array 
// console.log(arr.length);

// // adding an element in last an array
// arr.push(30);

// // adding an element in beginning of an array 
// arr.unshift(20);

// // remove an element from end of an array
// arr.pop();

// // remove  an element from beginning of an array
// arr.shift();
 



// // how to join two or more arrays 

// const a = [1,2]
// const b= [3,4]
// const c = a.concat(b);
// console.log(c);




//how to find a specific item in array 

const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
  ];
  
  function isCherries(fruit) {
    return fruit.name === "cherries";
  }
  
  console.log(inventory.find(isCherries));

  