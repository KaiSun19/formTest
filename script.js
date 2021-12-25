const form = document.querySelector(".dataForm")
const formInputs = document.querySelectorAll("[required]")
const submitButton = document.getElementById("submit")

submitButton.addEventListener("click",function(){
    let formCorrect = true;
    Array.from(formInputs).forEach(input =>{
        if(!input.value){
            formCorrect = false
        } 
    })
    if(formCorrect == true){
        alert("Thank You")
    }
}
)
