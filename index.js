
class Calculator{
    constructor(display) {
        this.number1 = ''
        this.number2 = ''
        this.operation = ''
        this.finish = false

        this.display = display 
        this.display.value = '0'
     }
     
     buttonC() {
         this.number1 = ''
         this.number2 = ''
         this.operation = '',
         this.display.value = '0'
    }

    remove () {
        this.display.value = this.display.value.slice(0, -1);
        this.number1 = ''
        this.number2 = ''
        this.operation = ''
    }

    appendToDisplay(e) {
        if(this.number1[this.number1] === '0' && e === '0' || this.number2[this.number2] === '0' && e === '0'){
            return  
        } 
        if (this.number1 === '' && e === '.' || this.number1.length > 1 && e === '.'){
            return
        }
        if (this.number2 === '' && this.operation === '') {
            this.number1 += e
            this.display.value = this.number1
            
        }else if (this.number1 != '' && this.number2 != '' && this.finish) {
            this.number2 = e;
            this.finish = false;
            this.display.value = this.number2;

        }else {
            this.number2 += e
            this.display.value = this.number2
        }
    }

    checkOperand(e) {
        this.operation = e
        this.display.value = e
    }   

    equal () {
        if(this.number2 === '') this.number2 = this.number1
        switch(this.operation) {
            case '+':
                this.number1 = (+this.number1) + (+this.number2)
                break;
            case '-':
                this.number1 = (+this.number1) - (+this.number2)
                break;
            case 'x':
                this.number1 = (+this.number1) * (+this.number2)
                break;
            case '÷':
                if (this.number2 === '0') {
                    this.display.value = 'Error'
                    this.number1 = ''
                    this.number2 = ''
                    this.operation = ''
                    return;
                }
                this.number1 = (+this.number1) / (+this.number2)
                break;
        }
        this.finish = true
        this.display.value = this.number1
    }
}



let numbrs = document.querySelectorAll(".num")
let display = document.querySelector("#display")
let sign = document.querySelectorAll(".sign")
let equal = document.querySelector(".equal")
let dot = document.querySelector('.dot')
let removeElem = document.querySelectorAll('.remove-element')

let calc = new Calculator(display)

for (let e of sign){
    e.onclick = () => {
        calc.checkOperand(e.textContent)
    }
}

for (let numbr of numbrs) {
    numbr.onclick = () => {
        calc.appendToDisplay(numbr.textContent)
    }
}

for (let elem of removeElem) {
    elem.onclick = () => {
        if (elem.textContent === "C"){
            calc.buttonC(elem.textContent)
        }else {
            calc.remove()
        }
    }
} 

equal.onclick = () => {
    calc.equal()
}

dot.onclick  = () => {
    calc.appendToDisplay(dot.textContent)
}



