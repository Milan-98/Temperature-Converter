let selection1 = document.querySelector(".celsius");
let selection2 = document.querySelector(".fheat");
let milan ;
selection1.addEventListener("input",function(){
    milan = this.value;
    selection2.value = milan*(9/5)+32;
});
selection2.addEventListener("input",function(){
    milan=this.value;
    selection1.value =[(milan-32)*5]/9;
})
