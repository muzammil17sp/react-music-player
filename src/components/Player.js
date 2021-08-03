import React from "react";

const Player = ({
  songInfo,
  setSongInfo,
  audioRef,
  isPlaying,
  currentSong,
  setIsPlaying,
  setcurrentSong,
  setsong,
  songs,
}) => {
  const playMusicHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };
  const changeSongHandler = async (direction) => {
    let index = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "left") {
      if ((index - 1) % songs.length === -1) {
        await setcurrentSong(songs[songs.length - 1]);
        activeLibraryHandler(songs[songs.length - 1]);

        if (isPlaying) audioRef.current.play();

        return;
      }
      await setcurrentSong(songs[(index - 1) % songs.length]);
      activeLibraryHandler(songs[(index - 1) % songs.length]);
    }
    if (direction === "right") {
      await setcurrentSong(songs[(index + 1) % songs.length]);
      activeLibraryHandler(songs[(index + 1) % songs.length]);
    }
    if (isPlaying) audioRef.current.play();
  };
  const activeLibraryHandler = (nextPrev) => {
    const newSong = songs.map((single) => {
      if (single.id === nextPrev.id) {
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
    setsong(newSong);
  };
  return (
    <div className="player">
      <div className="time-control">
        <p>{songInfo.currentTime ? getTime(songInfo.currentTime) : "0:00"}</p>
        <input
          type="range"
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          onChange={dragHandler}
        />
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <img
          src="/images/left.svg"
          onClick={() => changeSongHandler("left")}
          className="left"
          alt="leftangle"
        />
        <img
          src={isPlaying ? "/images/pause.svg" : "/images/play.svg"}
          onClick={playMusicHandler}
          className="play"
          alt=""
        />
        <img
          src="/images/right.svg"
          onClick={() => changeSongHandler("right")}
          className="right"
          alt="rightangle"
        />
      </div>
    </div>
  );
};

export default Player;
