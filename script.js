const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

function setTime() {
    const now = new Date();

    const day = weekday[now.getDay()];

    let sec = now.getSeconds();
    let min = now.getMinutes();
    let hour = now.getHours();

    const merediem = hour >= 12 ? "PM" : "AM";
    hour = hour % 12;

    const degreesSec = (sec / 60) * 360;
    const degreeMin = (min / 60) * 360 + degreesSec / 60;
    const degreeHour = (hour / 12) * 360 + (degreeMin / 360) * 30;

    console.log(degreeHour);

    const sec_hand = document.querySelector(".sec_hand");
    sec_hand.style.transform = `rotate(${degreesSec + 90}deg)`;

    const min_hand = document.querySelector(".min_hand");
    min_hand.style.transform = `rotate(${degreeMin + 90}deg)`;

    const hour_hand = document.querySelector(".hour_hand");
    hour_hand.style.transform = `rotate(${degreeHour + 90}deg)`;

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    const digitalClock = document.querySelector(".digital_clock");
    digitalClock.innerHTML = `<p>${
        hour == 0 ? 12 : hour
    }:${min}:${sec} ${merediem}</p>`;

    const dayClock = document.querySelector(".day");
    dayClock.innerText = `${day}`;
}

setInterval(setTime, 1000);
