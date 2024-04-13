const info=document.getElementById("info")
let audio=new Audio("Untitled video - Made with Clipchamp.mp4")
let winAudio=new Audio("ding-36029.mp3")
const emoji=document.getElementById("emoji");
const container=document.getElementById("container")
const box=document.getElementsByClassName("box");
console.log(box)
const reset=document.getElementById("reset");
let turn="X"; 
const changeTurn=()=>{
    return turn==="X"?"0":"X";
}
reset.addEventListener('click',()=>{
    emoji.style.display="none"
    for (i of box){
        i.querySelector('span').innerHTML ="";
        info.innerHTML = "Turn for X";
        i.classList.remove("winning-cell");
    }
})
container.addEventListener("click",function(e){
    console.log(e.target)
   if(!checkWin()){

       const spanElement = e.target.querySelector('span');
       console.log(spanElement)
       if(spanElement && spanElement.innerHTML===""){
           
           audio.play();
           
           
           spanElement.innerHTML=turn;
           turn=changeTurn()
           
           if (info.innerHTML === "Turn for X") {
               info.innerHTML = "Turn for Y";
            } else {
                info.innerHTML = "Turn for X";
            }
        }
       
        if(checkWin()){
            winAudio.play()
            emoji.style.display="block"
            info.innerHTML = turn +" wins";
        }

    }
    
})
const checkWin=()=>{
    const winConditions = [
        // Rows
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        // Columns
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        // Diagonals
        [0, 4, 8], [2, 4, 6]
    ];

    // Iterate through each win condition
    for (let condition of winConditions) {
        const [a, b, c] = condition;
        // Check if all cells in the condition have the same value
        if (box[a].querySelector('span').innerHTML !== "" && 
        box[a].querySelector('span').innerHTML === box[b].querySelector('span').innerHTML && 
        box[a].querySelector('span').innerHTML === box[c].querySelector('span').innerHTML) {
            box[a].classList.add('winning-cell');
            box[b].classList.add('winning-cell');
            box[c].classList.add('winning-cell');
        return true; // Return true if a player wins
    }
    }
    return false; 
}