const lang = ["hindi","english","maths"];
console.log(lang[2]);  // for finding element in array using indexes
console.log(lang.length); // for finding the lenght of an array 

//for adding element in the end of an array
lang.push("science");
console.log(lang);
// for adding element in the starting of an array 
lang.unshift("sanskrit"); <script src="basic_arr.js"></script>

console.log(lang);

// deletion of element in the end of array
lang.pop();
console.log(lang.pop());
 
// for deletion of first position of element in the arrar
console.log(lang.shift());

// arrays with loop
 const actors = [
     {name: 'actor 1',payment: 100},
     {name: 'actor 2',payment: 200},
    {name: 'actor 3',payment: 300}
 ];

for(let i = 0; i<actor.lenght; i++) {
actor[i].payment = actor[i].payment - 10;
}
console.log(actor);

//for each loop function
actor.forEach((actor) => {
    actor.payment = actor.payment - 10;
console.log(actor);    
});

//for of
for(let actor of actors){
    actor.payment = actors.payment - 10;
    console.log(actor);
}

// filter 

const student =[
    {name: 's1',marks: 50},
    {name: 's2',marks: 60},
    {name: 's3',marks: 70}
];
const fill =student.filter((student) =>{
    if (student.marks>60){
        return true;
    }
    else{
        return false;
    }
return false;
 // true and false for getting result   we can write it as return student.marks>60;
});
console.log(fill);

//map method
const users = [{f1name: 'john',l1name: 'roman'},{f2name: 'cena',l2name:"reings"}];
// if i want a perticular name in  array using map
const finaluser = users.map((user)=>{
return {
     fullname : `${user.f1name}  ${user.f2name}`
    // fullname2 : user.l1name + user.l2name

}
});
console.log(finaluser);

//reduce 


