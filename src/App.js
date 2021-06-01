import React from 'react';
import './style.css';
import Song from './Song';
import { songs } from './SongsList';
import MusicPlayer from './MusicPlayer';

export default function App() {
  return (
    <div>
      <h1>React Music Player </h1>

      <MusicPlayer />

      <ul>
        {songs.map(song => {
          return <Song url={song.url} name={song.name} />;
        })}
      </ul>
    </div>
  );
}
