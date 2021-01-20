class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId=0;
  }
  startClick(callback) {
    this.intervalID = setInterval(() => {
      this.currentTime += 1
      callback()
  }, 10)
}
getMilliseconds(){
  return this.currentTime%100
}
getSeconds() {
  return (this.currentTime-this.getMilliseconds())/100
}
  getMinutes() {
    return (this.currentTime-this.getSeconds()*100-this.getMilliseconds())/60;
  }

   
  //actually it is not milliseconds. millisecond is 1/1000 of second. but here we are expceed to only show the cantisecond(1/100Second)
 
 
  twoDigitsNumber(value) {
    if(value.toString().length==1){
      return `0${value}`
    }
    return value.toString()
  }
  stopClick() {
    clearInterval(this.intervalID);
  }
  resetClick() {
    this.currentTime=0;
  }
  splitClick() {
    let minTwoDigits=this.twoDigitsNumber(this.getMinutes());
    let secTwoDigits=this.twoDigitsNumber(this.getSeconds());
    let milTwoDigits=this.twoDigitsNumber(this.getMilliseconds());
    return `${minTwoDigits}:${secTwoDigits}:${milTwoDigits}`
}}

