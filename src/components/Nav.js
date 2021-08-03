import React from "react";

const Nav = ({ setLibraryStatus, libraryStatus }) => {
  return (
    <nav className="nav">
      <h1>Music</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <img src="/images/music.svg" alt="" />
      </button>
    </nav>
  );
};

export default Nav;
