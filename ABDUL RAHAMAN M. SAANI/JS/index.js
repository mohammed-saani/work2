function changeImage(){
    var image = document.getElementById('myImage');
if(image.src.match("bulbon")){
    image.src="pic_bulboff.gif";
}else{
    image.src="pic_bulbon.gif"
}
}
let lastname;
var firstnam;
lastname = "Abdul ";
firstnam = "Saani";
let myname = lastname + firstnam;
let sent ="My Name is " + myname;
alert(sent)

let r = 5*7+3/2-3;
console.log(r)

let text ="what is your"
text += "name"
console.log(text)

function product(a,b){
    return a*b;
}
let q = product(4,7);
console.log(q);

const person = {
    fistname: "Saani",
    lastname: "Mohammed",
    age: 20 ,
    eyecolor: "brown",
};

console.log(person["fistname"] + " " +  person.lastname + " is " + person.age + " years old " + " and has an eyecolor of " + person["eyecolor"] )