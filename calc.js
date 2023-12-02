const start= document.querySelector(".display")
const btns=document.querySelectorAll("button")
console.log(start,btns)
const chars=["/", "+", "-", "*", "%", "="]
let output=""
const calculate =(btnvalue)=>{
    if(btnvalue == "=" && btnvalue !== ""){
        output=eval(output.replace("%","/100"));
    }
    else if(btnvalue == "AC"){
        output="";
    }
    else if(btnvalue == "DEL"){
        output=output.toString().slice(0,-1);

    }else{
        if(output==="" && chars.includes())return;
        output +=btnvalue
    }
  start.value=output
}
btns.forEach((btn)=>{
    //calculate the dataset
    btn.addEventListener('click',e =>calculate(e.target.dataset.value))
})