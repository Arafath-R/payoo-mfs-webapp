// for add money

document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const accNumber = document.getElementById('acc-num').value
    const addAmount = getInputValueById('amount')
    const pin = getInputValueById('pin-num')
    const mainBalance = getInnerTextById('balance')

    if (accNumber.length === 11) {
        if (pin === 1235) {
            const newBalance = addAmount + mainBalance
            setInnerTextByIdandValue('balance',newBalance)
        }
        else {
            alert('enter pin correctly')
        }
    }
    else {
        alert('enter agent number correctly.')
    }
})