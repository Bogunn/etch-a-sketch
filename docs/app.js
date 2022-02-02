/* generate a gameboard
1. needs have same number of rows and columns
2. needs to be dynamic 
3. cells should hightligh when hovered over and remain that color. 
4. needs to be resetable 

*/

const gameArea =document.querySelector('.game-area')
const gameBoard = document.createElement('div')
const height = 300;
const width = 300;
const area = height * width; 
gameBoard.style.height = `${height}px`;
gameBoard.style.width = `${width}px`;
gameBoard.style.backgroundColor = 'grey'
gameBoard.classList.add("game-board")
gameArea.appendChild(gameBoard);
const button = document.createElement('button');
button.innerHTML = "Grid Size"
gameArea.appendChild(button)



slider.oninput = function () {
    output.innerHTML = this.value;
    //const num = slider.value;

}

button.addEventListener('click', generateRows)

function generateRows (){
    let input = prompt("Grid size: ")
    num = Number(input);
    while(gameBoard.firstChild){
        gameBoard.removeChild(gameBoard.firstChild)

    }

    for (i = 1; i <= num; i++){
        let gameRow = document.createElement('div')
        gameRow.style.height = `${height/num}px`
        gameBoard.appendChild(gameRow)
        gameRow.classList.add('game-row')
        for (r = 1; r <= num; r++){
             let gamePiece = document.createElement('div');
         gamePiece.classList.add('game-piece')
       gamePiece.style.backgroundColor = "blue";
        gamePiece.style.height = `${height/num}px`;
        gamePiece.style.width = `${width/num}px`;
        gamePiece.addEventListener('mouseover', (e)=>{
            gamePiece.style.backgroundColor ='white'
        })
       gameRow.appendChild(gamePiece);
        }
        
    }
    const gridSize = document.createElement('div');
    gameArea.appendChild(gridSize)
    gridSize.innerHTML = input;
    
}


function deleteRows () {
    let removeRow = document.querySelector('.game-board')
   
    
    /* for (i = 0; i<=num; i++){
       let removePiece = removeRow)
       console.log(removePiece);
    } */

    /* removeRow.removeChild(removeRow.lastChild) */
    console.log(removeRow.lastElementChild)
    removeRow.lastChild.remove();

    //generateRows


}