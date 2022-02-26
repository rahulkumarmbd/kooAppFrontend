import whitelogo from './homeimg/logoSolidOutline.png';
import playstore from './homeimg/googlePlayBadge.png';
import applestore from './homeimg/appStoreBadge.png';
import {Link} from 'react-router-dom'

import './homeNavbar.css'

export const Feedbox = () => {
    return (
        <>
            <div className="main_bg">

                <div className="feed-box">
                <Link to="/feed">
                    <div className="koologo">
                        <img src={whitelogo} alt="" />
                    </div>
                    <div className="options">
                        <button className="btn">Go To Feed</button>
                    </div>
                </Link>
                    <div className="links">
                        <a href="">
                            <img src={playstore} alt="playstore" />
                        </a>
                        <a href="">
                            <img src={applestore} alt="appledownload" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}