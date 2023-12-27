import { useNavigate } from "react-router-dom";
import "./SingleSong.css";

interface SongProps{
    songID:string;
    songIMG:string;
    songTitle:string;
}

function SingleSong(props:SongProps): JSX.Element {
    const navigate =useNavigate();
    return (
        <div className="SingleSongBox"
        onClick={()=>navigate("/player/"+props.songID)}>
		<img src={props.songIMG}/>
        <br/>
        {props.songTitle}
        <br/>
        </div>
    );
}

export default SingleSong;
