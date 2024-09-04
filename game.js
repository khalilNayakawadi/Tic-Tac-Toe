let boxes = document.getElementsByClassName("btn");
let resetbtn = document.querySelector(".resetbtn");
let turnO = true;

for (const box of boxes) {
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
            
        }else{
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;
    })

    
}