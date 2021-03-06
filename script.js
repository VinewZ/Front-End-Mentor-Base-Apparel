function verifyEmail(){
    var email = document.getElementById("emailInput").value
    var emailInput = document.getElementById("emailInput")
    var underText = document.getElementById("underText")
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if ( !email.match(pattern) || email == ""){
        underText.innerHTML = "Please enter a valid Email  Address ❌ (ex: email@email.com)"
        underText.style.color = "#F90D35"
        emailInput.style.border = "1px solid #FF0000"
    } else{
        underText.innerHTML = "Valid Email  Address ✔"
        underText.style.color = "#12FD00"
        emailInput.style.border = "1px solid #12FD00"
    }
}