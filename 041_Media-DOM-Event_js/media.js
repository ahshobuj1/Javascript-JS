//! Video / Audio events
//* canplay, play, playing, pause, progress, ended, volumechange, waiting 




const video = document.querySelector("video");

video.addEventListener("canplay" , function () {

    alert("canplay event start here");
});


video.addEventListener("play", function () {

    alert("play start from here");
});


video.addEventListener("playing" , function () {

    console.log("playing is running");
});


video.addEventListener("pause" , function () {

    alert("pause have worked");
});


video.addEventListener("ended" , function () {

    alert("thanks for watching");
});


video.addEventListener("volumechange" , function () {

    console.log("customize your volume");
});


video.addEventListener("progress" , function () {

    alert("alert for progress");
});


video.addEventListener("waiting" , function () {

    console.log("waiting pleas");
});


