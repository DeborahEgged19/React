import WomanMan from "../../MyCompoents/WomanMan/WomanMan";
import "./Main.css";
import israel from "../../../assets/israel.jpg";
import { SyntheticEvent, useState } from "react";

function Main(): JSX.Element {
  return (
    <div className="Main">
      { <><h1>Use State and Use Effect</h1>
      <WomanMan />
      <img className="israel" src={israel} /></>}
    </div>
  );
}

export default Main;
