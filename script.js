const calcScreen = document.querySelector('.calculator-screen');

const allClearButton = document.querySelector('.all-clear');

const numButton0 = document.querySelector('.num0');
const numButton1 = document.querySelector('.num1');
const numButton2 = document.querySelector('.num2');
const numButton3 = document.querySelector('.num3');
const numButton4 = document.querySelector('.num4');
const numButton5 = document.querySelector('.num5');
const numButton6 = document.querySelector('.num6');
const numButton7 = document.querySelector('.num7');
const numButton8 = document.querySelector('.num8');
const numButton9 = document.querySelector('.num9');




allClearButton.onclick = function(){
    resetScreen();
}

numButton0.onclick = function(){
    appendNum('0');
}

numButton1.onclick = function(){
    appendNum('1');
}

numButton2.onclick = function(){
    appendNum('2');
}

numButton3.onclick = function(){
    appendNum('3');
}

numButton4.onclick = function(){
    appendNum('4');
}

numButton5.onclick = function(){
    appendNum('5');
}

numButton6.onclick = function(){
    appendNum('6');
}

numButton7.onclick = function(){
    appendNum('7');
}

numButton8.onclick = function(){
    appendNum('8');
}

numButton9.onclick = function(){
    appendNum('9');
}



function replaceNum(){
    calcScreen.value = '';
}

function appendNum(number) {
     if (calcScreen.value == '0'){
        replaceNum();
     }
       
    calcScreen.value += number
  }



  function resetScreen(){
      calcScreen.value = '0';
  }

