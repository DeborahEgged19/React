import { Route, Routes } from "react-router-dom";
import "./MainRouting.css";
import MainPage from "../../Layout/MainPage/MainPage";
import Page404 from "../../Pages/Page404/Page404";
import AddSong from "../../Layout/AddSong/AddSong";
import AddCat from "../../Layout/AddCat/AddCat";
import Songs from "../../Layout/Songs/Songs";

function MainRouting(): JSX.Element {
    return (
        <div className="MainRouting">
			<Routes>
                    <Route path="/addSong" element={<AddSong />} />
                    <Route path="/addCat" element={<AddCat />} />
                    <Route path="/songsByCat:/catName" element={<Songs />} />
                    <Route path="/" element={<MainPage />} />
                    <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}

export default MainRouting;
