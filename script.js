const grid = document.querySelector('.container');

function x16Grid() {

    for ( i = 0; i <= 255; i++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('cell-sixteen');
        grid.appendChild(gridCell);

        gridCell.addEventListener('mouseover', () => {
        gridCell.style.backgroundColor = 'black';
        });
    }

};

function x24Grid() {

    grid.style.gridTemplateColumns = 'repeat(24, 1fr)';
    for ( i = 0; i <= 575; i++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('cell-twenty-four');
        grid.appendChild(gridCell);
    
        gridCell.addEventListener('mouseover', () => {
            gridCell.style.backgroundColor = 'black';
        });
    }

};

x24Grid();



