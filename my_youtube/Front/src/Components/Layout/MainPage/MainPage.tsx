import { useEffect, useState } from "react";
import "./MainPage.css";
import Song from "../../../Model/Song";
import { useNavigate } from "react-router-dom";
import SingleSong from "../SingleSong/SingleSong";
import axios from "axios";

function MainPage(): JSX.Element {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
  //localStorage
  //setSongs(JSON.parse(localStorage.getItem("songs") as any))
  //Backend
  axios.get("http://localhost:4000/api/v1/videos/all").then((response) => {
  console.log(response.data);
  setSongs(response.data);
  });
  }, []);

  
    return (
        <div className="MainPage">
          <h1 className="Header">Main Page</h1>
          <hr />
          {/*songs.map((item) => (
            <div onClick={()=>navigate(`/player/${item.url.split("=")[1]}`)} className="Box">
              <img src={item.songImg} alt={item.songName} />
              <br />
              {item.songName}
            </div>
          ))*/}
          {songs.map(item=><SingleSong songID={item.url.split("=")[1]} 
          songIMG={item.img}
          songTitle={item.title} />)}
        </div>
      );
}

export default MainPage;


