import SingleCommentComponent from "./SingleCommentComponent";

export default function Comment(){
    return(
        <div className="comment-wrapper">
            <SingleCommentComponent/>
            <SingleCommentComponent/>
            <SingleCommentComponent/>
        </div>
    )
}