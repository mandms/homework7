import {IComment} from "../models";
import {useState} from "react";

export function useComments() {
    const [comments, setComments] = useState<IComment[]>([])

    function addComment(comment: IComment) {
        setComments(prev => [...prev, comment])
    }

    return {comments, addComment}
}