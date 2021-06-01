import React from 'react';
import './style.css';
import Song from './Song';
import { songs } from './SongsList';
import MusicPlayer from './MusicPlayer';
import { signInWithGoogle } from './Firebase';
import firebase from 'firebase';
import 'firebase/auth';

export default function App() {
  return (
    <div>
      <button className="login-provider-button" onClick={signInWithGoogle}>
        <img
          src="https://img.icons8.com/ios-filled/50/000000/google-logo.png"
          alt="google icon"
        />
        <span> Continue with Google</span>
      </button>

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
