import React from 'react';

function MusicNavbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-4" style={{ background: 'linear-gradient(to right, #2a0845, #6441a5)' }}>
      <div className="container-fluid">
        <a className="navbar-brand fs-4" href="#">
          <i className="bi bi-music-note-beamed me-2"></i>
          Melodify
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Library
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Playlists
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Your Playlists</a></li>
                <li><a className="dropdown-item" href="#">Create Playlist</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Liked Songs</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Discover
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">New Releases</a></li>
                <li><a className="dropdown-item" href="#">Charts</a></li>
                <li><a className="dropdown-item" href="#">Genres</a></li>
                <li><a className="dropdown-item" href="#">Radio</a></li>
              </ul>
            </li>
          </ul>

          {/* Spotify-style longer search bar */}
          <form className="d-flex flex-grow-1 mx-3" role="search" style={{ maxWidth: "500px" }}>
            <input
              className="form-control rounded-pill"
              type="search"
              placeholder="Search songs, artists, albums..."
              aria-label="Search"
            />
          </form>

          <div className="d-flex align-items-center">
            <a href="#" className="btn btn-outline-light btn-sm ms-2">
              <i className="bi bi-person"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MusicNavbar;
