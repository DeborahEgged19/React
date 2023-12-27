import { Button, ButtonGroup } from "@mui/material";
import "./Categories.css";
import cat from "../../../Model/Cat";
import { useNavigate } from "react-router-dom";

function Categories(): JSX.Element {
    const navigate= useNavigate();
    return (
        <div className="Categories">
			Categories
            <hr/>
            {cat.allCat().map((item)=>(
            <div></div>
            ))}
            <br/>
            <br/>
            <ButtonGroup>
            <Button variant="contained" color="primary" onClick={
                ()=> navigate("/AddSong")
            }>Add Song</Button>
            <br/> <br/>
            <Button variant="contained" color="secondary">Add Categories</Button>
            </ButtonGroup>
        </div>
    )
}

export default Categories;
