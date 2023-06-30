const audio = document.getElementById('background-music');
const musicPanel = document.getElementById('musicPanel');

// List of available songs
const songs = [
    '/media/bg_music/1.mp3',
    '/media/bg_music/2.mp3',
    '/media/bg_music/3.mp3',
    '/media/bg_music/4.mp3',
    '/media/bg_music/5.mp3',
    '/media/bg_music/6.mp3',
    '/media/bg_music/7.mp3',
    '/media/bg_music/8.mp3',
    '/media/bg_music/9.mp3',
    '/media/bg_music/10.mp3'
];

// Function to play a random song
function playRandomSong() {
    const randomIndex = Math.floor(Math.random() * songs.length);
    audio.src = songs[randomIndex];
}

// Play a random song on page load
playRandomSong();

// Function to change the source to a random song
function changeSource() {
    playRandomSong();
}

// Function to play/pause the current song
function playPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}