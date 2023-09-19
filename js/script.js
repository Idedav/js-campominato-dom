const container = document.querySelector('.dc-container');
const btnStart = document.getElementById('start');
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
            this.classList.toggle('clicked')
            console.log(this._SquareID);
        })
        container.append(square)
    }
}
function reset(){
    container.innerHTML= ''
    return container;
}

function createSquare(index){
    const newSquare = document.createElement('div');
    newSquare._SquareID = index;
    newSquare.className = 'square'
    return newSquare;
}