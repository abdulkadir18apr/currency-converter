const inputValue=document.querySelector('#INR');
const convertCurrency=document.querySelector('#currencies');
const convertBtn=document.querySelector('#convert-btn');
const outputDiv=document.querySelector('#output')
var amount=Number(inputValue.value);
console.log(amount)

convertBtn.addEventListener('click',convertBtnEventHandler);


var myHeaders = new Headers();
myHeaders.append("apikey", "Scd3q3qMoZVzsk5FJidGDLioj53pCWCO");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};
function convertBtnEventHandler(){
    var convert=convertCurrency.options[convertCurrency.selectedIndex].text;
    var amount=Number(inputValue.value);
    fetch(`https://api.apilayer.com/fixer/convert?to=${convert}&from=INR&amount=${amount}`, requestOptions)
  .then(response => response.json())
  .then(result=>outputDiv.innerText=(result.result))
  .catch(error => console.log('error', error))
}

