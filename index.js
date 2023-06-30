const table = document.createElement('table');

for (let i = 0; i < 10; i++) {
    const tr = document.createElement('tr');

    for (let j = 0; j < 10; j++) {
        const td = document.createElement('td');
        td.innerText = i * 10 + j + 1;
        tr.append(td);
    }

    table.append(tr);
}

document.body.append(table);