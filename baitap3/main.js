const timeEl= document.getElementById('time');
const dayEl = document.getElementById('day');

setInterval(() =>{
    const now = new Date();
    const start =new Date('2004-07-28')
    const milliseconds = now.getTime() - start.getTime();
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const hoursTotal = hours % 24;
    const minutesTotal = minutes % 60;
    const secondsTotal = seconds % 60;
   
    timeEl.innerHTML = `Times:${days}:${hoursTotal}:${minutesTotal}:${secondsTotal}`
},1000)

const now = new Date();
const start = new Date('2004-7-28')
const milliseconds = now.getTime() - start.getTime();
const seconds = Math.floor(milliseconds / 1000);
const minutes = Math.floor(seconds / 60);
const hours = Math.floor(minutes / 60);
const days = Math.floor(hours / 24)
dayEl.innerHTML =`Days: ${days}`


// var audio = document.createElement("audio");
// audio.setAttribute("src", ".baitap3/music/Zing-MP3-Setup-1.0.9.exe");
// audio.setAttribute("controls", "controls");
// document.body.appendChild(audio);
