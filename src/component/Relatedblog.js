import RelatedBlogComponent from "./RelatedBlogComponent"
export default function Relatedblog(){
    return(
        <div className="relatedblog-wrapper">
            <div className="relatedblog-header">
                <h3>You May Like Those</h3>
            </div>
            <div className="relatedblog-cards">
                <RelatedBlogComponent/>
                <RelatedBlogComponent/>
                <RelatedBlogComponent/>
            </div>
        </div>
    )
}