const obj = {
  name: "bruce",
  age: 25,
  "key-three": true ,
saymyname: function(){
  console.log(this.name);
}

}
obj.hobby = 'fotball';
console.log(obj.name);
console.log(obj["age"]);
console.log(obj['key-three']);
console.log(obj);
delete obj.hobby
console.log(obj);
obj.saymyname();
// object.keys() , .values(), .entries()
