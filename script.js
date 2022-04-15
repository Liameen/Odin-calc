const calcScreen = document.querySelector('.calculator-screen');

let num1 = '';
let num2 = '';
let operator = '';

const allClearButton = document.querySelector('.all-clear');
const addButton = document.querySelector('.addButton');
const subtractButton = document.querySelector('.subtractButton');
const multiplyButton = document.querySelector('.multiplyButton');
const divideButton = document.querySelector('.divideButton');
const percentageButton = document.querySelector('.percentageButton');
const openParenthesisButton = document.querySelector('.openParenthesisButton');
const closeParenthesisButton = document.querySelector('.closeParenthesisButton');
const pointButton = document.querySelector('.pointButton');
const equalButton = document.querySelector('.equalButton');


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
    appendUserChoice('0');
}

numButton1.onclick = function(){
    appendUserChoice('1');
}

numButton2.onclick = function(){
    appendUserChoice('2');
}

numButton3.onclick = function(){
    appendUserChoice('3');
}

numButton4.onclick = function(){
    appendUserChoice('4');
}

numButton5.onclick = function(){
    appendUserChoice('5');
}

numButton6.onclick = function(){
    appendUserChoice('6');
}

numButton7.onclick = function(){
    appendUserChoice('7');
}

numButton8.onclick = function(){
    appendUserChoice('8');
}

numButton9.onclick = function(){
    appendUserChoice('9');
}



//operator buttons

addButton.onclick = function(){
     num1 = calcScreen.value;

     operator = '+';
    wipeScreen();
    console.log(num1);
    console.log(operator)
    
}

subtractButton.onclick = function(){
    num1 = calcScreen.value;

    operator = '-';
   wipeScreen();
   console.log(num1);
   console.log(operator)
    
    
}

multiplyButton.onclick = function(){
    num1 = calcScreen.value;

    operator = '*';
   wipeScreen();
   console.log(num1);
   console.log(operator)
    
}

divideButton.onclick = function(){
    num1 = calcScreen.value;

    operator = '/';
   wipeScreen();
   console.log(num1);
   console.log(operator)
        
}

// percentageButton.onclick = function(){
//     appendUserChoice(' % ');
    
// }

// openParenthesisButton.onclick = function(){
//     appendUserChoice('(');
        
// }

// closeParenthesisButton.onclick = function(){
//     appendUserChoice(')');
            
// }

// pointButton.onclick = function(){
//     appendUserChoice('.');
            
// }

equalButton.onclick = function(){
    const num2 = calcScreen.value;
    
    operate(num1, num2, operator);
    // let result = Function('return ' + equation)();
    // console.log(result);
    // calcScreen.value = result;
    

    



}
   





// functions to reset screen and append number
function wipeScreen(){
    calcScreen.value = '';
}

function appendUserChoice(number) {
     if (calcScreen.value == '0'){
        wipeScreen();
     }
       
    calcScreen.value += number
  }


function resetScreen(){
      calcScreen.value = '0';
  }



// functions for operators


function operate(num1, num2, operator){

    let parse = num1.concat(operator, num2);
    console.log(parse);

     let result = Function('return ' + parse)();

     console.log(result);

     calcScreen.value = result;

     
  }




// function add(num1, num2){
//     return num1 + num2;
// }

// function subtract(num1, num2){
//     return num1 - num2;
// }

// function multiply(num1, num2){
//     return num1 * num2;
// }

// function divide(num1, num2){
//     return num1 / num2;
// }
