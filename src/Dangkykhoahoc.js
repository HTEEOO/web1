import React, { useState, useEffect } from "react";
import { gapi } from "gapi-script";
import Header from "./component/Header";
import And from "./component/And";
import Dangky from "./component/Dangkykhoahoc1";
const CLIENT_ID = "722143859292-pmv3lviq7llak29ok5qna1fii31mlaql.apps.googleusercontent.com";
const API_KEY = "AIzaSyCISnNxCImw1MT8J7GQg0oxemiV--aItrs";
const SPREADSHEET_ID = "1TC3COaRc1KxzoqMVH5Smr8YMw_OQsx4Mz9-9AUzzoI0";

function FormDK() {
   

    return (

        <div>
            <Header />
           <Dangky />
            <And />
        </div>
    );
}

export default FormDK;