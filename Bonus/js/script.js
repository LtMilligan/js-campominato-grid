const grid = document.getElementById('grid');
const btnStart = document.getElementById('btn-start')

btnStart.addEventListener('click', function() {
    for (let i = 0; i < 100; i++) {
        let currentSquare = createSquare()
        currentSquare.innerText = i + 1;
    }

})
























function createSquare() {
    let currentElement = document.createElement('div');
    currentElement.classList.add('square');
    return currentElement
}