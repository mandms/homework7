import {IComment} from "../models";
import "./Comment.css";

interface CommentProps {
    comment: IComment
}

export function Comment({comment}: CommentProps) {
    return (
        <>
            <div className="comment">
                <img className="comment__avatar" src={comment.user.avatar} alt={comment.user.name}/>
                <p className="comment__text">
                    <span className="comment__username">{comment.user.name}</span>
                    <br/>
                    {comment.text}
                </p>
                <p className="comment__rating">{comment.rating}/5</p>
            </div>
        </>
    )
}