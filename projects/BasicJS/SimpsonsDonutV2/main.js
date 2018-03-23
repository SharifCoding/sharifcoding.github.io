function checkPassword() {
    var password = document.getElementById("passwordBox");
    var passwordText = password.value;
    if(passwordText == "Donuts") {
        return true;
    }
    alert("Access denied! Hint: Donuts");
    return false;
}
/* Function used to determine correct password by matching variable passwordText with string value "Donuts" using DOM */