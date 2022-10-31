var videoTemp = document.querySelector('.video');

videoTemp.addEventListener('click', e => {
    videoTemp.play()
})

videoTemp.addEventListener('timeupdate', e => {
    displayConditional();
})

function displayConditional() {
    if (videoTemp.currentTime == videoTemp.duration) {
        document.querySelector(".conditional_none").classList.toggle("conditional")
    }
}

function redirectPage() {
    window.location.href = "/Pages/Confirm/form.html"
}