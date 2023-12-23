import { useState } from "react";
import Car from "../../../Modal/Car";
import "./Parking.css";
//first we will check if we have something in the array of the parking
//let parking:Car[]=[];
const [parking, setParking] = useState<Car[]>([]);
if(localStorage.getItem("parking")===null){

}

function Parking(): JSX.Element {
    return (
        <div className="Parking">
			
        </div>
    );
}

export default Parking;
