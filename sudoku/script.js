var sudokuData = [
    [7, 2, '', '', 5, '', '', '', ''], ['', '', '', '', '', 9, '', 3, 8], ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', 3, '', '', 2], [4, '', '', '', '', '', '', '', 3], [5, '', '', 8, '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''], [2, 5, '', 6, '', '', '', '', ''], ['', '', '', '', 3, '', '', 1, 9]
];

/**
 * @param target String Un selecteur HTML
 * @param data Array Les données du sudoku
 */
function generateSudoku(target, data) {
    var sudoku = document.querySelector(target),
        line = null,
        row = null;

    for (var i = 0, l = data.length; i < l; i++) {
        var subArrayData = data[i],
            subArray = document.createElement('table'),
            subLine = null,
            subRow = null;
        subRow = null;

        if (i % 3 === 0) {
            line = document.createElement('tr');
            sudoku.appendChild(line);
        }

        row = document.createElement('td');
        row.appendChild(subArray);

        line.appendChild(row);

        for (var j = 0, ll = subArrayData.length; j < ll; j++) {

            if (j % 3 === 0) {
                subLine = document.createElement('tr');
                subArray.appendChild(subLine);
            }

            subRow = document.createElement('td');
            subRow.innerText = subArrayData[j];

            subLine.appendChild(subRow)
        }
    }
}

function solve_sudoku(sudoku) {
    for (var i = 0; i < sudoku.length; i++) {
        for (var j = 0; j < sudoku[i].length; j++) {
            if (sudoku[i][j] == '') {
                sudoku[i][j] = Math.floor((Math.random() * 9) + 1);
                while (sudoku[i][j] == sudoku[i][j + 1]
                || sudoku[i][j] == sudoku[i][j + 2]
                || sudoku[i][j] == sudoku[i][j - 1]
                || sudoku[i][j] == sudoku[i][j - 2]) {
                    sudoku[i][j] = Math.floor((Math.random() * 9) + 1);
                }
            }
        }
    }
    return (sudoku);
}

function check_cell(data) {
    var tab = [];
    for (var i = 0; i < data.length; i++) {
        tab[i] += data[i].slice(0);
    }
    for (var i = 0; i < tab.length; i++) {
        for (var j = 0; j < tab[i].length; j++) {
            if (tab[i][j] === '') {
                tab[i][j] = 'true';
            }
            else {
                tab[i][j] = 'false';
            }
        }
    }
    return tab;
}

tab2 = check_cell(sudokuData);
console.log(tab2);
generateSudoku('#sudoku', sudokuData);
generateSudoku('#sudoku', solve_sudoku(sudokuData));
