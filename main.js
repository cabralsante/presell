var videoTemp = document.querySelector('.video');

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

const urlParams = new URLSearchParams(window.location.search);
const url = urlParams.get('url');

function redirectPage() {
    window.open(url, '_blank');
}
