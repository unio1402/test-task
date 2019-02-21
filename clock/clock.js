class Clock {

    constructor() {
        this.d = new Date();
        this.refreshTime = 60*1000;
        this.minuteArrowPosition = document.getElementsByClassName("clock-arrow--minute")[0].parentElement;
        this.hourArrowPosition = document.getElementsByClassName("clock-arrow--hour")[0].parentElement;
        this.clockTimerId = null;
        this.startClock();
    }


    startClock() {
        this.computeRefreshClock();
        let firstPause = (60-this.d.getSeconds())*1000;
        
        if(this.clockTimerId) { clearTimeout(this.clockTimerId); this.clockTimerId = null}

        this.clockTimerId = setTimeout( () => {
            this.clockTimerId = setInterval( () => {
                this.computeRefreshClock();
            }, this.refreshTime);
        }, firstPause);
    }


    computeRefreshClock() {
        this.d = new Date;
        // this.d.setMinutes( this.d.getMinutes()+20 ); 
        let minutesArrowDeg = 360/60*this.d.getMinutes();
        this.minuteArrowPosition.style.transform = "rotate("+minutesArrowDeg+"deg)";

        let hour = this.d.getHours()%12;
        let hourArrowDeg = (360/12*hour)+minutesArrowDeg/12;
        this.hourArrowPosition.style.transform = "rotate("+hourArrowDeg+"deg)";
    }
};







document.addEventListener('DOMContentLoaded', function(){
    window.clock = new Clock();
});