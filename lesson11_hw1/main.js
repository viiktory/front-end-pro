function generateTable(num) {
    const table = document.getElementById('table-container');

    for (let i = 1; i <= num; i++) {
        const row = document.createElement('tr');

        for (let j = 1; j <= num; j++) {
            const cell = document.createElement('td');
            cell.textContent = i * j;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

generateTable(10);