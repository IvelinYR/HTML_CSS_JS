/**
 * Created by clouway on 10.02.17.
 */

function btnSub() {
    const number = document.getElementById('number').value
    const pieces = number.split('.')
    const re = new RegExp(/^[0-9]{1,10}([,.][0-9]{1,5})?$/)
     if(re.test(number)) {
         document.getElementById('answer').innerHTML = 'Number is CORECT'
         document.getElementById('answer').style.color = 'green'
     }else{
         document.getElementById('answer').innerHTML = 'Number is INCORECT'
         document.getElementById('answer').style.color = 'red'
     }
}

