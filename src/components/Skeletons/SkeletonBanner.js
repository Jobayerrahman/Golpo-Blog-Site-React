import Skeleton from "./Skeleton";

function SkeletonBanner(props) {
    return (
        <div className="banner-wrapper">
            <Skeleton classes="banner-image" /> 
            <div className="flex-col">
                <Skeleton classes="banner-tilte width-100" /> 
                <div className="flex-row" style={{marginBottom: "40px"}}>
                    <Skeleton classes="title-md width-30" /> 
                    <Skeleton classes="title-md width-40" /> 
                </div>
                <Skeleton classes="button width-50"/>
            </div>
        </div>
    );
}

export default SkeletonBanner;