import React, { useContext } from 'react'
import { AuthContext } from "../../context/authContext";
import { MapIcon } from '../../assets';
import { FriendIcon } from '../../assets';
import { FileIcon } from '../../assets';
import './share.scss'

const Share = () => {
    const { currentUser } = useContext(AuthContext)

    return (
        <div className="share">
            <div className="container">
                <div className="top">
                    <img
                        src={currentUser.profilePic}
                        alt=""
                    />
                    <input type="text" placeholder={`What's on your mind ${currentUser.name}?`} />
                </div>
                <hr />
                <div className="bottom">
                    <div className="left">
                        <input type="file" id="file" style={{ display: "none" }} />
                        <label htmlFor="file">
                            <div className="item">
                                <img src={FileIcon} alt="" />
                                <span>Add Image</span>
                            </div>
                        </label>
                        <div className="item">
                            <img src={MapIcon} alt="" />
                            <span>Add Place</span>
                        </div>
                        <div className="item">
                            <img src={FriendIcon} alt="" />
                            <span>Tag Friends</span>
                        </div>
                    </div>
                    <div className="right">
                        <button>Share</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Share