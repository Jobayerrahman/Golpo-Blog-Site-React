import Bannerposter from './Bannerposter';
import Singlebannercontent from './Singlebannercontent';

export default function Blogbanner(){
    return(
        <div className="banner-wrapper">
            <Bannerposter/>
            <Singlebannercontent/>
        </div>
    )
}