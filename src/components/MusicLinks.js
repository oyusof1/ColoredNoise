import React from "react";
import cover from "../assets/album-cover.jpg";
import { Link } from "react-router-dom";

function MusicLinks() {
const style = {
    overflow: 'hidden',
    background: 'transparent'
}

  return (
    <div className="music-links">
      <header className="links-header">
        <img src={cover} className="cover" />
        <h1 className="name">COLORED NOISE™</h1>
      </header>
      <iframe height="175" style={{style}} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/boom-boom-feat-jammerboy-turbososa/1661371385?i=1661371697"></iframe>
      {/* <iframe src="https://embed.music.apple.com/us/album/boom-boom-feat-jammerboy-turbososa/1661371385?i=1661371697"></iframe> */}
      <a href="https://music.apple.com/us/album/colored-noise/1661371385" target="_blank" className="links">
        <img className="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0w5GvI3wmp6uKM3pnzP6FHsrHEsynFAx5Xg&usqp=CAU" />
        <p>APPLE MUSIC</p>
      </a>
      <a href="https://youtube.com/playlist?list=OLAK5uy_mjfMb56howi2C8frr5IS1TLxFZK7-AXVA" target="_blank" className="links">
        <img className="icon" src="https://e1.pngegg.com/pngimages/452/298/png-clipart-spotify-for-os-x-el-capitan-spotify-icon-illustration.png" />
        <p>SPOTIFY</p>
      </a>
      <a href="https://youtube.com/playlist?list=OLAK5uy_mjfMb56howi2C8frr5IS1TLxFZK7-AXVA" target="_blank" className="links">
        <img className="icon" src="https://w7.pngwing.com/pngs/1009/93/png-transparent-youtube-computer-icons-logo-youtube-angle-social-media-share-icon.png" />
       <p>YOUTUBE</p>
      </a>
      <Link className="links" to="/coming-soon">
       <p>COMING SOON</p>
      </Link>
    </div>
  );
}

export default MusicLinks;
