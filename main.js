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

function redirectPage() {
    window.location.href = "/presell/form.html"
}
