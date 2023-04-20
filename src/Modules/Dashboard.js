import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartPie,faTag,faCalendarPlus,faUser,faGear,faBell } from '@fortawesome/free-solid-svg-icons'
import cardimg1 from './Images/card-img1.png'
import cardimg2 from './Images/card-img2.png'
import cardimg3 from './Images/card-img3.png'
import cardimg4 from './Images/card-img4.png'
import notif from './Images/notification.png'
import dashboardimg from './Images/dashboard_icon.png'
import scheduleimg from './Images/schedule_icon.png'
import settingimg from './Images/setting_icon.png'
import transactionimg from './Images/transaction_icon.png'
import userimg from './Images/user_icon.png'
import arrowDown from './Images/arrowdown.png'


import Chart from './linechart2';
import PieChart from './Piechart';

function App() {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="logo">
          Board.
        </div>
        <div className="options">
          <div className="option" style={{"filter":"brightness(100%)"}}>
          <img className='fa' src={dashboardimg}/>
            <span>Dashboard</span>
          </div>
          <div className="option">
          <img className='fa' src={transactionimg}/>
            <span>Transactions</span>
          </div>
          <div  className="option">
          <img className='fa' src={scheduleimg}/>
            <span>Schedules</span>
          </div>
          <div className="option">
          <img className='fa' src={userimg}/>
            <span>Users</span>
          </div>
          <div className="option">
          <img className='fa' src={settingimg}/>
            <span>Settings</span>
          </div>
          <div className='option' style={{"margin-top":"200px","margin-left":"20px"}}>
            <span style={{"font-size":"14px"}}>Help</span><br/>
          </div>
          <div className='option' style={{"margin-top":"0px","margin-left":"20px"}}>
            <span style={{"font-size":"14px"}}>Contact Us</span><br/>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="header">
          <div className="dashboard">
            <span>Dashboard</span>
          </div>
          <div className="header-right">
            <input style={{"border-radius":"10px"}} placeholder='Search...'/>
            <img style={{"margin-left":"10px"}} src={notif}/>
            <FontAwesomeIcon style={{"margin-left":"10px","color":"black"}} icon={faUser} />
          </div>
        </div>
        <div className="content">
          <div className='card' style={{background:"#DDEFE0"}}>
            <div className='card-content'>
              <div className='card-text'>
                <p className='card-text-text'>Total Revenue</p>
                <p className='card-num'>$2,129,430</p>
            </div>
            <div>
            <img class="card-icon" src={cardimg1}/>
            </div>
            </div>
      
          </div>
          <div className='card' style={{background:"#F4ECDD"}}>
          <div className='card-content'>
              <div className='card-text'>
                <p className='card-text-text'>Total Transactions</p>
                <p className='card-num'>1,520</p>
            </div>
            <div>
            <img class="card-icon" src={cardimg2}/>
            </div>
            </div>

          </div>
          <div className='card' style={{background:"#EFDADA"}}>
           
          <div className='card-content'>
              <div className='card-text'>
                <p className='card-text-text'>Total Likes</p>
                <p className='card-num'>9,721</p>
            </div>
            <div>
            <img class="card-icon" style={{"margin-left":"90px"}} src={cardimg3}/>
            </div>
            </div>
          </div>
          <div className='card' style={{background:"#DEE0EF"}}>
          <div className='card-content'>
              <div className='card-text'>
                <p className='card-text-text'>Total Users</p>
                <p className='card-num'>892</p>
            </div>
            <div>
            <img class="card-icon" style={{"margin-left":"90px"}} src={cardimg4}/>
            </div>
            </div>

          </div>
        </div>
{   /*  */                          }

            <div className='lineChartCs'>
              <h3 style={{"margin-left":"25px","padding-down":"0px"}}>Activities</h3>
              <p style={{"margin-left":"25px","color":"#858585"}} > Mar-June 2021 <img style={{"margin-left":"10px"}} src={arrowDown}></img></p>
              <div style={{"margin-left":"10px"}}>
              <Chart/>
              </div>
            </div>

            <div className='pieChart-Container'>
              <div className='pieChart'>
                <div className='piechart-category'>
                <div>
                <h3 style={{"margin-left":"30px"}}>Top Products</h3>
                </div>
                <div>
                <p style={{"margin-left":"180px","margin-top":"18px","color":"#858585"}} > Mar-June 2021 <img style={{"margin-left":"10px"}} src={arrowDown}></img></p>
                </div>
                </div>
                <PieChart/>
              </div>
              <div className='CurrentNews'>
                <h3 style={{"margin-left":"30px"}}>Today's schedule </h3>
                <div className='news'>
                  <div className='newsColor' style={{"background-color":"#9BDD7C"}}>
                  </div>
                  <div className='newsText'>
                    <span style={{"margin-left":"10px"}}>Meetup with Cloth manufacturer</span>
                    <br/>
                    <span style={{"margin-left":"10px","color":"#999999","font-size":"12px"}}>14:00-15:00</span>
                    <br/>
                    <span style={{"margin-left":"10px","color":"#999999","font-size":"12px"}}>at Gurugram, Haryana</span>
                  </div>
                </div>

                <div  className='news' style={{"margin-top":"10px"}} >
                  <div className='newsColor' style={{"background-color":"#6972C3"}}>
                  </div>
                  <div className='newsText'>
                    <span style={{"margin-left":"10px"}}>Check operation at Giga Factory 1</span>
                    <br/>
                    <span style={{"margin-left":"10px","color":"#999999","font-size":"12px"}}>18:00-19:00</span>
                    <br/>
                    <span style={{"margin-left":"10px","color":"#999999","font-size":"12px"}}>at Central Jakarta</span>
                  </div>
                </div>

              </div>
            </div>
      </div>
    </div>
  );
}

export default App;
