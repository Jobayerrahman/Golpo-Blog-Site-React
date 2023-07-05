import Bannerposter from './Bannerposter';
import Mainbannercontent from './Mainbannercontent';

export default function Banner(){
    return(
        <div className="banner-wrapper">
            <Bannerposter/>
            <Mainbannercontent/>
        </div>
    )
}