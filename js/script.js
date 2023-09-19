const container = document.querySelector('.dc-container');
const btnStart = document.getElementById('start');
const gameFreeze = document.querySelector('.end-game');
let bombs = [];
const difficulty = document.getElementById('difficulty');
let points = 0;
let endGame = false;
let message;

btnStart.addEventListener('click', function(){
    reset();
    start();
})


// --------FUNCTIONS----------
function start(){
    for(let i = 1; i <= difficulty.value; i++){
        const square = createSquare(i);
        if(difficulty.value == 81){
            square.classList.add('medium');
        }else if(difficulty.value == 49){
            square.classList.add('hard');
        }
        container.append(square);
        square.addEventListener('click', clickedCell);
    }
    createBomb();
    console.log(bombs);
}

function reset(){
    container.innerHTML= '';
    bombs = [];
    points = 0;
    document.getElementById('message-output').innerHTML = '';
    gameFreeze.classList.add('d-none');
    return container;
}

function createSquare(index){
    const newSquare = document.createElement('div');
    newSquare._SquareID = index;
    newSquare.className = 'square'
    return newSquare;
}

function clickedCell(){
    if(bombs.includes(this._SquareID)){
        this.classList.add('bomb');
        endGame = true;
        gameFreeze.classList.remove('d-none');
        message = `<h1>Hai perso, totalizzando ${points} punti su ${difficulty.value - bombs.length + 1}</h1>`
        printer();
    }
    this.classList.add('clicked');
    points++
    if(points == (difficulty.value - bombs.length)){
        endGame = true;
        gameBlock.classList.remove('d-none');
        message = `<h1>Hai vinto! totalizzando ${points} punti su ${difficulty.value - bombs.length + 1}</h1>`
        printer();
    }
    this.removeEventListener('click', clickedCell);
    console.log(points);
    console.log(this._SquareID);
}

function randomizer(min, max){
    return Math.floor((Math.random()* max)+ min);
}

function createBomb(){
    for(c = 1; c <= 16; c++){
        let bombValid = false;
        do{
            bomb = randomizer(1, difficulty.value);
            bombValid = bombs.includes(bomb);
            if(!bombValid){
                bombs.push(bomb);
            }
        }while(bombValid)
    }
}

function printer(){
    document.getElementById('message-output').innerHTML = message;
}
