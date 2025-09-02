'use strict';

// write your code here
const mainTable = document.querySelector('table');

const allRows = mainTable.querySelectorAll('tr');

allRows.forEach((row) => {
  const cells = row.querySelectorAll('td, th');
  const secondCell = cells[1];
  const lastCell = cells[cells.length - 1];

  const clonedCell = secondCell.cloneNode(true);

  row.insertBefore(clonedCell, lastCell);
});
