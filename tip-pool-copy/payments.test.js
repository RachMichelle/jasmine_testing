describe('payments tests', function (){
    beforeEach(function(){
        billAmtInput.value = 50;
        tipAmtInput.value = 10;
    })


it ('should add to allpayments-submitPaymentinfo()'), function(){
    submitPaymentInfo();
    expect(Object.keys(allPayments).length.toEqual(1));
    expect(allPayments[payment1].billAmt.toEqual(50));
    expect(allPayments[payment1].tipAmt.toEqual(10));
    expect(appendPaymentTable[payment1].tipPercent.toEqual(20));
};

it ('should create new payment-createCurPayment()'), function(){
    let addedPayment = {
        billAmt: '50',
        tipAmt: '10',
        tipPercent: 20
    }
    expect(createCurPayment().toEqual(addedPayment));
}

it('should add to payment table-appendPaymentTable(curPayment)'), function(){
    let curPayment = createCurPayment();
    allPayments['payment1'] = curPayment;
    appendPaymentTable(curPayment);
    let tblList = document.querySelectorAll('#paymentTable tbody tr td');
    expect(tblList.length.toEqual(3));
    expect(tblList[0].innerText.toEqual('$50'));
    expect(tblList[1].innerText.toEqual('$10'));
    expect(tblsList[2].innerText.toEqual('20%'))
}

it ('should add to payment summary with each addition-updateSummary()'), function(){
   allPayments = {
    payment1: 
   {billAmt: '50', tipAmt: '10', tipPercent: 20},
   payment2: 
   {billAmt: '150', tipAmt: '28', tipPercent: 19},
   payment3: 
   {billAmt: '100', tipAmt: '18', tipPercent: 18},
}
updateSummary();
let summaryList = document.querySelectorAll('#summaryTable tbody tr td');
expect(summaryList[0].innerText.toEqual('$300'));
expect(summaryList[1].innerText.toEqual('$56'));
expect(summaryList[2].innerText.toEquatl('19%'));
}

afterEach(function(){
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    allPayments = {};
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    paymentId = 0;
})

});