var videoTemp = document.querySelector('.video');
const urlParams = new URLSearchParams(window.location.search);
const url = urlParams.get('url');

videoTemp.addEventListener('click', e => {
    videoTemp.play()
})

videoTemp.addEventListener('timeupdate', e => {
    displayConditional();
})

function displayConditional() {
    console.log(videoTemp.currentTime)
    if (videoTemp.currentTime == videoTemp.duration) {
        document.querySelector('.conditional').style.display = "flex";
    }
}

function redirectPage() {
    if(url == null) {
        alert('Favor, verifique a URL e tente novamente.');
        return;
    }

    window.open(url, '_blank');
}