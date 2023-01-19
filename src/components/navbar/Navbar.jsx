import React, { useContext } from 'react';
import './navbar.scss'
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import { Img1 } from '../../assets';
import { DarkModeContext } from '../../context/darkMode';



const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext)

  return (
    <div className='navbar'>
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Logo</span>
        </Link>
        <HomeOutlinedIcon />
        <GridViewOutlinedIcon />
        {darkMode
          ? (
            <DarkModeOutlinedIcon onClick={toggle} />
          )
          : (
            <WbSunnyOutlinedIcon onClick={toggle} />
          )
        }
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder='Search' />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <NotificationsOutlinedIcon />
        <EmailOutlinedIcon />
        <div className="user">
          <img src={Img1} alt="user" />
          <span>Yo Ting</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar