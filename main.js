const urlParams = new URLSearchParams(window.location.search);
var videoTemp = document.querySelector('.video');
var url = urlParams.get('url');

videoTemp.addEventListener('click', e => {
    videoTemp.play()
})

videoTemp.addEventListener('timeupdate', e => {
    displayConditional();
})

function displayConditional() {
    console.log(videoTemp.currentTime)
    if (videoTemp.currentTime == videoTemp.duration) {
        console.log(videoTemp.duration)
        document.querySelector(".conditional_none").classList.toggle("conditional")
    }
}

function redirectPage() {
    window.open(url, '_blank');
}
