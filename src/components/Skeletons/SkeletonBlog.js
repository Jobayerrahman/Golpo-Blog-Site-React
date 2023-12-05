import Skeleton from "./Skeleton";

function SkeletonBlog(props) {
    return (
        <div className="blog-card">
            <Skeleton classes="banner-image" /> 
            <div className="flex-col">
                <Skeleton classes="banner-tilte width-100" /> 
                <div className="flex-row" style={{marginBottom: "40px"}}>
                    <Skeleton classes="title-md width-30" /> 
                    <Skeleton classes="title-md width-50" /> 
                </div>
                <Skeleton classes="button width-60"/>
            </div>
        </div>
    );
}

export default SkeletonBlog;