
let video = document.querySelector('video');
let play = document.getElementById("play");
let pausa = document.getElementById("pausa");


play.addEventListener('click', () => {
    video.play();

});

pausa.addEventListener('click', () => {
    video.pause();
});


setTimeout(() => { document.getElementById("duracion").innerHTML = `Duracion video: ${video.duration}`, 1000 });

console.log(video.duration);