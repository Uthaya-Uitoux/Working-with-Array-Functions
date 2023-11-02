let num=[1,2,3,4,5,6,7,8,9,10]
let input_number=document.querySelector("#numbers")
input_number.textContent=num.join(', ');

function map(){
    let value= num.map(a =>a*2)
    let doubledValue= value.join(', ')
    let even_number=document.querySelector("#number")
    even_number.textContent=doubledValue;
}
function filter(){
    let valuemap= num.filter(q => q%2 == 0)
    let even_number=document.querySelector("#number")
    even_number.textContent=valuemap.join(', ');
}
function reduce(){
    let val= num.reduce((total,el) => total+el,0)
    let even_number=document.querySelector("#number")
    even_number.textContent=val;
}
function modify(){
    num.forEach(element => {
        let even_number=document.querySelector("#number")
        even_number.textContent=element;
        console.log(element);
    });
}