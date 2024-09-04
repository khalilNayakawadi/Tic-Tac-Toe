let boxes = document.getElementsByClassName("btn");
let resetbtn = document.querySelector(".resetbtn");
let turnO = true;

for (const box of boxes) {
    box.addEventListener("click",()=>{
        if(turnO){
            box.classList.add("flip-horizontal-bottom")
            box.innerText = "O";
            turnO = false;
            
        }else{
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    } )
}

resetbtn.addEventListener("click",()=>{
    for (const box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
})


let winningPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]

const checkWinner = ()=>{
    for (const pattern of winningPatterns) {

        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;
        if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
            if(posVal1 == posVal2 && posVal2 == posVal3)
            {
                if(posVal1 === "O")
                {
                    document.querySelector(".heading").innerText = "Player 1 Win 👑"
                }
                else{
                     document.querySelector(".heading").innerText = "Player 2 Win👑"
                }

            }
        }
    }
   
    
}

