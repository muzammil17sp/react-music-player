import React from "react";
const LibrarySong = ({ song, songs, isPlaying, audioRef, setcurrentSong,setsong }) => {
  const songSelectHandler = async () => {
  await  setcurrentSong(song);

    const newSong = songs.map((single) => {
      if (single.id === song.id) {
        return {
          ...single,
          active: true,
        };
      } else {
        return {
          ...single,
          active: false,
        };
      }
    });
    if (isPlaying) audioRef.current.play();

    setsong(newSong)
  };
  return (
    <div
      className={`library-song ${song.active ? "selected" : ""}`}
      onClick={songSelectHandler}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
