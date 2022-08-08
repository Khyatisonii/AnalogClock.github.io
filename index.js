setInterval(() => {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    hrot = 30 * h + m / 2;
    mrot = 6 * m;
    srot = 6 * s;

    hours.style.transform = `rotate(${hrot}deg)`;
    minutes.style.transform = `rotate(${mrot}deg)`;
    seconds.style.transform = `rotate(${srot}deg)`;
})