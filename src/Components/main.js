import React from "react";
import './allpage.css';
import PopUp from "./PopUp/popup";

function Main() {
  return (
    <div className="Main">
        <iframe src="https://www.chrobinson.com/en-us/carriers/loadboard/?originLatitude=&originLongitude=&originCountryCode=&originStateProvinceCode=&originCity=&originRadiusMiles=100&pickupStart=2024-10-23T00%3A00%3A00&pickupEnd=2024-10-24T23%3A59%3A59&mode=A&pageSize=2001&originCountryName=" width="100%" height="100%"></iframe>
        <PopUp />
    </div>
  );
}

export default Main;
