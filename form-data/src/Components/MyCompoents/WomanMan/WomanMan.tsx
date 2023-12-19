import { useEffect, useState } from "react";
import "./WomanMan.css";

function WomanMan(): JSX.Element {
  const citiesList = ["Tel Aviv", "Jerusalem", "Ramat-Gan", "Natanya", "Givat-Shmuel"];
  const actionList = [
    "Is a great city",
    "It is a noisy city",
    "It is a quiet city",
  ];

  const getRandom = (myArray: any) => {
    return myArray[Math.floor(Math.random() * myArray.length)];
  };
  
  //old style

//   function getRandomFunction(myArray:any):String{
//     return myArray[Math.floor(Math.random() * myArray.length)];
//   }

  const [city, setCity] = useState(getRandom(citiesList));

  //     variable   function
  const [myAction, setMyAction] = useState(getRandom(actionList));

  useEffect(() => {
    setInterval(() => {
      setCity(getRandom(citiesList));
      setMyAction(getRandom(actionList));
    }, 1000);
  }, []);

  return (
    <div className="WomanMan">
      <h1>
        {city} {myAction}
      </h1>
    </div>
  );
}

export default WomanMan;
