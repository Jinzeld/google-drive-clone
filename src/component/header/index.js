import React from 'react'
import '../../styles/Header.css'

import GDriveLogo from '../../media/google-drive-logo.png'
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AppsIcon from '@mui/icons-material/Apps';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';

const index = () => {
  return (
    <div className='header'>
        <div className='header_logo'>
            <img src={GDriveLogo} alt='Google Drive'/>
            <span>CS Local Bois Storage</span>
        </div>
        <div className='header_searchContainer'>
            <div className="header_searchBar">
                <SearchIcon />
                <input type='text' placeholder='Search in Drive'/>
                <ExpandMoreIcon />
            </div>
        </div>
        <div className='header_icons'>
            <span className='help_outline'>
                <HelpOutlineIcon />
            </span>
            <span>
                <SettingsIcon />
            </span>
            <AppsIcon />
            <img src="" alt='User Photos'/>
        </div>
    </div>
  )
}

export default index
