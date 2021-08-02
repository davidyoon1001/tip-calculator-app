let bill, tip, ppl_num;

let bill_input = document.getElementById("bill");
let tip_input = document.getElementById("custom_tip");
let tip_options = document.querySelector(".options").querySelectorAll("input");
let ppl_input = document.getElementById("ppl_number");
let reset_btn = document.querySelector("button");
let tip_result = document.getElementById("tip_per_person");
let total_result = document.getElementById("total_per_person");

function calculate(){
    let total;
    let tip_amount;
    total = Math.round(bill_input.value/ppl_input.value);
    total_result.innerText =  `$${total}`;
    
}

function testfunction(index){
    console.log(index.value);
}

tip_options.forEach((elem)=>{
    elem.addEventListener("click", function(){
        console.log(document.getElementById(elem.getAttribute("id")).name);
        custontip = document.getElementById(elem.getAttribute("id")).value;
        console.log(custontip);
    })
})
[bill_input, ppl_input].map((elem)=>{
    elem.addEventListener("change", function(){
       console.log(elem.value);
    })
})
