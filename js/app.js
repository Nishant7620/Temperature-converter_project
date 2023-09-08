// scripts

const celsiusField =document.querySelector("#celsius");
const degree =document.querySelector("#degree");
const convertBtn =document.querySelector("#convert-btn");
const temptype =document.querySelector("#temp-type");

// window loading reset
window.addEventListener("load",() => {
    degree.value="";
    celsiusField.innerHTML="";
})

convertBtn.addEventListener("click", (e)=> {
    e.preventDefault();
    convertTocelsius()
})

function convertTocelsius() {
    let inputValue =degree.value;

    if(temptype.value ==="fahrenheit") {

        const fahrenheitToCelsius =(inputValue -32) *(5/9);
        celsiusField.innerHTML=`${fahrenheitToCelsius.toFixed(3)} &deg;
        c`;

    }
    else if (temptype.value ==="kelvin") {
        const kelvinToCelsius =inputValue -275.15; 
        celsiusField.innerHTML=`${kelvinToCelsius.toFixed(3)} &deg;
        c`;

        
   
    }
}