const grid = document.getElementById('grid');
const btnStart = document.getElementById('btn-start')

btnStart.addEventListener('click', function() {
    for (let i = 0; i < 100; i++) {
        let currentSquare = createSquare()
        currentSquare.addEventListener('click', function() {
            this.classList.toggle('clicked')
            console.log(currentSquare.innerText)
        })
        currentSquare.innerText = i + 1;
        grid.append(currentSquare)
    }

})
























function createSquare() {
    let currentElement = document.createElement('div');
    currentElement.classList.add('square');
    return currentElement
}