function getInputValueById(id) {
    const value = document.getElementById(id).value
    const convertValue = parseFloat(value)
    return convertValue
}
function getInnerTextById(id) {
    const value = document.getElementById(id).innerText
    const convertValue = parseFloat(value)
    return convertValue
}
function setInnerTextByIdandValue(id,value) {
    document.getElementById(id).innerText = value
}
