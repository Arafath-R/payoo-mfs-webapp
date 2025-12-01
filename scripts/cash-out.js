document.getElementById('cashout-btn').addEventListener('click',function(event){
    event.preventDefault();
    const agentNumber = document.getElementById('agent-num').value
    const amountWithdraw = getInputValueById('amount-withdraw')
    const pin = getInputValueById('pin-num')
    const mainBalance = getInnerTextById('balance')

    if(amountWithdraw > mainBalance){
        alert('insufficient balance')
        return;
    }


    if(agentNumber.length === 11){
        if(pin === 1235){
            const newBalance = mainBalance - amountWithdraw
            setInnerTextByIdandValue('balance',newBalance)


            const container = document.getElementById('transaction')

            const div = document.createElement('div')
            div.innerHTML = `
            <div class="bg-white flex justify-between p-5 items-center rounded-xl border">
                    <div class="flex">
                        <div class="w-16 rounded-full bg-gray-100 flex justify-center items-center">
                            <img src="./assets/send1.png" />
                        </div>
                        <div class="pl-3">
                            <h2 class="font-bold">Cash Out ${amountWithdraw} From ${agentNumber}</h2>
                            <p class="text-xs">${new Date()}</p>
                        </div>
                    </div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div> 
            `
            container.appendChild(div)



        }
        else{
            alert('enter pin correctly');  
        }
    }
    else{
        alert('enter agent number correctly.');
        
    }
})
