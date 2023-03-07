
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timer = document.getElementById("timer");
let int;

const displayTimer = () =>{
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
    timer.innerText = `${h} : ${m} : ${s} : ${ms}`;
}

document.getElementById("start").addEventListener("click",()=>{
    int = setInterval(displayTimer,10)
});

document.getElementById("stop").addEventListener("click", (e)=>{
    clearInterval(int);
});

document.getElementById("reset").addEventListener("click", ()=>{
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timer.innerText = `00 : 00 : 00 : 000`;
});



