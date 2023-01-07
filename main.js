import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

console.log(1)

let priceField = document.querySelector('#price')
let pplField = document.querySelector('#ppl')

priceField.addEventListener('change', output)
pplField.addEventListener('change', output)

var price;
var ppl;
var tip = 0.00;

const keys = document.querySelector('.tips')
console.log(keys)

"change click".split(" ").forEach(function(e){
  keys.addEventListener(e, e => {
    let id = e.target.id
    if (id === "custom") {
      tip = Number(e.target.value)/100
    } else {
      tip = Number(id)
    }
    console.log(tip)
    output()
  })
});

let resetButton = document.getElementById("resetButton")
resetButton.addEventListener('click', reset)

function output() {
  let resetButton = document.getElementById("resetButton")
  resetButton.style.opacity = 1

  price = Number(priceField.value).toFixed(2)
  ppl = Math.ceil(Number(pplField.value))
  
  console.log(price)
  console.log(ppl)
  console.log(tip)

  if (ppl === 0) {
    errorFunc()
    document.getElementById("total").textContent='$0.00';
  } else {
    clearError()
    let total = price * (1 + tip)
    let totalTip = price * tip
    let finalTip = '$' + String((totalTip).toFixed(2))
    let finalTotal = '$' + String((total).toFixed(2));
    console.log(total);
    document.getElementById("total").textContent=finalTotal;
    document.getElementById("tipamount").textContent=finalTip;
  }
}

function errorFunc() {
  let errorTag = document.getElementById("error");
  let errorBorder = document.getElementById("pplfield")
  errorBorder.style.border = "2px solid #B48373"
  errorTag.style.display = "block"
}

function clearError() {
  let errorTag = document.getElementById("error");
  let errorBorder = document.getElementById("pplfield")
  errorBorder.style.border = "none"
  errorTag.style.display = "none"
}

function reset() {
  document.getElementById('price').value = '';
  document.getElementById('ppl').value = '';
  document.getElementById('custom').value = '';
  document.getElementById("total").textContent='$0.00';
  document.getElementById("tipamount").textContent='$0.00';

  let resetButton = document.getElementById("resetButton")
  resetButton.style.opacity = 1
}

