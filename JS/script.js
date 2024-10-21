// Relacionado ao áudio
const audio = document.getElementById('audio');

function restoreAudio() {
    const currentTime = localStorage.getItem('audioCurrentTime');
    const isPlaying = localStorage.getItem('audioIsPlaying') === 'true';

    if (currentTime) {
        audio.currentTime = parseFloat(currentTime);
    }

    if (isPlaying) {
        audio.play();
    }
}

function saveAudioState() {
    localStorage.setItem('audioCurrentTime', audio.currentTime);
    localStorage.setItem('audioIsPlaying', !audio.paused);
}

audio.addEventListener('pause', saveAudioState);
audio.addEventListener('ended', saveAudioState);
audio.addEventListener('timeupdate', saveAudioState);
window.addEventListener('load', restoreAudio);

const audio_ = document.getElementById('audio');

audio_.volume = 0.05;