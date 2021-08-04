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
    tip_amount = roundToTwo((bill / ppl_input.value) * (tip / 100));
    total = roundToTwo((bill_input.value/ppl_input.value) + tip_amount);
    total_result.innerText =  `$${total}`;
    tip_result.innerText = `$${tip_amount}`;

}

function roundToTwo(num){
    return +(Math.round(num + "e+2") + "e-2");
}

[bill_input, ppl_input].map(function(elem){
    elem.addEventListener("change", function(){
        console.log("triggered");
        if(elem.value < 1){
            elem.parentElement.children[0].children[1].style.display = "inline-block";
        }
    })
})

tip_options.forEach((elem)=>{
    elem.addEventListener("click", function(){
        let tip_opt = document.getElementById(elem.getAttribute("id")).name;
        calculate(bill_input.value, tip_opt, ppl_input.value);
    })
})

tip_input.addEventListener("change", function(){
    calculate(bill_input.value, tip_input.value, ppl_input.value);
})