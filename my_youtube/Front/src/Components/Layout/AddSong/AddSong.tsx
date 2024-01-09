/*import { Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import "./AddSong.css";
import cat from "../../../Model/Cat";
import Song from "../../../Model/Song";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddSong(): JSX.Element {
  const apiKey = 'AIzaSyCrVV4Z7MrPNrwYCauxAwuWEY7A4HCZatU';
  const [songImg, setsongImg] = useState("");
  const [songName, setSongName] = useState("");
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<Song>();

  const send = async (userData: Song) => {
    let songs:Song[]=[];
    const songIdentifier = userData.url.split('=')[1];
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${songIdentifier}&fields=items(id%2Csnippet)&key=${apiKey}`
      );

      setSongName(response.data.items[0].snippet.title);
      setsongImg(response.data.items[0].snippet.thumbnails.medium.url);
      userData.songImg = response.data.items[0].snippet.thumbnails.medium.url;
      userData.songName = response.data.items[0].snippet.title;
      console.log(userData);

      // שמור את הנתונים ב-LocalStorage
      /*if (localStorage.getItem("songs")) {
        let songs = JSON.parse(localStorage.getItem("songs"));
        songs.push(userData);
        localStorage.setItem("songs", JSON.stringify(songs));
      } else {
        console.log("false");
        let songs = [];
        songs.push(userData);
        localStorage.setItem("songs", JSON.stringify(songs));
      }*/
      
      // ניתן להוסיף את הלוגיקה לעבור לדף אחרי השמירה ב-LocalStorage
      // await axios.post('http://localhost:8080/api/v1/videos/addSong', userData);
      // navigate('/');

      /*songs=localStorage.getItem("songs")?JSON.parse(localStorage.getItem("songs")):[];
      songs.push(userData);
      localStorage.setItem("songs", JSON.stringify(songs));

    } catch (error) {
      console.error(error);
    }

    navigate("/");
  };
  return (
    <div className="AddSongBox">
      <h1>Add New Song</h1>
      <form onSubmit={handleSubmit(send)}>
        <InputLabel id="labelUrl">Youtube URL: </InputLabel>
        <TextField
          placeholder="enter youtube URL"
          style={{ width: '80%' }}
          {...register('url')}
        />
        <br /> <br />
        <InputLabel id="labelCat">Select Category: </InputLabel>
        <Select
          labelId="labelCat"
          style={{ width: '80%' }}
          {...register('category')}
        >
          {cat.allCat().map((item) => (
            <MenuItem value={item} key={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
        <br />
        <br />
        <Button
          type="submit"
          style={{ width: '10rem' }}
          variant="outlined"
          color="success"
        >
          Add Song
        </Button>
      </form>
      <br />
      {songImg.length > 1 && <img src={songImg} style={{ width: '150px', height: 'auto' }} alt={songImg} />}
      <br />
      {songName.length > 1 && <div>{songName}</div>}
      <br />
    </div>
  );
}

export default AddSong;*/


import { useState } from "react";
import "./AddSongForm.css";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import Song from "../../../Model/Song";


function AddSongForm(): JSX.Element {
  //demo song=> https://www.youtube.com/watch?v=Ggafij3sZ1g
  const [songURL, setURL] = useState("");
  const [songTitle, setTitle] = useState("");
  const [songDesc, setDesc] = useState("");
  const [songImg, setImage] = useState("");

  const navigate = useNavigate();

  const apiKey = "AIzaSyCrVV4Z7MrPNrwYCauxAwuWEY7A4HCZatU";
  const apiURL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&key=${apiKey}&id=`;
  const searchSong = () => {
    //console.log(songURL.split("=")[1]);
    const songID = songURL.split("=")[1];
    axios.get(apiURL + songID).then((response) => {
      //console.log(response.data.items[0].snippet.title);
      setTitle(response.data.items[0].snippet.channelTitle.replace("'", ""));
      setDesc(response.data.items[0].snippet.title.replace("'", ""));
      setImage(response.data.items[0].snippet.thumbnails.medium.url);
    });
  };

  const addNewSong = () => {
    let allSongs = JSON.parse(localStorage.getItem("songs") as any);
    const newSong = new Song(songDesc, songImg, songTitle, songURL);
    allSongs.push(newSong);
    //save to local storage
    //localStorage.setItem("songs",JSON.stringify(allSongs));

    //send data to backend, for saving the information...
    //youtube.dispatch(addSongAction(newSong));
    //youtube.getState().songs.allSongs.push(newSong); => will not work with redux benefits (subscribe)
    axios
      .post("http://localhost:4000/api/v1/videos/addVideo", newSong)
      .then((res) => navigate("/"));
    //navigate("/");
  };

  return (
    <div className="AddSongForm">
      <h1>add new song</h1>
      <hr />
      <input
        type="url"
        onKeyUp={(args) => {
          setURL(args.currentTarget.value);
          // console.log("my songs",songURL);
        }}
      />
      <input type="submit" value="search" onClick={searchSong} />
      <hr />
      <img src={songImg} />
      <br />
      <h2>{songTitle}</h2>
      <br />
      <hr />
      <h3>{songDesc}</h3>
      <br />
      <hr />
      <input type="submit" value="add song" onClick={addNewSong} />
    </div>
  );
}

export default AddSongForm;
