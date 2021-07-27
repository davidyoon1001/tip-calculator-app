let bill, tip, ppl_num;

let bill_input = document.getElementById("bill");
let tip_input = document.getElementById("custom_tip");
let tip_options = document.querySelector(".options").querySelectorAll("Label");
let ppl_input = document.getElementById("ppl_number");
let reset_btn = document.querySelector("button");
let tip_result = document.getElementById("tip_per_person");
let total_result = document.getElementById("total_per_person");


function calculate(){
    let total;
    
    total = Math.round(bill_input.value/ppl_input.value);
    total_result.innerText =  `$${total}`;
    console.log(bill_input.value);

    console.log(ppl_input.value);
    console.log(total);
}