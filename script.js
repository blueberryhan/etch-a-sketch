const grid = document.querySelector('.container');

for ( i = 0; i <= 255; i++) {
    const gridCell = document.createElement('div');
    gridCell.classList.add('cell');
    grid.appendChild(gridCell);

    gridCell.addEventListener('mouseover', () => {
        gridCell.style.backgroundColor = 'black';
    });
}



