export interface IComment {
    id: string
    text: string
    rating: number
    user: {
        name: string,
        avatar: string
    }
}