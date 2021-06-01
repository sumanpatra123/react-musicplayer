import React from 'react';

const Song = props => {
  const img = props.img;
  const name = props.name;
  const url = props.url;
  const clickHandler = event => {
    let audioPlayer = document.querySelector('audio');

    const button = event.target;
    console.log('button', button);
    const musicUrl = button.dataset.musicUrl;

    audioPlayer.src = musicUrl;
    audioPlayer.load();
    audioPlayer.play();
    // audioPlayer.pause();
    audioPlayer.setAttribute('song', name);
  };
  return (
    <li>
      <span>{img}</span>
      <span>{name}</span>
      <button data-music-url={url} onClick={clickHandler} class="play-button">
        Play
      </button>
      <button data-music-url={url} onClick={clickHandler} class="pause-button">
        Pause
      </button>
    </li>
  );
};

export default Song;
