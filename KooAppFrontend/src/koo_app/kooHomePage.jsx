import PrimarySearchAppBar, { HomeNavbar } from "./components/home/homeNavbar";
import '../koo_app/components/home/homeNavbar.css'
import { Feedbox } from "./components/home/feedbox";
import { Bottom } from "./components/home/bottom";
function KooHomePage() {
    return (<>
        <div className = "home">
            <PrimarySearchAppBar />
            <Feedbox/>
            <Bottom/>
        </div>
    </>
    );
}

export default KooHomePage;