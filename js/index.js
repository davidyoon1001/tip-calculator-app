let bill, tip, ppl_num;

let bill_input = document.getElementById("bill");
let tip_input = document.getElementById("custom_tip");
let tip_options = document.querySelector(".options").querySelectorAll("input");
let ppl_input = document.getElementById("ppl_number");
let reset_btn = document.querySelector("button");
let tip_result = document.getElementById("tip_per_person");
let total_result = document.getElementById("total_per_person");

function calculate(bill, tip, ppl){
    let total;
    let tip_amount;
    tip_amount = roundToTwo((bill / ppl) * (tip / 100));
    total = roundToTwo((bill_input.value/ppl) + tip_amount);
    total_result.innerText =  `$${total}`;
    tip_result.innerText = `$${tip_amount}`;
}

// reset button checker
[bill_input, ppl_input].map((elem)=>{
    elem.addEventListener("change", function(){
        if(elem.value == ""){
                console.log("shit");
        }
        else{
            reset_btn.disabled = false;
            if(elem.id == "bill"){
                if(ppl_input.value == ""){
                    console.log(ppl_input);
                    ppl_input.parentElement.children[0].children[1].style.display = "inline-block";
                }
                else{
                    calculate(bill_input.value, 0, ppl_input.value);
                }
            }
        }
    })
})
function checkInput(){
    [bill_input, ppl_input].map((elem)=>{
        if(elem.value == "" || elem.value < 1){
            elem.parentElement.children[0].children[1].style.display = "inline-block";
            return true;
        }
        else{
            elem.parentElement.children[0].children[1].style.display = "none";
            return false;
        }
    })
    
}


tip_options.forEach((elem)=>{
    elem.addEventListener("click", function(){
        if(checkInput()){
            console.log("true");
        }
        else{
            let tip_opt = document.getElementById(elem.getAttribute("id")).name;
            calculate(bill_input.value, tip_opt, ppl_input.value);
            console.log("false");
        }
        
    })
})

tip_input.addEventListener("change", function(){
    calculate(bill_input.value, tip_input.value, ppl_input.value);
    reset_btn.disabled = false;
})

function roundToTwo(num){
    return +(Math.round(num + "e+2") + "e-2");
}

reset_btn.addEventListener("click" , function(){
    bill_input.value = "";
    tip_input.value = "";
    ppl_input.value = 1;
    [tip_result,total_result].map( elem => elem.innerText = "$0");
    reset_btn.disabled = true ; 
})