function setDate(){
    const secondHand = document.querySelector('.second-hand')
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds /60)* 360) +90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    setMins();
    setHours();
}

setInterval(setDate, 1000);

function setMins(){
    const minHand = document.querySelector('.min-hand')
    const now = new Date();
    const mins = now.getMinutes();
    const minDegree = ((mins /60)*360)+90;
    minHand.style.transform = `rotate(${minDegree}deg)`;
}
function setHours(){
    const hourHand = document.querySelector('.hour-hand')
    const now = new Date();
    const hours = now.getHours();
    const hourDegree = ((hours/12)*360)+90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;

}