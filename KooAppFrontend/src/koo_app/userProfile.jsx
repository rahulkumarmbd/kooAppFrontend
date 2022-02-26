import { LeftNav } from "./components/leftnav/leftnav";
import {RightNav} from "./components/rightnav/rightNav";
import {TopNavbar} from './components/topnavbar.jsx'
import { UserProfile } from "./components/utilityComp";

function Profile() {
  return (<>
    <LeftNav />
    <TopNavbar />
    <UserProfile />
    <RightNav />
  </>
  );
}

export default Profile;
