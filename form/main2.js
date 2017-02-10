/**
 * Created by clouway on 09.02.17.
 */
function validateUserForm () {
    let fName = document.getElementById('fname').value.length

    let textMessage1
    submitOK = "true"

    if (fName < 1 || fName > 15) {
        textMessage1 = 'First Name must be betwen 1 and 15 symbols'
        submitOK = "false"
    }else {
        textMessage1 = ''
    }
    document.getElementById('messageFName').innerHTML = textMessage1

    let lname = document.getElementById('lname').value.length
    if (lname < 1 || lname > 15) {
        textMessage2 = 'Last Name must be betwen 1 and 15 symbols'
        submitOK = "false"
    }else {
        textMessage2 = ''
    }
    document.getElementById('messageFLast').innerHTML = textMessage2

    let egn = document.getElementById('egn').value
    if ( egn.length != 10 ) {
        textMessage3 = 'EGN muts be precise 10 digit !'
        submitOK = "false"
    }
    else if (/[^0-9]/.test(egn)){
        textMessage3 = 'EGN must only digit !'
        submitOK = "false"
    }
    else {
        textMessage3 = ''
    }
    document.getElementById('messageEgn').innerHTML = textMessage3

    let age = document.getElementById('age').value
    if (isNaN(age) || age < 18 || age > 100) {
        textMessage4 = 'Age must be NUMBER betwen 18 and 100 !'
        submitOK = "false"
    }else {
        textMessage4 = ''
    }
    document.getElementById('messageAge').innerHTML = textMessage4

    let address = document.getElementById('address').value.length
    if (address < 1 || address > 100) {
        textMessage5 = 'Address must be betwen 1 and 100 !'
        submitOK = "false"
    }else {
        textMessage5 = ''
    }
    document.getElementById('messageAddress').innerHTML = textMessage5

    let pass = document.getElementById('pass').value


    if (/^[0-9a-zA-Z]+$/.test(pass)){
        textMessage6 = ''
    }else {
        textMessage6 = 'Password  must contains only Latin letters and numbers !'
        submitOK = "false"
    }
    document.getElementById('messagePass').innerHTML = textMessage6

    let correctLine = document.getElementById('correct')
    if(submitOK == "true"){
        correctLine.style.display = "inline"
    }else {
        correctLine.style.display = "none"
    }


}