// for add money

document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const accNumber = document.getElementById('acc-num').value
    const addAmount = getInputValueById('amount')
    const pin = getInputValueById('pin-num')
    const mainBalance = getInnerTextById('balance')
    const selectBank = document.getElementById('allBank').value

    if(addAmount < 0){
        alert('Please enter positive number')
        return;
    }


    if (accNumber.length === 11) {
        if (pin === 1235) {
            const newBalance = addAmount + mainBalance
            setInnerTextByIdandValue('balance',newBalance)


            const container = document.getElementById('transaction')

            const div = document.createElement('div')
            div.innerHTML = `
            <div class="bg-white flex justify-between p-5 items-center rounded-xl border">
                    <div class="flex">
                        <div class="w-10 rounded-full bg-gray-100 flex justify-center items-center">
                            <img src="./assets/wallet1.png" />
                        </div>
                        <div class="pl-3">
                            <h2 class="font-bold">Added ${addAmount} From ${selectBank}</h2>
                            <p class="text-xs">${new Date()}</p>
                        </div>
                    </div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div> 
            `
            container.appendChild(div)


        }
        else {
            alert('enter pin correctly')
        }
    }
    else {
        alert('enter agent number correctly.')
    }
})