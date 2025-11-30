// toggle handaler
document.getElementById('addmoney').addEventListener('click', function () {
    handleToggle('latest-payment','none')
    handleToggle('add-money-section','block')
    handleToggle('cashout-section','none')
    handleToggle('transfer-section','none')
    handleToggle('bonus-section','none')
    handleToggle('pay-section','none')
    handleToggle('history-section','none')
})
document.getElementById('cashout').addEventListener('click', function () {
    handleToggle('latest-payment','none')
    handleToggle('add-money-section','none')
    handleToggle('cashout-section','block')
    handleToggle('transfer-section','none')
    handleToggle('bonus-section','none')
    handleToggle('pay-section','none')
    handleToggle('history-section','none')
})
document.getElementById('transfer').addEventListener('click', function () {
    handleToggle('latest-payment','none')
    handleToggle('add-money-section','none')
    handleToggle('cashout-section','none')
    handleToggle('transfer-section','block')
    handleToggle('bonus-section','none')
    handleToggle('pay-section','none')
    handleToggle('history-section','none')
})
document.getElementById('getbonus').addEventListener('click', function () {
    handleToggle('latest-payment','none')
    handleToggle('add-money-section','none')
    handleToggle('cashout-section','none')
    handleToggle('transfer-section','none')
    handleToggle('bonus-section','block')
    handleToggle('pay-section','none')
    handleToggle('history-section','none')
})
document.getElementById('paybill').addEventListener('click', function () {
    handleToggle('latest-payment','none')
    handleToggle('add-money-section','none')
    handleToggle('cashout-section','none')
    handleToggle('transfer-section','none')
    handleToggle('bonus-section','none')
    handleToggle('pay-section','block')
    handleToggle('history-section','none')
})
document.getElementById('history').addEventListener('click', function () {
    handleToggle('latest-payment','none')
    handleToggle('add-money-section','none')
    handleToggle('cashout-section','none')
    handleToggle('transfer-section','none')
    handleToggle('bonus-section','none')
    handleToggle('pay-section','none')
    handleToggle('history-section','block')
})

function handleToggle(id,status){
    document.getElementById(id).style.display = status
}