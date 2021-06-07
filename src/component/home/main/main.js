import React, { useState,useEffect } from 'react';

import FormAdmission from "./home-child/form-Admission";
import Introduce from "./introdu/introduct";
import Education from "./educate/education";
import News from "./news/news";


function Main() {
    return (
        <>
            <Introduce/>
            <Education/>
            <FormAdmission/>
            <News/>
        </>
    );
}

export default Main;
