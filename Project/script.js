const numbers = document.querySelectorAll(".digits");
const operators = document.querySelectorAll("#operator");
const calculatorScreen = document.querySelector('.screen')
const equalSign =document.querySelector('#equal')
const allclear=document.querySelector('#clear')
const back=document.querySelector('#backspace')
const close=document.querySelector('#off')


let currentInput ='0'
let calculationOperator=''
let prevInput='0'


const updateScreen = (digits) =>{
  calculatorScreen.value= digits
}

const inputOperator =(operator)=>{
  prevInput=currentInput
  calculationOperator = operator
  currentInput ='0'
  updateScreen(prevInput+calculationOperator)
}

const inputNumber = (digits) =>{
  if(currentInput==='0'){
    currentInput=digits
  }else{
  currentInput += digits
}
}

operators.forEach((operator) => {
  operator.addEventListener("click", (event)=>{

inputOperator(event.target.value)

})
})

numbers.forEach((digits) => {
  digits.addEventListener("click", (event)=>{

inputNumber(event.target.value)
  updateScreen(currentInput);
})
})

equalSign.addEventListener("click", ()=>{
calculate()
updateScreen(currentInput)

})

allclear.addEventListener("click", ()=>{
updateScreen('0')
currentInput='0'
prevInput='0'
calculationOperator=''
})

back.addEventListener("click", ()=>{
let temp=currentInput.substring(0,currentInput.length-1)
updateScreen(temp)
currentInput=temp
})

close.addEventListener("click", ()=>{
updateScreen('')
currentInput='0'
prevInput='0'
calculationOperator=''
})


const calculate = ()=>{
  let ans=0

  prevInput=parseFloat(prevInput)
  currentInput=parseFloat(currentInput)
  switch(calculationOperator){
    case '+':
    ans=prevInput+currentInput
    break;
    case '-':
    ans=prevInput-currentInput
    break;
    case '*':
    ans=prevInput*currentInput
    break;
    case '/':
    ans=prevInput/currentInput
    break;
    default:
    return
  }
  currentInput=ans.toString()
  calculationOperator=''
}
