import Banner from "../component/Banner";
import BlogList from "../component/BlogList"
import Catagories from '../component/Catagories';
export default function Homepage(){
    return(
        <div>
            <Banner/>
            <BlogList/>
            <Catagories/>
        </div>
    )
}