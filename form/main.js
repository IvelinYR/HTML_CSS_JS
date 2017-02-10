function ValidationField() {
    let firstName = document.getElementById('fname').value
    validate(firstName,'^[a-zA-Z]{3,15}$', 'messageFName', 'First name must be between 3 and 10')

    let lastName = document.getElementById('lname').value
    validate(lastName,'^[a-zA-Z]{3,15}$', 'messageFLast', 'Last name must be between 3 and 10')

    let egn = document.getElementById('egn').value
    validate(egn,'^[0-9]{10,10}$', 'messageEgn', 'EGN must precise 10 digit')

    let age = document.getElementById('age').value
    validate(age,'^[1-9][0-9]?$|^100$', 'messageAge', 'You must be over 18 years old')

    let address = document.getElementById('address').value
    validate(address,'^[a-zA-Z0-9]{3,100}$', 'messageAddress', 'Address must be max 100 symbols')

    let password = document.getElementById('pass').value
    validate(password,'^[a-zA-Z0-9]{1,100}$', 'messagePass', 'Password must be only leter and digit')
}

function validate(name, regex, errorBox, errorMessage) {

    const regEx = new RegExp(regex);
    if (regEx.test(name)){
        let msgSucss = document.getElementById(errorBox)
        msgSucss.innerHTML = 'Success !'
        msgSucss.style.color = 'green'
    }else {
        let msgError = document.getElementById(errorBox)
        msgError.innerHTML = errorMessage
        msgError.style.color = 'red'
    }
}

//function TestField(name) {
//   let value = document.getElementById(name).value;
//   console.log(value);
//}











