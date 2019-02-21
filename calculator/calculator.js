class Calculator {

    constructor() {
        this.calcElement = document.getElementById("calculator");
        this.elemInputDigital = document.getElementById("inputDigital");
        // console.dir(this.calcElement);
        this.setEvents();
    }


    testDigital(){
        let val = this.elemInputDigital.value;
        this.elemInputDigital.value = val.replace(/\D/, "");
    }
    

    getSQR() {
        let num = this.elemInputDigital.value;
        let exp = +prompt("Введите число");
        if(isFinite(exp) && num) {
            this.elemInputDigital.value = Math.pow(num, exp); 
            // return res;
        }else{
            alert("Ой, это не число, пожалуйста введите число.");
            // return this.elemInputDigital.value;
        }
    }

    getSQRT() {
        let num = this.elemInputDigital.value;
        if(num > 0) {
            this.elemInputDigital.value = Math.sqrt(num);    
        }else{
            alert("Не могу вычеслить корень из числа "+num);
        }
    }

    getLog() {
        let num = this.elemInputDigital.value;
        if(num > 0) {
            this.elemInputDigital.value = Math.sqrt(num);    
        }else if(num == 0){
            alert("Логарифм  числа "+num+" = минус бесконечность");
        }else if(num < 0){
            alert("Не могу вычеслить корень из числа "+num);
        }
    }







    /*events*/
    setEvents() {
        this.elemInputDigital.addEventListener("input", () => {
            // console.dir(this);
            // console.log("input event");
            this.testDigital();
        });

        
        this.calcElement.getElementsByClassName("sqr")[0].addEventListener("click", () => {
            this.getSQR();
        });

        this.calcElement.getElementsByClassName("sqrt")[0].addEventListener("click", () => {
            this.getSQRT();
        });

        this.calcElement.getElementsByClassName("ln")[0].addEventListener("click", () => {
            this.getLog();
        });


    }/*events*/


};










document.addEventListener('DOMContentLoaded', function(){
    window.calc = new Calculator();
});