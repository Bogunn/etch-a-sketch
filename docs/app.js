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
/* const button = document.createElement('button');
button.innerHTML = "Grid Size"
gameArea.appendChild(button)
 */


slider.oninput = function () {
    output.innerHTML = this.value;
    const num = slider.value;
    generateRows(num);

}

//button.addEventListener('click', generateRows)

function generateRows (num){
    //let input = prompt("Grid size: ")
    num = Number(num);
    const gridSize = document.createElement('div');
    if (gameBoard.firstChild){
         while(gameBoard.firstChild){
        gameBoard.removeChild(gameBoard.firstChild)
       

    }
    }; 
   

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
        gamePiece.addEventListener('mouseover', ()=>{
            gamePiece.style.backgroundColor ='white'
        })
       gameRow.appendChild(gamePiece);
        }
    }
    
   
    num = 0; 
    
}


