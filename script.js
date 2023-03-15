const grid = document.querySelector('.container');

function defaultGrid() {

grid.style.gridTemplateColumns = 'repeat(16, 1fr)';
    for ( i = 0; i <= 255; i++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('cell-sixteen');
        grid.appendChild(gridCell);

        gridCell.addEventListener('mouseover', () => {
        gridCell.style.backgroundColor = 'black';
        });
    }
}

function userInputGrid() {

    let gridInput = prompt('Please input grid dimensions. MAX: 100');

    if (gridInput === null) {
        return;
    }
    grid.innerHTML = '';

    grid.style.gridTemplateColumns = `repeat(${gridInput}, 1fr)`;

    for ( i = 0; i <= (gridInput * gridInput) - 1; i++) {
        if (gridInput > 100 || gridInput < 0) {
            alert('Please input valid integer value :)');
            return defaultGrid();
        };
        
        const gridCell = document.createElement('div');
        gridCell.classList.add('cell-dimension-input');
        grid.appendChild(gridCell);
        
        gridCell.addEventListener('mouseover', () => {
        gridCell.style.backgroundColor = 'black';

        })
    };

};

function colorChange() {
    
    let gridInput = prompt('GAMER MODE ENGAGED, PLS INPUT DIMENSIONS. MAX: 100');

    if (gridInput === null) {
        return;
    }
    grid.innerHTML = '';

    grid.style.gridTemplateColumns = `repeat(${gridInput}, 1fr)`;

    for ( i = 0; i <= (gridInput * gridInput) - 1; i++) {
        if (gridInput > 100 || gridInput < 0) {
            alert('Please input valid integer value :)');
            return defaultGrid();
        };
        
        const gridCell = document.createElement('div');
        gridCell.classList.add('cell-dimension-input');
        grid.appendChild(gridCell);
        

        let randomColor = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
        gridCell.addEventListener('mouseover', () => {
        gridCell.style.backgroundColor = randomColor;
        });
    }
}

const dimensionButton = document.querySelector('.dimension-button');
dimensionButton.addEventListener('click', userInputGrid);

defaultGrid();

const colorChangeButton = document.querySelector('.color-change-button');
colorChangeButton.addEventListener('click', colorChange);




