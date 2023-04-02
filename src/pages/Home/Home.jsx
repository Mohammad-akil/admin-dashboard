import React from 'react'
import './Home.scss'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import Widget from '../../components/Widget'
import Featured from '../../components/Featured'
import Chart from '../../components/Chart'
import Tabel from '../../components/Tabel';

const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>   
        <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
            <Widget type='user'/>
            <Widget type='order'/>
            <Widget type='earning'/>
            <Widget type='balance'/>
          </div>
          <div className="charts">
            <Featured/>
            <Chart/>
          </div>
          <div className='listContainer'>
              <div className="listTitle">Latest Transactions</div>
              <Tabel/>
          </div>
        </div>
    </div>
  )
}

export default Home