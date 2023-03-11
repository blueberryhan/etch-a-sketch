const grid = document.querySelector('.container');

for ( i = 0; i <= 15; i++) {
    const gridCell = document.createElement('div');
    gridCell.classList.add('cell');
    grid.appendChild(gridCell);
}

console.log(grid);

