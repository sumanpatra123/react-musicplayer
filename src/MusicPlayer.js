import React from 'react';
import { songs } from './SongsList';

const MusicPlayer = () => {
  const [nowPlaying, setNowPlaying] = React.useState('None');
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [playAll, setPlayAll] = React.useState(false);
  let currentSongIndex = 0;

  React.useEffect(() => {
    let audioPlayer = document.querySelector('audio');
    audioPlayer.addEventListener('play', function(event) {
      console.log('now playing:- song', event.target.currentSrc);
      setIsPlaying(true);
      setNowPlaying(audioPlayer.getAttribute('song'));
    });

    audioPlayer.addEventListener('pause', function(event) {
      setIsPlaying(false);
    });
  }, []);

  const playAllHandler = () => {
    setPlayAll(true);

    let audioPlayer = document.querySelector('audio');
    let song = songs[0];
    audioPlayer.src = song.url;
    audioPlayer.load();
    audioPlayer.play();
    audioPlayer.setAttribute('song', song.name);

    audioPlayer.addEventListener('ended', event => {
      const nextIndex = currentSongIndex++;
      console.log('song', nextIndex);
      if (nextIndex >= songs.length) {
        console.log('all songs played!');
        return;
      }
      let song = songs[nextIndex];

      audioPlayer.src = song.url;
      audioPlayer.load();
      audioPlayer.play();
      audioPlayer.setAttribute('song', song.name);
    });
  };

  return (
    <div className="container">
      <div className="music_container">
        <div>
          <audio controls />
          {isPlaying ? (
            <marquee>Now Playing:- {nowPlaying}</marquee>
          ) : (
            <div>Now Playing:- {nowPlaying}</div>
          )}
          <button onClick={playAllHandler}>Play all</button>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
