import React from 'react';
import './Dashboard.css';
import DescWidget from '../../components/DescWidget/DescWidget';
import { dashboard_data } from '../../data/dashboard';
import LineChartComponent from '../../components/Charts/Line';
import BarChartComponent from '../../components/Charts/Bar';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { CalendarComponent } from '../../components/calender/Calender';
const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dashboard-desc">
                {dashboard_data.map((item) => (
                    <DescWidget 
                        count = {item.count}
                        name = {item.name}
                        icon = {item.icon}
                        desc = {item.desc}
                    /> 
                ))}
            </div>
            <div className="charts">
                <LineChartComponent />
                <BarChartComponent />
            </div>
            <div className="fotter">
                <div className="footer-table">
                    <div className="footer-table-header">
                        <span>Appointments</span>
                        <input type="date" placeholder='Select date'/>
                    </div>
                    <div className="footer-table-rows">
                        {/* row  start*/}
                        <div className="footer-table-item">
                            <div className="footer-table-item-profile">
                                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="profile" />
                            </div>
                            <span>Mbio Peter</span>
                        </div>
                        <div className="footer-table-item">10:30 - 11:00</div>
                        <div className="footer-table-item">11/06/2024</div>
                        <div className="footer-table-item">John Doe</div>
                        <div className="footer-table-item footer-action">
                            <button>complete</button>
                            <div className="VisibilityOffIcon">
                                <VisibilityOffIcon   style={{color: 'lime', cursor: 'pointer'}}/>
                            </div>
                        </div>
                        {/* row end */}
                        {/* row  start*/}
                        <div className="footer-table-item">
                            <div className="footer-table-item-profile">
                                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="profile" />
                            </div>
                            <span>Mbio Peter</span>
                        </div>
                        <div className="footer-table-item">10:30 - 11:00</div>
                        <div className="footer-table-item">11/06/2024</div>
                        <div className="footer-table-item">John Doe</div>
                        <div className="footer-table-item footer-action">
                            <button>complete</button>
                            <div className="VisibilityOffIcon">
                                <VisibilityOffIcon   style={{color: 'lime', cursor: 'pointer'}}/>
                            </div>
                        </div>
                        {/* row end */}
                        {/* row  start*/}
                        <div className="footer-table-item">
                            <div className="footer-table-item-profile">
                                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="profile" />
                            </div>
                            <span>Mbio Peter</span>
                        </div>
                        <div className="footer-table-item">10:30 - 11:00</div>
                        <div className="footer-table-item">11/06/2024</div>
                        <div className="footer-table-item">John Doe</div>
                        <div className="footer-table-item footer-action">
                            <button>complete</button>
                            <div className="VisibilityOffIcon">
                                <VisibilityOffIcon   style={{color: 'lime', cursor: 'pointer'}}/>
                            </div>
                        </div>
                        {/* row end */}
                        {/* row  start*/}
                        <div className="footer-table-item">
                            <div className="footer-table-item-profile">
                                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="profile" />
                            </div>
                            <span>Mbio Peter</span>
                        </div>
                        <div className="footer-table-item">10:30 - 11:00</div>
                        <div className="footer-table-item">11/06/2024</div>
                        <div className="footer-table-item">John Doe</div>
                        <div className="footer-table-item footer-action">
                            <button>complete</button>
                            <div className="VisibilityOffIcon">
                                <VisibilityOffIcon   style={{color: 'lime', cursor: 'pointer'}}/>
                            </div>
                        </div>
                        {/* row end */}
                        {/* row  start*/}
                        <div className="footer-table-item">
                            <div className="footer-table-item-profile">
                                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="profile" />
                            </div>
                            <span>Mbio Peter</span>
                        </div>
                        <div className="footer-table-item">10:30 - 11:00</div>
                        <div className="footer-table-item">11/06/2024</div>
                        <div className="footer-table-item">John Doe</div>
                        <div className="footer-table-item footer-action">
                            <button>complete</button>
                            <div className="VisibilityOffIcon">
                                <VisibilityOffIcon   style={{color: 'lime', cursor: 'pointer'}}/>
                            </div>
                        </div>
                        {/* row end */}
                        {/* row  start*/}
                        <div className="footer-table-item">
                            <div className="footer-table-item-profile">
                                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="profile" />
                            </div>
                            <span>Mbio Peter</span>
                        </div>
                        <div className="footer-table-item">10:30 - 11:00</div>
                        <div className="footer-table-item">11/06/2024</div>
                        <div className="footer-table-item">John Doe</div>
                        <div className="footer-table-item footer-action">
                            <button>complete</button>
                            <div className="VisibilityOffIcon">
                                <VisibilityOffIcon   style={{color: 'lime', cursor: 'pointer'}}/>
                            </div>
                        </div>
                        {/* row end */}
                        {/* row  start*/}
                        <div className="footer-table-item">
                            <div className="footer-table-item-profile">
                                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="profile" />
                            </div>
                            <span>Mbio Peter</span>
                        </div>
                        <div className="footer-table-item">10:30 - 11:00</div>
                        <div className="footer-table-item">11/06/2024</div>
                        <div className="footer-table-item">John Doe</div>
                        <div className="footer-table-item footer-action">
                            <button>complete</button>
                            <div className="VisibilityOffIcon">
                                <VisibilityOffIcon   style={{color: 'lime', cursor: 'pointer'}}/>
                            </div>
                        </div>
                        {/* row end */}
                        {/* row  start*/}
                        <div className="footer-table-item">
                            <div className="footer-table-item-profile">
                                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="profile" />
                            </div>
                            <span>Mbio Peter</span>
                        </div>
                        <div className="footer-table-item">10:30 - 11:00</div>
                        <div className="footer-table-item">11/06/2024</div>
                        <div className="footer-table-item">John Doe</div>
                        <div className="footer-table-item footer-action">
                            <button>complete</button>
                            <div className="VisibilityOffIcon">
                                <VisibilityOffIcon   style={{color: 'lime', cursor: 'pointer'}}/>
                            </div>
                        </div>
                        {/* row end */}
                        {/* row  start*/}
                        <div className="footer-table-item">
                            <div className="footer-table-item-profile">
                                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="profile" />
                            </div>
                            <span>Mbio Peter</span>
                        </div>
                        <div className="footer-table-item">10:30 - 11:00</div>
                        <div className="footer-table-item">11/06/2024</div>
                        <div className="footer-table-item">John Doe</div>
                        <div className="footer-table-item footer-action">
                            <button>complete</button>
                            <div className="VisibilityOffIcon">
                                <VisibilityOffIcon   style={{color: 'lime', cursor: 'pointer'}}/>
                            </div>
                        </div>
                        {/* row end */}
                        {/* row  start*/}
                        <div className="footer-table-item">
                            <div className="footer-table-item-profile">
                                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="profile" />
                            </div>
                            <span>Mbio Peter</span>
                        </div>
                        <div className="footer-table-item">10:30 - 11:00</div>
                        <div className="footer-table-item">11/06/2024</div>
                        <div className="footer-table-item">John Doe</div>
                        <div className="footer-table-item footer-action">
                            <button>complete</button>
                            <div className="VisibilityOffIcon">
                                <VisibilityOffIcon   style={{color: 'lime', cursor: 'pointer'}}/>
                            </div>
                        </div>
                        {/* row end */}
                    </div>
                </div>
                <div className="footer-calender">
                    <CalendarComponent />
                    <div className="footer-calender-user">
                        <div className="footer-calender-img">
                                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="profile" />   
                                <h6>Jessica Dahigren</h6>
                                <span>Kung Oscar 22300, sweden</span>
                        </div>
                        <span className='footer-calender-user-title'>Patient Details</span>
                        <div className="fotter-calender-desc">
                            <span>D.O.B</span>
                            <span>10 october 1996</span>
                            <span>Weight</span>
                            <span>70kgs</span>
                            <span>Height</span>
                            <span>70Kgs</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
