document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();
    const mobileNumber = document.getElementById('mobile-num').value
    const pin = document.getElementById('pin-num').value
    const convertPin = parseInt(pin);

    if(mobileNumber.length === 11){
        if(convertPin === 1235){
            window.location.href = "./home.html"
        }
        else{
            alert('enter pin correctly');
            
        }
    }
    else{
        alert('enter mobile number correctly.');
        
    }
})