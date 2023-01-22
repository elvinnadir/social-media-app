import React from 'react'
import './posts.scss'
import { Img1 } from '../../assets'
import { Img2 } from '../../assets'
import { Img3 } from '../../assets'
import { Img4 } from '../../assets'
import Post from '../post/Post'

const Posts = () => {

    const postData = [
        {
            id: 1,
            name: "Yo Ting",
            userId:1,
            img: Img1,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            id: 2,
            name: "Adam Yung",
            userId:2,
            img: Img2,
            desc: "Morbi ut faucibus mauris, sodales ultricies elit.",
        },
        {
            id: 3,
            name: "Arnie Hamble",
            userId:3,
            img: Img3,
            desc: "Mauris interdum, dui ac blandit efficitur, purus arcu ornare lorem,",
        },
        {
            id: 4,
            name: "Joshua Sandler",
            userId:4,
            img: Img4,
            desc: "Aliquam pretium leo et justo placerat fermentum.",
        },
    ]

    return (
        <div className='posts'>
            {postData.map(post => (
                <Post post={post} key={post.id} />
            ))}
        </div>
    )
}

export default Posts