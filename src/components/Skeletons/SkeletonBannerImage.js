import Skeleton from "./Skeleton";

function SkeletonBannerImage(props) {
    return (
        <div className="banner-wrapper">
            <Skeleton classes="banner-image" /> 
        </div>
    );
}

export default SkeletonBannerImage;