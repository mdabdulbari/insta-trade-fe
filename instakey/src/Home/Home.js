import React from "react";
import "./Home.css";
import { Link } from 'react-router-dom';
import SecondaryHeader from "../SecondaryHeader/SecondaryHeader";

const Home = () => {
    return(
        <div>
        <SecondaryHeader />
            <div className="topmargin">
                <Link to="/login">Sign In</Link>
            </div>
        </div>
    );
}

export default Home;