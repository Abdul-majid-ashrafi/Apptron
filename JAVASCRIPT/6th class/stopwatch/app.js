var timer = document.getElementById("timer"),
    miliseconds = 0,
    seconds = 0,
    minutes = 0

function add() {
    miliseconds++;
    if (miliseconds >= 60) {
        seconds++
        miliseconds = 0
    } else if (seconds >= 10) {
        minutes++;
        seconds = 0;
    }

    timer.innerHTML =
        (miliseconds ? (miliseconds > 9 ? miliseconds : '0' + miliseconds) : "00")
        + ':' +
        (seconds ? (seconds > 9 ? seconds : '0' + seconds) : "00")
        + ':' +
        (minutes ? (minutes > 9 ? minutes : '0' + minutes) : "00")
    startTimer()
}

function startTimer() {
    stop = setTimeout(() => {
        add()
    }, 20);
}

function stopTimer() {
    clearTimeout(stop);
}

function clearTimer() {
    clearTimeout(stop);
    timer.innerHTML = "00:00:00";
    miliseconds = 0;
    seconds = 0;
    minutes = 0;
}





