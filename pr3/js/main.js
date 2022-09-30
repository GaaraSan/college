function charCount(text){
    return text.replace(/[\.,!?; ]*/g, '').length;
}
function g(el){
    return document.getElementById(el);
}

g('input').onkeyup=function(){
    g('label').innerHTML=charCount(this.value);
}


const str = prompt("Введите текст с буквой А и узнайте количество:")
const number = str.length - str.replace(new RegExp('а','g'), '').length
alert("количество = " + number);


//телефон
var inp = document.getElementById("inp");

inp.onclick = function() {
    inp.value = "+";
}

var old = 0;

inp.onkeydown = function() {
    var curLen = inp.value.length;
    
    if (curLen < old){
        old--;
        return;
    }
    
    if (curLen == 1) 
        inp.value = inp.value + "(";
    
    if (curLen == 5)
        inp.value = inp.value + ")-";
    
    if (curLen == 10)
        inp.value = inp.value + "-"; 
    
    if (curLen == 13)
        inp.value = inp.value + "-";  
    
    if (curLen > 16)
        inp.value = inp.value.substring(0, inp.value.length - 1);
    
    old++;
}
