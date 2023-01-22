import React, { useContext } from 'react'
import { AuthContext } from "../../context/authContext"
import './stories.scss'
import { Img1 } from '../../assets'
import { Img2 } from '../../assets'
import { Img3 } from '../../assets'
import { Img4 } from '../../assets'

const Stories = () => {
  const { currentUser } = useContext(AuthContext)

  const storyData = [
    {
      id: 1,
      name: "Yo Ting",
      img: Img1,
    },
    {
      id: 2,
      name: "Adam Yung",
      img: Img2,
    },
    {
      id: 3,
      name: "Arnie Hamble",
      img: Img3,
    },
    {
      id: 4,
      name: "Joshua Sandler",
      img: Img4,
    },
  ]

  return (
    <div className='stories'>
      <div className="story">
        <img src={currentUser.profilePic} alt={currentUser.profilePic} />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {storyData.map(story => (
        <div className="story" key={story.id}>
          <img src={story.img} alt={story.img} />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories