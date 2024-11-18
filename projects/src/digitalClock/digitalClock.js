export function digitalClock() {
    document.getElementById('mainContent').innerHTML = `
    <div id="clockWrapper">
        <div id="clock"><p id="day"></p></div>
    </div>
    `
    function timer() {
        let currentTime = document.getElementById("clock")
        let time = new Date()
        let hr = time.getHours()
        let min = time.getMinutes()
        let sec = time.getSeconds()
        let day = time.getDay()

        switch (day) {
            case 0:
                day = "Sun";
                break;
            case 1:
                day = "Mon";
                break;
            case 2:
                day = "Tue";
                break;
            case 3:
                day = "Wed";
                break;
            case 4:
                day = "Thur";
                break;
            case 5:
                day = "Fri";
                break;
            case 6:
                day = "Sat";
        }

        // let period = hr >= 12 ? "PM" : "AM"
        // hr = hr % 12 || 12

        if (sec < 10) sec = "0" + sec
        if (min < 10) min = "0" + min

        currentTime.textContent = `${day} ${hr}:${min}:${sec}`
    }
    setInterval(timer, 1000);
    timer()
}