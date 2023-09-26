const Title = document.querySelector("#title");
let currValue=0;
const btnInc= document.querySelector("#inc");
const btnDes = document.querySelector("#des");
const btnRes =document.querySelector("#res");

btnInc.addEventListener('click', ()=>{
    currValue++;
    Title.textContent=currValue;
});


btnDes.addEventListener('click', ()=>{
    currValue--;
    Title.textContent=currValue;
})

btnRes.addEventListener('click', ()=>{
    currValue=0;
    Title.textContent=currValue;
})