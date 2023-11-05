function changeColor(){
    var button=document.getElementById('colorButton');
    if(button.classList.contains('default')){
        button.classList.remove('default');
        button.classList.add('clicked');
    }
    else{
        button.classList.remove('clicked');
        button.classList.add('default');

    }
}
function calculate(){
    var num1=parseFloat(document.getElementById('num1').value);
    var num2=parseFloat(document.getElementById('num2').value);
    if(isNaN(num1)||isNaN(num2)){
        alert('Please enter valid number');
        return;
    }
    var sum=num1+num2;
    document.getElementById('result').textContent="Result:"+sum;
}
const btn=document.querySelector('.btn');
btn.addEventListener('click',()=>{
       btn.computedStyleMap.backgroundColor='#0ebfdb';
       btn.computedStyleMap.boxShadow='0 0 10px #0ebfdb';
});
