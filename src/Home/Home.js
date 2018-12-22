import React from "react";
import "./Home.css";
import { Link } from 'react-router-dom';
import SecondaryHeader from "../SecondaryHeader/SecondaryHeader";

const Home = () => {
    return(
        <div>
        <SecondaryHeader />
            <div className="topmargin">
                <h3>Welcome to Insta Trade!!!</h3>
            </div>
        </div>
    );
}

export default Home;