const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "="];
let output = "";

//define function to caltulate based on button clicked
const calculate = (btnValue) =>{
    display.focus();
    if(btnValue  === "=" && output !==""){
        //if outup has '%' replcae with '/100' before evaluating
        output = eval(output.replace("%", "/100")); 
    } else if (btnValue === "AC") {
        output = "";
    } else if (btnValue === "DEL") {
        //if teh DELL button is clicked remove the last character from the ouput
        output = output.toString().slice(0,-1);
    } else{
        //if output is empty and button is specialchars then return
        if(output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
};

//add event listeners to buttons, calls calculate() on click
buttons.forEach((button) => {
    //button click listener calls calculate() with dataset value as arguments 
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
