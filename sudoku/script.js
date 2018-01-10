var sudokuData = [
    ['', '', 6, 4, 7, '', 9, 3, ''], [4, '', 9, '', 2, '', 7, '', 1], ['', 7, '', '', '', 9, 8, '', ''],
    ['', 4, 7, '', '', '', '', '', ''], ['', 9, '', 8, '', 3, '', 4, ''], ['', '', '', '', '', '', 5, 8, ''],
    ['', '', 3, 7, '', '', '', 2, ''], [2, '', 7, '', 6, '', 9, '', 5], ['', 6, 5, '', 2, 1, 7, '', '']
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

function solve(sudoku) {
    
    for (var array in sudoku) {
        for (var cell in array) {
            if (cell === '') {

            }
        }
    }
}

function is_empty(sudoku) {
    for (var x = 0; x < sudoku.length; x++) {
        for (var y = 0; y < sudoku[x].length; y++) {
            if (sudoku[x][y] === ''){
                return true;
            }
            else{
                return false;
            }
        }
    }
}

generateSudoku('#sudoku', sudokuData);



