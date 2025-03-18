import React from "react";
import cover from "../assets/album-cover.png";
import { Link } from "react-router-dom";

function MusicLinks() {
  const style = {
    overflow: "hidden",
    background: "transparent",
  };

  return (
    <div className="music-links">
      <header className="links-header">
        <img src={cover} className="cover" />
        <h1 className="name">COLORED NOISE™</h1>
      </header>
      <iframe
        height="175"
        style={{ style }}
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
        src="https://embed.music.apple.com/us/album/take-a-trip-with-me/1800346034?i=1800346312"
      ></iframe>
      <a
        href="https://music.apple.com/us/album/smokadelic/1800346034"
        target="_blank"
        className="links"
      >
        <img
          className="icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0w5GvI3wmp6uKM3pnzP6FHsrHEsynFAx5Xg&usqp=CAU"
        />
        <p>APPLE MUSIC</p>
      </a>
      <a
        href="https://open.spotify.com/album/0gSlJ39L3n9xaxe8m75A7a?si=_FX9qdIaSBuBfc26MHLDbg"
        target="_blank"
        className="links"
      >
        <img
          className="icon"
          src="https://e1.pngegg.com/pngimages/452/298/png-clipart-spotify-for-os-x-el-capitan-spotify-icon-illustration.png"
        />
        <p>SPOTIFY</p>
      </a>
      <a
        href="https://www.youtube.com/@WillSmokeCN"
        target="_blank"
        className="links"
      >
        <img
          className="icon"
          src="https://w7.pngwing.com/pngs/1009/93/png-transparent-youtube-computer-icons-logo-youtube-angle-social-media-share-icon.png"
        />
        <p>YOUTUBE</p>
      </a>
      <Link className="links" to="/coming-soon">
        <p>COMING SOON</p>
      </Link>
    </div>
  );
}

export default MusicLinks;
