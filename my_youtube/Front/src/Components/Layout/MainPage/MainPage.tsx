import { useEffect, useState } from "react";
import "./MainPage.css";
import Song from "../../../Model/Song";
import { useNavigate } from "react-router-dom";
import SingleSong from "../SingleSong/SingleSong";

function MainPage(): JSX.Element {
    //let songs:Song[]=[];
    const [songs,setSongs]=useState<Song[]>([]);
    //const navigate = useNavigate();


    useEffect(()=>{
        setSongs(
            localStorage.getItem("songs")
            ? JSON.parse(localStorage.getItem("songs"))
    :[]
        );
    },[]);
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
          {songs.map(item=><SingleSong songID={item.url.split("=")[1]} songIMG={item.songImg} songTitle={item.songName} />)}
        </div>
      );
}

export default MainPage;


