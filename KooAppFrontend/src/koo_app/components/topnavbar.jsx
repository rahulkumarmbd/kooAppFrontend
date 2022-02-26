import {Link} from 'react-router-dom'
import './topnavbar.css'
export const TopNavbar=()=>{

    return (
        <div className='top-navbar'>
            <Link to='/feed'>
            <span>Feed</span>
            <span>People</span>
            <span>Trending</span>
            <span>UP Election</span>
            <span>Videos</span>
            <span>Polls</span>
            <span>Cricket</span>
            <span>Following</span>
            <span>New</span>
            </Link>
        </div>
    )
}