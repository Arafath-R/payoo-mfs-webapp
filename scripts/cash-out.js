document.getElementById('cashout-btn').addEventListener('click',function(event){
    event.preventDefault();
    const agentNumber = document.getElementById('agent-num').value
    const amountWithdraw = getInputValueById('amount-withdraw')
    const pin = getInputValueById('pin-num')
    const mainBalance = getInnerTextById('balance')

    if(agentNumber.length === 11){
        if(pin === 1235){
            const newBalance = mainBalance - amountWithdraw
            setInnerTextByIdandValue('balance',newBalance)
        }
        else{
            alert('enter pin correctly');  
        }
    }
    else{
        alert('enter agent number correctly.');
        
    }
})
