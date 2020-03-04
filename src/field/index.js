import './style.css';

const ROWS_COUNT = 3;
const COLS_COUNT = 3;

const field = document.querySelector('.field');

function generateCols(row, colsCount, rowId) {
  for (let i = 0; i < colsCount; i += 1) {
    const id = rowId * colsCount + i;
    const col = document.createElement('div');
    col.id = `c-${id}`;
    col.dataset.id = id;
    col.className = 'cell';
    row.appendChild(col);
  }
}

export default function generateRows(rowsCount = ROWS_COUNT, colsCount = COLS_COUNT) {
  for (let i = 0; i < rowsCount; i += 1) {
    const row = document.createElement('div');
    row.className = 'row';
    generateCols(row, colsCount, i);
    field.appendChild(row);
  }
}
