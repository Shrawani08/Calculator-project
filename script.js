 // display button
   const digit =  document.querySelector('.h1');
 let text ="00";
 const result  = document.querySelector('.answer');
 let restext ="00";
 result.innerText  =restext;
// first row functions
const seven = document.getElementById('seven');
seven.addEventListener("click",function(){
addText("7");
});
 const eight = document.getElementById('eight');
eight.addEventListener("click",function(){
    addText("8");
});
const nine = document.getElementById('nine');
nine.addEventListener("click",function(){
addText("9");
});
const del = document.getElementById('del');
const ac = document.getElementById('ac');
del.addEventListener("click",function(){
    // removes the last entered char
    console.log("DEL");
      text = text.slice(0, -1);
      digit.innerText = text;
     

});
ac.addEventListener("click",function(){
// removes all characters 
     text = "00";
     digit.innerText= text;
});
// shiftbutton function
const shiftbtn = document.getElementById('shiftbtn');
//when btn activated,show s on screen
shiftbtn.addEventListener('click',function(){
    console.log('s');

});
document.addEventListener('keydown', function(event) {
         if (event.shiftKey) {
            console.log("Shift key was pressed!");
            // Perform actions when Shift is pressed
        } else {
            console.log("Shift key was NOT pressed.");
            // Perform actions when Shift is not pressed
        }
    });
//second row functions
const four = document.getElementById('four');
four.addEventListener("click",function(){
    addText("4");
});
 const five = document.getElementById('five');
five.addEventListener("click",function(){
    addText("5");
});
const six = document.getElementById('six');
six.addEventListener("click",function(){
  addText("6");
});   
const multiply =document.getElementById('multiply');
multiply.addEventListener("click",function(){
    addText("×");
});
const divide =document.getElementById('divide');
divide.addEventListener("click",function(){
    addText("÷");
});
//third row functions
const one = document.getElementById('one');
one.addEventListener("click",function(){
    addText("1");
});
 const two = document.getElementById('two');
two.addEventListener("click",function(){
    addText("2");
});
const three = document.getElementById('three');
three.addEventListener("click",function(){
  addText("3");
});   
const plus = document.getElementById('plus');
plus.addEventListener("click",function(){
  addText("+");
 
  //pass ans to result
}); 
  const minus = document.getElementById('minus');
minus.addEventListener("click",function(){
  addText(" - ");
});   
//fourth row functions
const zero = document.getElementById('zero');
zero.addEventListener("click",function(){
  addText("0");
});
const dot = document.getElementById('dot');
dot.addEventListener("click",function(){
  addText(".");
});
const equal = document.getElementById('equal');
equal.addEventListener('click',function(){
    //applying BODMAS
    // 1.brackets 2.exponents or roots 3.*/ 4.+ -
   let res = division();
    console.log(res);
});
//basic functions
function addText(num){

    if(text ==="00"){
       text = num;
    }
    else{
        text+=num;

    }
    digit.innerText = text;
    return;
}
function addition() {
    for(i=0;i<text.length;i++){
        if(text[i]=="+"){
           let charCode= text.charCodeAt(i-1);
            // let left = left + (charCode >= 48 && charCode <= 57) ?text[i-1] :  tex
            let right = parseInt(text[i+1]);
            return left+right;
        }
    }
}
function subtraction() {
    for(i=0;i<text.length;i++){
        if(text[i]=="-"){
            let left = parseInt(text[i-1]);
            let right = parseInt(text[i+1]);
            return left-right;
        }
    }
}
function mutliplication() {
    for(i=0;i<text.length;i++){
        if(text[i]=="×"){
            let left = parseInt(text[i-1]);
            let right = parseInt(text[i+1]);
            return left*right;
        }
    }
}
function division() {
    for(i=0;i<text.length;i++){
        if(text[i]=="÷"){
            let left = parseInt(text[i-1]);
            let right = parseInt(text[i+1]);
            return left/right;
        }
    }
}