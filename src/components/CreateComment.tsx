import React, {useState} from "react";
import {IComment} from "../models";
import "./CreateComment.css";
import {Rating} from "./Rating";
import {v4 as uuidv4} from 'uuid';


interface ICreateCommentProps {
    onCreate: (comment: IComment) => void
}

export function CreateComment({onCreate}: ICreateCommentProps) {

    const [value, setValue] = useState('')
    const [errors, setErrors] = useState<string[]>([])
    const [mark, setMark] = useState<number>(0)

    const commentData: IComment = {
        id: uuidv4(),
        user: {
            avatar: '/nicolas-cage.png',
            name: "Это ты"
        },
        rating: 0,
        text: ""
    }

    const handleRatingChange = (mark: number) => {
        setMark(mark)
    }

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        setErrors([])

        const errorsList: string[] = []

        if (value.trim().length === 0) {
            errorsList.push('Please enter valid comment')
        }

        if (mark === 0) {
            errorsList.push('Please enter star')
        }

        if (errorsList.length) {
            setErrors(errorsList)
            return
        }

        commentData.text = value
        commentData.rating = mark

        setValue('')
        setErrors([])
        onCreate(commentData)
    }

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <>
            <form className="comment-form" onSubmit={submitHandler}>
                <h1 className="comment-form__title">How nice was my reply?</h1>
                {errors.length !== 0 && errors.map((error, index) => <p key={index}>Error. {error}.</p>)}
                <div className="comment-form__rating-wrapper">
                    <p className="comment-form__mark">{mark}/5</p>
                    <Rating numberStars={5} onStarPick={handleRatingChange}/>
                </div>
                <textarea className="comment-form__textarea" name="form-text" id="form-text" cols="30" rows="10"
                          placeholder={'What could we improve?'} value={value}
                          onChange={handleTextChange}/>
                <button type={"submit"} className={'comment-form__button'}>Send</button>
            </form>
        </>
    );
}