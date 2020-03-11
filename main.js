
/**********
 * DATA *
 **********/

let dImg = document.querySelector('#d6-roll')
let d12Img = document.querySelector('#d12-roll')
let d20Img = document.querySelector('#d20-roll')
let d61Img = document.querySelector('#double-d6-roll-1')
let d62Img = document.querySelector('#double-d6-roll-2')
const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

/*******************************************************************
 * METHOD-Y HELPER FUNCTIONS YOUR BACK-END DEV HAS WRITTEN FOR YOU *
 ******************************************************************/


const getRandomNumber = function(max) {
  const rand = Math.random();
  const range = rand * max;
  const result = Math.ceil(range);

  return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

const rolling6 = function(){
  let result = getRandomNumber(6)
  sixes.push(result)
  dImg.src='images/d6/'+result+'.png'
  meanSection.innerText=mean(sixes).toFixed(2)
  mediumSection.innerText=medium(sixes)
}
const rolling12 = function(){
  let result = getRandomNumber(12)
  twelves.push(result)
  d12Img.src='images/numbers/'+result+'.png'
  meanSection1.innerText = mean(twelves).toFixed(2)
  mediumSection1.innerText = medium(twelves)
}
const rolling20 = function(){
  let result = getRandomNumber(20)
  twenties.push(result)
  d20Img.src='images/numbers/'+result+'.png'
  meanSection2.innerText = mean(twenties).toFixed(2)
  mediumSection2.innerText = medium(twenties)
}
const rolling26 = function(){
  let result1 = getRandomNumber(6)
  let result2 = getRandomNumber(6)
  doubleSixes.push(result1 + result2)
  d61Img.src='images/d6/'+result1+'.png'
  d62Img.src='images/d6/'+result2+'.png'
  meanSection3.innerText = mean(doubleSixes).toFixed(2)
  mediumSection3.innerText = medium(doubleSixes)
}
/******************
 * BUTTON QUERIES *
 ******************/



/******************
 * CLICK HANDLERS *
 ******************/
dImg.addEventListener('click',rolling6)
d12Img.addEventListener('click',rolling12)
d20Img.addEventListener('click',rolling20)
d61Img.addEventListener('click',rolling26)
d62Img.addEventListener('click',rolling26)


/*******************
 * EVENT LISTENERS *
 *******************/


/****************
 * MATH SECTION *
 ****************/


const medium = function(array){
  let newArray = sortByNumber(array)
  let result = ''
  const midNum = Math.floor(array.length/2)
  for(let i = 0; i < newArray.length;i++){
    if(i===0){
      result = newArray[i]
    }
    else if(newArray.length %2 === 0){
      result = newArray[newArray.length/2]
    }else if(newArray.length %2 !== 0)
    { 
      result= (newArray[midNum - 1] + newArray[midNum]) / 2
  }
}return result
}

  const mean = function(array){
    let result = 0
    for (const number of array){
      result += number
    }return result/array.length
  }

  const resetAll = function(){
      sixes.splice(0,sixes.length)
      twenties.splice(0,twenties.length)
      twelves.splice(0,twelves.length)
      doubleSixes.splice(0,doubleSixes.length)
      dImg.src="images/start/d6.png"
      d61Img.src="images/start/d6.png"
      d62Img.src="images/start/d6.png"
      d12Img.src="images/start/d12.jpeg"
      d20Img.src="images/start/d20.jpg"
      meanSection.innerText=''
      mediumSection.innerText=''
      meanSection1.innerText=''
      mediumSection1.innerText=''
      meanSection2.innerText=''
      mediumSection2.innerText=''
      meanSection3.innerText=''
      mediumSection3.innerText=''
    }
  
/********************
* MATH-AREA QUERIES *
********************/
let test = document.querySelector('#d6-averages')
let mediumSection = document.querySelector('#d6-rolls-median')
let meanSection = document.querySelector('#d6-rolls-mean')

let mediumSection1 = document.querySelector('#d12-rolls-median')
let meanSection1 = document.querySelector('#d12-rolls-mean')

let mediumSection2 = document.querySelector('#d20-rolls-median')
let meanSection2 = document.querySelector('#d20-rolls-mean')

let mediumSection3 = document.querySelector('#double-d6-rolls-median')
let meanSection3 = document.querySelector('#double-d6-rolls-mean')

let resetButton = document.querySelector('#reset-button')
resetButton.addEventListener('click',resetAll)