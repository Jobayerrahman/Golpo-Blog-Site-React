import Banner from "../component/Banner";
import Blogs from "../component/Blogs"

export default function Catagorypage({catagory}){
    console.log(catagory);
    return(
        <div>
            <Banner/>
            <Blogs/>
        </div>
    );
}