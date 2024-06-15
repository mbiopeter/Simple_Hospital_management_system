import React from 'react'
import './DescWidget.css'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
const DescWidget = (props) => {
    return (
        <div className="descwidget">
            <div className="descwidget-left">
                {props.icon}
            </div>
            <div className="descwidget-right">
                <div className="descwidget-info">
                    <span className='descwidget-info-one'>{props.count}</span>
                </div>
                <div className="descwidget-info">
                    <span className='descwidget-info-two'>{props.name}</span>
                </div>
                <div className="descwidget-info">
                    <span className='descwidget-info-three'><AccountBalanceWalletIcon style={{color:'mediumaquamarine', fontSize:'20px', marginRight:'10px'}}/>{props.desc}</span>
                </div>
            </div>
        </div>
    )
}

export default DescWidget
