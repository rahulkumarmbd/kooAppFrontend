import whitelogo from './homeimg/logoSolidOutline.png';
import playstore from './homeimg/googlePlayBadge.png';
import applestore from './homeimg/appStoreBadge.png';

import './homeNavbar.css'

export const Feedbox = () => {
    return (
        <>
            <div className="main_bg">
                <div className="feed-box">
                    <div className="koologo">
                        <img src={whitelogo} alt="" />
                    </div>
                    <div className="options">
                        <button className="btn">Go To Feed</button>
                    </div>
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