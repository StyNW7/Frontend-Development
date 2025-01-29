import React, { useState } from "react";
import SongList from "./components/SongList";
import MusicPlayer from "./components/MusicPlayer";
import PlayerControls from "./components/PlayerControl";
import "./App.css";

const App = () => {

  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio());

  const songs = [

    { id: 1, title: "Song 1", artist: "Artist 1", file: "/music/song1.mp3" },
    { id: 2, title: "Song 2", artist: "Artist 2", file: "/music/song2.mp3" },
    { id: 3, title: "Song 3", artist: "Artist 3", file: "/music/song3.mp3" },

  ];

  const playPauseHandler = (song) => {

    if (currentSong && currentSong.id === song.id && isPlaying) {
      audio.pause();
      setIsPlaying(false);
    }
    
    else {
      audio.src = song.file;
      audio.play();
      setIsPlaying(true);
      setCurrentSong(song);
    }

  };

  const skipSongHandler = (direction) => {

    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    let nextSongIndex = currentIndex + direction;
    if (nextSongIndex >= songs.length) nextSongIndex = 0;
    if (nextSongIndex < 0) nextSongIndex = songs.length - 1;

    const nextSong = songs[nextSongIndex];
    setCurrentSong(nextSong);
    audio.src = nextSong.file;
    audio.play();
    setIsPlaying(true);

  };

  return (

    <div className="centered">

      <div className="bg-green-700 p-12 text-white flex flex-col items-center">

        <div className="w-full max-w-lg mx-auto">

          <h1 className="text-4xl font-bold text-center mb-6">Music Player</h1>

          <SongList songs={songs} onSongSelect={playPauseHandler} />

          <MusicPlayer currentSong={currentSong} />

          <PlayerControls
            isPlaying={isPlaying}
            playPauseHandler={() => playPauseHandler(currentSong)}
            skipSongHandler={skipSongHandler}
          />

        </div>

      </div>

    </div>

  );
  
};

export default App;