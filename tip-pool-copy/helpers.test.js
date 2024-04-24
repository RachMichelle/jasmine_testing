describe('helper function tests', function(){

it ('should calculate to sum of billAmt, tipAmt, and tipPercent-sumPaymentTotal(type)'), function(){
    allPayments = {
        payment1: 
       {billAmt: '50', tipAmt: '10', tipPercent: 20},
       payment2: 
       {billAmt: '150', tipAmt: '28', tipPercent: 19},
       payment3: 
       {billAmt: '100', tipAmt: '18', tipPercent: 18},
    }
    expect(sumPaymentTotal(billAmt).toEqual(300));
    expect(sumPaymentTotal(tipAmt).toEqual(56));
    expect(sumPaymentTotal(tipPercent).toEqual(57));
}

it ('should calculate the tip percent from billAmt and tipAmt-calculateTipPercent()'), function(){
    billAmt = 150;
    tipAmt = 28;

    expect(calculateTipPercent(billAmt, tipAmt).toEqual(19));
}


it ('should add delete button to newly created tr-appendDeleteBtn(tr)'), function(){
    let newRow = document.createElement('tr');
    appendDeleteBtn(newRow);
    expect(newRow.childNodes.length.toEqual(3));
    expect(newRow.lastChild.innerText.toEqual('X'));
}

});
