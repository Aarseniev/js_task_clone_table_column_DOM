'use strict';

// write your code here
function cloneRow() {
  const mainTable = document.querySelector('table');
  const tHead = mainTable.querySelector('thead');
  const tBody = mainTable.querySelector('tbody');
  const tFoot = mainTable.querySelector('tFoot');

  tHead.querySelectorAll('tr').forEach((row) => {
    const cells = row.querySelectorAll('th');
    const secondCell = cells[1];
    const lastCell = cells[cells.length - 1];

    if (row.cells.length < 2) {
      return;
    }

    const clonedCell = secondCell.cloneNode(true);

    row.insertBefore(clonedCell, lastCell);
  });

  tBody.querySelectorAll('tr').forEach((row) => {
    const cells = row.querySelectorAll('td');
    const secondCell = cells[1];
    const lastCell = cells[cells.length - 1];

    if (row.cells.length < 2) {
      return;
    }

    const clonedCell = secondCell.cloneNode(true);

    row.insertBefore(clonedCell, lastCell);
  });

  tFoot.querySelectorAll('tr').forEach((row) => {
    const cells = row.querySelectorAll('th');
    const secondCell = cells[1];
    const lastCell = cells[cells.length - 1];

    if (row.cells.length < 2) {
      return;
    }

    const clonedCell = secondCell.cloneNode(true);

    row.insertBefore(clonedCell, lastCell);
  });
}

cloneRow();
