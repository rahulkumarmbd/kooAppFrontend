import { LeftNav } from "./components/leftnav/leftnav";
import {RightNav} from "./components/rightnav/rightNav";
import RecipeReviewCard from './components/postDisplay'
import {TopNavbar} from './components/topnavbar.jsx'
import { UserProfile } from "./components/utilityComp";

function KooFeedPage() {
  return (<>
    <LeftNav />
    <TopNavbar />
    <RightNav />
    <RecipeReviewCard />
    <UserProfile />
  </>
  );
}

export default KooFeedPage;
