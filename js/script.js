const container = document.querySelector('.dc-container');
const btnStart = document.getElementById('start');
let bombs = [];
const difficulty = document.getElementById('difficulty');

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
        square.addEventListener('click', function(){
            if(bombs.includes(this._SquareID)){
                this.classList.add('bomb')
            }
            this.classList.add('clicked')
            console.log(this._SquareID);
        }) 
        container.append(square);
    }
    createBomb();
    console.log(bombs)
}

function reset(){
    container.innerHTML= '';
    bombs = [];
    return container;
}

function createSquare(index){
    const newSquare = document.createElement('div');
    newSquare._SquareID = index;
    newSquare.className = 'square'
    return newSquare;
}

function randomizer(min, max){
    return Math.floor((Math.random()* max)+ min);
}

function createBomb(){
    for(c = 1; c <= 16; c++){
        let bombValid = false;
        do{
            bomb = randomizer(1, difficulty.value);
            const bombCreated = bomb;
            bombValid = bombs.includes(bomb);
            if(!bombValid){
                bombs.push(bomb);
            }
        }while(bombValid)
    }
}