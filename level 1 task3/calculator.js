const display = document.querySelector(".calculator");
const buttons = document.querySelectorAll(".digitsbtns");
const nofirst = ["*","/","=","^","%"]
let result = ""
const calc = (btnValue) => {
    if(btnValue == "=" && btnValue != ""){
        result = eval(result.replace("%","/100"));
    }
    
  else if (btnValue == "AC"){
    result = ""
  }
  else if(btnValue == "DEL") {
    result = result.toString().slice(0,-1);

  }
  else{
    if (result == "" && nofirst.includes(btnValue)) return;
    result += btnValue;
  }
  display.value = result;
};
buttons.forEach((button) => {
    button.addEventListener("click", (e) => calc(e.target.value));
})
 

function theme(){
        document.querySelector(".taskcalculator").style.background='black';
    }
    
function themeb(){
        document.querySelector(".taskcalculator").style.background='aqua';
    }
function themec(){
        document.querySelector(".taskcalculator").style.background='white';      
    }

    



