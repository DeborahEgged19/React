import { useParams } from "react-router-dom";
import "./Player.css";

function Player(): JSX.Element {
    const params=useParams();
    const songID = params.videoId;
    return (
        <div className="Player">
			<iframe width="560" height="315"
            src={`https://www.youtube.com/embed/${songID}?controls=0autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
            </iframe>
        </div>
    );
}

export default Player;
