import React, { useState } from 'react';
import './SideBar.css';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccessibleIcon from '@mui/icons-material/Accessible';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import EventNoteIcon from '@mui/icons-material/EventNote';
import HealingIcon from '@mui/icons-material/Healing';
import SettingsIcon from '@mui/icons-material/Settings';
import AssessmentIcon from '@mui/icons-material/Assessment';
import BarChartIcon from '@mui/icons-material/BarChart';
import TimelineIcon from '@mui/icons-material/Timeline';
import PieChartIcon from '@mui/icons-material/PieChart';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';

const SideBar = ({minimize, MobileMinimize}) => {
    const [expanded, setExpanded] = useState('');
    const [active, setActive] = useState('');

    const handleMainClick = (menu) => {
        setExpanded(expanded === menu ? '' : menu);
    };

    const handleSubClick = (menu) => {
        setActive(menu);
    };

    return (
        <div className="sidebar" style={MobileMinimize ? {width:'70%',transition:'0.3s linear'} :MobileMinimize == false ? {width:'0%',transition:'0.3s linear'}:minimize ? {width:'5%',transition:'0.3s linear'}:null}>
            <div className="sidebar-logo" >
                <LocalHospitalIcon style={minimize ? {fontSize:'50px',color: '#007FFF'}:{fontSize:'70px',color: '#007FFF'}}/>
            </div>
            <div className="sidebar-container">
                {/* Overview Menu */}
                <div className="sidebar-main-menu" onClick={() => handleMainClick('overview')}> 
                    <span><RemoveRedEyeOutlinedIcon className='menu-icon' style={minimize ? {fontSize:'40px'}:null}/>{minimize == false && ('Overview')}</span>
                    {expanded === 'overview' && minimize == false ? <ExpandMoreIcon /> : <KeyboardArrowRightIcon />}
                </div>

                    {expanded === 'overview' && minimize == false && (
                        <>
                            <div onClick={() => handleSubClick('dashboard')} className={active === 'dashboard' ? 'sidebar-sub-menu active' : 'sidebar-sub-menu'}>
                                <div className="horizontal-line">
                                    <div className="line-dot">
                                        <div className="line-dot-inner"></div>
                                    </div>
                                </div>
                                <Link to="/" style={{textDecoration:'none', color:'inherit'}}>
                                    <span><DashboardOutlinedIcon className='menu-icon'/>Dashboard</span>
                                </Link>
                            </div>
                            <div onClick={() => handleSubClick('doctors')} className={active === 'doctors' ? 'sidebar-sub-menu active' : 'sidebar-sub-menu'}>
                                <div className="horizontal-line">
                                    <div className="line-dot">
                                        <div className="line-dot-inner"></div>
                                    </div>
                                </div>
                                <Link to="/employees" style={{textDecoration:'none',color:'inherit'}}>
                                    <span><PostAddIcon className='menu-icon'/>Employees</span>
                                </Link>
                            </div>
                            <div onClick={() => handleSubClick('patients')} className={active === 'patients' ? 'sidebar-sub-menu active' : 'sidebar-sub-menu'}>
                                <div className="horizontal-line">
                                    <div className="line-dot">
                                        <div className="line-dot-inner"></div>
                                    </div>
                                </div>
                                <Link to="/patients" style={{textDecoration:'none',color:'inherit'}}>
                                    <span><AccessibleIcon className='menu-icon'/>Patients</span>
                                </Link>
                            </div>
                        </>
                    )}
                {/* Appointments Menu */}
                <div className="sidebar-main-menu" onClick={() => handleMainClick('appointments')}>         
                    <span><EventNoteIcon className='menu-icon'style={minimize ? {fontSize:'40px'}:null}/>{minimize == false && ('Appointments')}</span>
                    {expanded === 'appointments' && minimize == false ? <ExpandMoreIcon /> : <KeyboardArrowRightIcon />}
                </div>
                {expanded === 'appointments' && minimize == false && (
                    <>
                        <div onClick={() => handleSubClick('viewAppointments')} className={active === 'viewAppointments' ? 'sidebar-sub-menu active' : 'sidebar-sub-menu'}>
                            <div className="horizontal-line">
                                <div className="line-dot">
                                    <div className="line-dot-inner"></div>
                                </div>
                            </div>
                            <Link to="/appointments" style={{textDecoration:'none',color:'inherit'}}>
                                <span><VisibilityIcon className='menu-icon'/>View Appointments</span>
                            </Link>
                        </div>
                        <div onClick={() => handleSubClick('scheduleAppointment')} className={active === 'scheduleAppointment' ? 'sidebar-sub-menu active' : 'sidebar-sub-menu'}>
                            <div className="horizontal-line">
                                <div className="line-dot">
                                    <div className="line-dot-inner"></div>
                                </div>
                            </div>
                            <Link to="/schedule" style={{textDecoration:'none',color:'inherit'}}>
                                <span><ScheduleIcon className='menu-icon'/>Schedule </span>
                            </Link>    
                        </div>
                    </>
                )}
                {/* Treatment Menu */}
                <div className="sidebar-main-menu" onClick={() => handleMainClick('treatment')}>             
                    <span><HealingIcon className='menu-icon' style={minimize ? {fontSize:'40px'}:null}/>{minimize == false && ('Treatment' )}</span>
                    {expanded === 'treatment' && minimize == false ? <ExpandMoreIcon /> : <KeyboardArrowRightIcon />}
                </div>
                {expanded === 'treatment' && minimize == false && (
                    <>
                        <div onClick={() => handleSubClick('viewTreatments')} className={active === 'viewTreatments' ? 'sidebar-sub-menu active' : 'sidebar-sub-menu'}>
                            <div className="horizontal-line">
                                <div className="line-dot">
                                    <div className="line-dot-inner"></div>
                                </div>
                            </div>
                            <Link to="/treatment" style={{textDecoration:'none',color:'inherit'}}>                           
                                <span><VisibilityOffIcon className='menu-icon'/>View Treatments</span>
                            </Link>     
                        </div>
                        <div onClick={() => handleSubClick('addTreatment')} className={active === 'addTreatment' ? 'sidebar-sub-menu active' : 'sidebar-sub-menu'}>
                            <div className="horizontal-line">
                                <div className="line-dot">
                                    <div className="line-dot-inner"></div>
                                </div>
                            </div>   
                            <Link to="/treatment/New" style={{textDecoration:'none',color:'inherit'}}>
                                <span><AddCircleOutlineIcon className='menu-icon'/>Add Treatment</span>
                            </Link>
                        </div>
                    </>
                )}
                {/* Reports Menu */}
                <div className="sidebar-main-menu" onClick={() => handleMainClick('reports')}>
                    <span><AssessmentIcon className='menu-icon' style={minimize ? {fontSize:'40px'}:null}/>{minimize == false && ('Reports')}</span>                  
                    {expanded === 'reports' && minimize == false ? <ExpandMoreIcon /> : <KeyboardArrowRightIcon />}
                </div>
                {expanded === 'reports' && minimize == false && (
                    <>
                        <div onClick={() => handleSubClick('dailyReports')} className={active === 'dailyReports' ? 'sidebar-sub-menu active' : 'sidebar-sub-menu'}>
                            <div className="horizontal-line">
                                <div className="line-dot">
                                    <div className="line-dot-inner"></div>
                                </div>
                            </div>
                            <Link to="/repots/daily" style={{textDecoration:'none',color:'inherit'}}>                           
                                <span><BarChartIcon className='menu-icon'/>Daily Reports</span>
                            </Link>     
                        </div>
                        <div onClick={() => handleSubClick('monthlyReports')} className={active === 'monthlyReports' ? 'sidebar-sub-menu active' : 'sidebar-sub-menu'}>
                            <div className="horizontal-line">
                                <div className="line-dot">
                                    <div className="line-dot-inner"></div>
                                </div>
                            </div>
                            <Link to="/repots/monthly" style={{textDecoration:'none',color:'inherit'}}>                           
                                <span><TimelineIcon className='menu-icon'/>Monthly Reports</span>
                            </Link>     
                        </div>
                        <div onClick={() => handleSubClick('annualReports')} className={active === 'annualReports' ? 'sidebar-sub-menu active' : 'sidebar-sub-menu'}>
                            <div className="horizontal-line">
                                <div className="line-dot">
                                    <div className="line-dot-inner"></div>
                                </div>
                            </div>
                            <Link to="/repots/annual" style={{textDecoration:'none',color:'inherit'}}>                            
                                <span><PieChartIcon className='menu-icon'/>Annual Reports</span>
                            </Link>    
                        </div>
                    </>
                )}
                {/* Settings Menu */}
                <div className="sidebar-main-menu" onClick={() => handleMainClick('settings')}>              
                    <span><SettingsIcon className='menu-icon' style={minimize ? {fontSize:'40px'}:null}/>{minimize == false && ('Settings')}</span>   
                    {expanded === 'settings'  && minimize == false ? <ExpandMoreIcon/> : <KeyboardArrowRightIcon />}
                </div>
                {expanded === 'settings' && minimize == false && (
                    <>
                        <div onClick={() => handleSubClick('profileSettings')} className={active === 'profileSettings' ? 'sidebar-sub-menu active' : 'sidebar-sub-menu'}>
                            <div className="horizontal-line">
                                <div className="line-dot">
                                    <div className="line-dot-inner"></div>
                                </div>
                            </div>                            
                            <span><SettingsIcon className='menu-icon'/>Profile Settings</span>
                        </div>
                        <div onClick={() => handleSubClick('systemSettings')} className={active === 'systemSettings' ? 'sidebar-sub-menu active' : 'sidebar-sub-menu'}>
                            <div className="horizontal-line">
                                <div className="line-dot">
                                    <div className="line-dot-inner"></div>
                                </div>
                            </div>                            
                            <span><SettingsIcon className='menu-icon'/>System Settings</span>
                        </div>
                    </>
                )}
            </div>
            <div className="sidebar-logout">               
                {minimize == false && (<span><ExitToAppIcon className='menu-icon'/>Log Out</span>)}
            </div>
        </div>
    );
};

export default SideBar;
