import { LeftNav } from "./components/leftnav/leftnav";
import {RightNav} from "./components/rightnav/rightNav";
import RecipeReviewCard from './components/postDisplay'
import {TopNavbar} from './components/topnavbar.jsx'
import { UserProfile } from "./components/utilityComp";

function KooFeedPage() {
  return (<>
    <LeftNav />
    <TopNavbar />
    <RecipeReviewCard />
    <RightNav />
    {/* <UserProfile /> */}
  </>
  );
}

export default KooFeedPage;
