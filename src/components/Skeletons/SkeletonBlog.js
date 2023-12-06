import Skeleton from "./Skeleton";

function SkeletonBlog() {
    return (
        <div className="blog-card">
            <Skeleton classes="blog-image"/> 
            <div style={{padding: "5px", alignItems: "center"}}>
                <Skeleton classes="blog-tilte width-100" /> 
                <div className="flex-row" style={{marginBottom: "30px"}}>
                    <Skeleton classes="title-md width-30" /> 
                    <Skeleton classes="title-md width-50" /> 
                </div>
                <Skeleton classes="title-lg width-100"/>
            </div>
        </div>
    );
}

export default SkeletonBlog;