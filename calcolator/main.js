/**
 * Created by clouway on 09.02.17.
 */
function validation(sing) {
    let value = document.Calcolator.display.value
    let check = value.substr(value.length - 1)
    if(value.length == 0){
        return
    }
    else if (check == '+'|| (check == '-')|| (check == '*') || (check == '/') ||(check == '.')){
        return
    }else
        {
            document.Calcolator.display.value += sing
    }
}

function btnDot() {
    let current = document.Calcolator.display.value
    let separators = ['\\\+', '-', '\\*', '/'];
    let tokens = current.split(new RegExp(separators.join('|'), 'g'));
    let splited = tokens[tokens.length-1]

    if ( current.length == 0) {
        document.Calcolator.display.value = '0.'
    }
    else if ( splited.indexOf(".") !== -1) {
       return
    }

    validation('.')
}

function btnPlus() {
    validation('+')
}

function btnSub() {
    validation('-')
}

function btnMult() {
    validation('*')
}

function btnDiv () {
    validation('/')
}

function btnClear() {
    document.Calcolator.display.value = ''
    document.Calcolator.display.style.textAlign = 'right'
}
function btnDel () {
    let makeDelete = document.Calcolator.display.value
    let newDel = makeDelete.substring(0, makeDelete.length - 1)
    document.Calcolator.display.value = newDel
    document.Calcolator.display.style.textAlign = 'right'
}
