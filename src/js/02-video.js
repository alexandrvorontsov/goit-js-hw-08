import videoPlayer from '@vimeo/player';
let throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');
const player = new videoPlayer(iframe);

player.on('timeupdate', throttle(savePlayedTime, 1000), { passive: true });

function savePlayedTime() {
  player.getCurrentTime().then(function (seconds) {
    localStorage.setItem('videoplayer-current-time', seconds);
  });
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
