import Banner from "../component/Banner";
import Blogs from "../component/Blogs"
import Catagories from '../component/Catagories';
export default function Homepage(){
    return(
        <div>
            <Banner/>
            <Blogs/>
            <Catagories/>
        </div>
    )
}