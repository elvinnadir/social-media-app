import React, { useContext } from 'react'
import './comments.scss'
import { Img1 } from '../../assets'
import { Img2 } from '../../assets'
import { Img3 } from '../../assets'
import { Img4 } from '../../assets'
import { AuthContext } from '../../context/authContext'


const Comments = () => {

    const { currentUser } = useContext(AuthContext)

    const commentData = [
        {
            id: 1,
            name: "Yo Ting",
            userId: 1,
            img: Img1,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            id: 2,
            name: "Adam Yung",
            userId: 2,
            img: Img2,
            desc: "Morbi ut faucibus mauris, sodales ultricies elit.",
        },
        {
            id: 3,
            name: "Arnie Hamble",
            userId: 3,
            img: Img3,
            desc: "Mauris interdum, dui ac blandit efficitur, purus arcu ornare lorem,",
        },
        {
            id: 4,
            name: "Joshua Sandler",
            userId: 4,
            img: Img4,
            desc: "Aliquam pretium leo et justo placerat fermentum.",
        },
    ]




    return (
        <div className='comments'>
            <div className="messageField">
                <img src={currentUser.profilePic} alt={currentUser.profilePic} />
                <input type="text" placeholder='Write a comment' />
                <button>Send</button>
            </div>
            {commentData.map(comment => (
                <div className="comment">
                    <img src={comment.img} alt={comment.img} />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className='date'>1 hour ago</span>
                </div>
            ))}
        </div>
    )
}

export default Comments