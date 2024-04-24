
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}

function appendDeleteBtn(tr){
  let newButton = document.createElement('button');
  newButton.innerText = 'X';
  newButton.classList.add('delBtn');
  newButton.addEventListener('click', removeEl);
  tr.append(newButton);
}

function removeEl(e){
  let toBeDeleted = e.target.closest('tr');
  delete allServers[toBeDeleted.id];
  delete allPayments[toBeDeleted.id];
  toBeDeleted.parentNode.removeChild(toBeDeleted);
  updateServerTable();
  updateSummary();
  }