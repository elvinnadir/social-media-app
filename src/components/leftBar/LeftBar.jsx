import React, { useContext } from 'react'
import './leftBar.scss'
import { FriendIcon } from '../../assets'
import { NetworkIcon } from '../../assets'
import { MarketIcon } from '../../assets'
import { WatchIcon } from '../../assets'
import { MemoryIcon } from '../../assets'
import { EventIcon } from '../../assets'
import { GameIcon } from '../../assets'
import { GaleryIcon } from '../../assets'
import { VideosIcon } from '../../assets'
import { MsgIcon } from '../../assets'
import { TutorialIcon } from '../../assets'
import { FundIcon } from '../../assets'
import { CourseIcon } from '../../assets'
import { AuthContext } from '../../context/authContext'



const LeftBar = () => {
  const { currentUser } = useContext(AuthContext)

  return (
    <div className='leftBar'>
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt="user" />
            <span>{currentUser.name}</span>
          </div>
          <div className="items">
            <img src={FriendIcon} alt="friends" />
            <span>Friends</span>
          </div>
          <div className="items">
            <img src={NetworkIcon} alt="group" />
            <span>Group</span>
          </div>
          <div className="items">
            <img src={MarketIcon} alt="marketplace" />
            <span>Marketplace</span>
          </div>
          <div className="items">
            <img src={WatchIcon} alt="watching" />
            <span>Watch</span>
          </div>
          <div className="items">
            <img src={MemoryIcon} alt="memories" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="items">
            <img src={EventIcon} alt="event" />
            <span>Events</span>
          </div>
          <div className="items">
            <img src={GameIcon} alt="game" />
            <span>Gaming</span>
          </div>
          <div className="items">
            <img src={GaleryIcon} alt="galery" />
            <span>Gallery</span>
          </div>
          <div className="items">
            <img src={VideosIcon} alt="videos" />
            <span>Videos</span>
          </div>
          <div className="items">
            <img src={MsgIcon} alt="messages" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="items">
            <img src={FundIcon} alt="fundraser" />
            <span>Fundraser</span>
          </div>
          <div className="items">
            <img src={TutorialIcon} alt="tutorials" />
            <span>Tutorials</span>
          </div>
          <div className="items">
            <img src={CourseIcon} alt="courses" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar