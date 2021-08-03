import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, setcurrentSong,audioRef,isPlaying,setsong ,libraryStatus}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" :""} `}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            isPlaying={isPlaying}
            key={song.id}
            audioRef={audioRef}
            song={song}
            setsong={setsong}
            setcurrentSong={setcurrentSong}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
