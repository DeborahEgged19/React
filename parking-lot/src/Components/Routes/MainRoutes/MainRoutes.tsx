import { Route, Routes } from "react-router-dom";
import "./MainRoutes.css";
import Parking from "../../Pages/Parking/Parking";
import About from "../../Pages/About/About";
import Login from "../../Pages/Login/Login";
import Edit from "../../Pages/Edit/Edit";
import Home from "../../Pages/Home/Home";
import Page404 from "../../Pages/Page404/Page404";

function MainRoutes(): JSX.Element {
    return (
        <div className="MainRoutes">
		<Routes>
        <Route path="/parkingList" element={<Parking />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/edit/:parkingNumber" element={<Edit />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
        </div>
    );
}

export default MainRoutes;
