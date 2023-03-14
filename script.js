const grid = document.querySelector('.container');

grid.style.gridTemplateColumns = 'repeat(16, 1fr)';
    for ( i = 0; i <= 255; i++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('cell-sixteen');
        grid.appendChild(gridCell);

        gridCell.addEventListener('mouseover', () => {
        gridCell.style.backgroundColor = 'black';
        });
    }

function userInputGrid() {

    let gridInput = prompt('Please input grid dimensions');
    grid.innerHTML = '';
    grid.style.gridTemplateColumns = `repeat(${gridInput}, 1fr)`;
    for ( i = 0; i <= (gridInput * gridInput) - 1; i++) {
        if (gridInput > 100) {
            alert('Please input number less than 100 :)');
            return userInputGrid();
        }
        else if (gridInput < 0) {
            alert('Please input number greater than zero :)');
            return userInputGrid();
        }
        const gridCell = document.createElement('div');
        gridCell.classList.add('cell-twenty-four');
        grid.appendChild(gridCell);
        
        gridCell.addEventListener('mouseover', () => {
        gridCell.style.backgroundColor = 'black';
        });

    }

};

const dimensionButton = document.querySelector('.dimension-button');
dimensionButton.addEventListener('click', userInputGrid);