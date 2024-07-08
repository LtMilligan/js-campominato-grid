const easyGame = document.getElementById('btn-facile');
const midGame = document.getElementById('btn-medio');
const hardGame = document.getElementById('btn-difficile');
const grid = document.getElementById('grid');



easyGame.addEventListener('click', function() {
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
      }
    for (let i = 0; i < 100; i++) {
        let currentSquare = createSquareEasy()
        currentSquare.addEventListener('click', function() {
            this.classList.toggle('clicked')
        })
        currentSquare.innerText = i + 1;
        grid.append(currentSquare)
    
    }

});
midGame.addEventListener('click', function() {
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
      }
    for (let i = 0; i < 81; i++) {
        let currentSquare = createSquareMid()
        currentSquare.addEventListener('click', function() {
            this.classList.toggle('clicked')
        })
        currentSquare.innerText = i + 1;
        grid.append(currentSquare)
    
    }

});
hardGame.addEventListener('click', function() {
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
      }
    for (let i = 0; i < 49; i++) {
        let currentSquare = createSquareHard()
        currentSquare.addEventListener('click', function() {
            this.classList.toggle('clicked')
        })
        currentSquare.innerText = i + 1;
        grid.append(currentSquare)
    
    }

});

function createSquareEasy() {
    let currentElement = document.createElement('div');
    currentElement.classList.add('square-easy');
    return currentElement
};

function createSquareMid() {
    let currentElement = document.createElement('div');
    currentElement.classList.add('square-mid');
    return currentElement
};

function createSquareHard() {
    let currentElement = document.createElement('div');
    currentElement.classList.add('square-hard');
    return currentElement
};