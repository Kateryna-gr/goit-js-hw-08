import throttle from 'lodash.throttle';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.on('timeupdate', throttle(() => {
  player.getCurrentTime().then(function (time) {
    console.log('time:', time);
    localStorage.setItem('videoplayer-current-time', time);
  });
}, 1000));

if (localStorage.getItem('videoplayer-current-time')) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}

// document.addEventListener(
//     "click", throttle(() => {
//       console.log("Scroll handler call every 300ms");
//     }, 300));
