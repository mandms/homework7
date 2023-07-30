import "./App.css";
import {Comment} from "./components/Comment"
import {CreateComment} from "./components/CreateComment";
import {useComments} from "./hooks/comments";
import {IComment} from "./models";


function App() {

    const {comments, addComment} = useComments()
    const createHandler = (comment: IComment) => {
        addComment(comment)
    }

    return (
        <div className={'container'}>
            <CreateComment onCreate={createHandler}/>
            {comments.map((comment, index) => <Comment comment={comment} key={comment.id}/>)}
        </div>
    );
}

export default App;
