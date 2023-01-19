import React from 'react'
import './rightBar.scss'
import { Img1 } from '../../assets'

const RightBar = () => {
  return (
    <div className='rightBar'>
      <div className="container">
        <div className="items">
          <span>Suggestions for you</span>
          <div className="user">
            <div className="userInfo">
              <img src={Img1} alt="" />
              <span>Yo Ting</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Img1} alt="" />
              <span>Yo Ting</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="items">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src={Img1} alt="" />
              <p>
                <span>Yo Ting</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Img1} alt="" />
              <p>
                <span>Yo Ting</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>

        </div>
        <div className="items">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src={Img1} alt="" />
              <div className="circle" />
              <span>Yo Ting</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Img1} alt="" />
              <div className="circle" />
              <span>Yo Ting</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Img1} alt="" />
              <div className="circle" />
              <span>Yo Ting</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Img1} alt="" />
              <div className="circle" />
              <span>Yo Ting</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Img1} alt="" />
              <div className="circle" />
              <span>Yo Ting</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar