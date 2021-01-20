const chronometer = new Chronometer();

const btnLeft = document.getElementById('btnLeft');


console.log(btnLeft)

const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

let printTime = () => {
  printMinutes();
  printSeconds();
  printMilliseconds();
  
}

function printMinutes() {
  minDec.innerText=chronometer.splitClick()[0];
  minUni.innerText=chronometer.splitClick()[1];
}

function printSeconds() {
  secDec.innerText=chronometer.splitClick()[3];
  secUni.innerText=chronometer.splitClick()[4];
}

// ==> BONUS
function printMilliseconds() {
  milDec.innerText=chronometer.splitClick()[6];
  milUni.innerText=chronometer.splitClick()[7];
}

function printSplit() {
  let split=document.createElement("li");
    split.innerText=chronometer.splitClick();
    splits.appendChild(split);
}

function clearSplits() {
  splits.textContent=""
  
}

function setStopBtn() {
  btnLeft.classList.value="btn stop";
  btnLeft.innerText="STOP";
}

function setSplitBtn() {
  btnRight.classList.value="btn split"
  btnRight.innerText="SPLIT";
}

function setStartBtn() {
  btnLeft.classList.value="btn start"
  btnLeft.innerText="START";
}

function setResetBtn() {
  btnRight.classList.value="btn reset"
  btnRight.innerText="RESET";
}

btnLeft.addEventListener('click', () => {
  if(btnLeft.innerText=="START"){
    setStopBtn();
    setSplitBtn();
    chronometer.startClick(printTime);
    
  }else{
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }
});

btnRight.addEventListener('click', () => {
  if(btnRight.innerText=="SPLIT"){
    printSplit();
    
  }else{
    chronometer.resetClick();
    clearSplits();
    printTime();
  }
});
