import React, { useState } from 'react';
import './NavBar.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import WidgetsIcon from '@mui/icons-material/Widgets';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = ({handleMinize,minimize,handleMobileMinize}) => {
    const [notification, setNotification] = useState(false);

    const toggleNotification = () => {
        setNotification(prevNotification => !prevNotification);
    };

    return (
        <div className="navbar">
            <div className="navbar-left">
                <div className="navbar-left-icon">
                    <AutoAwesomeMosaicIcon style={{fontSize:'40px', cursor: 'pointer'}} onClick={handleMinize } />
                </div>
                <div className="navbar-left-mobile">
                    <MenuIcon onClick={handleMobileMinize} style={{fontSize:'40px', cursor: 'pointer'}}/>
                </div>
                <div className="navbar-search">
                    <SearchIcon />
                    <input type="text" placeholder='Search anything' />
                </div>
            </div>
            <div className="navbar-right">
                <PersonIcon style={{ fontSize: '30px' }} className='navbar-icon' />
                <div className="navbar-notification" onClick={toggleNotification}>
                    <div className="navbar-notification-counter">2</div>
                    <NotificationsIcon style={{ fontSize: '30px' }} className='navbar-icon' />
                </div>
                <WidgetsIcon style={{ fontSize: '30px' }} className='navbar-icon' />
            </div>
            <div
                className="notification-drop"
                style={{ height: notification ? 'auto' : '0', overflow: 'hidden', transition: 'height 0.3s ease' }}
            >
                <div className="notification-item">
                    <AccountBalanceWalletIcon style={{ color: 'blue' }} />
                    <span>These properties are creating a shadow with a horizontal offset of 6px to the right. To remove the box shadow from the left, you can set the horizontal offset to 0px. Here's how you can update your CSS: </span>
                </div>
                <div className="notification-item">
                    <AccountBalanceWalletIcon style={{ color: 'blue' }} />
                    <span>These properties are creating a shadow with a horizontal offset of 6px to the right. To remove the box shadow from the left, you can set the horizontal offset to 0px. Here's how you can update your CSS: </span>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
