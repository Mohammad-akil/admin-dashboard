import React from 'react'
import Sidebar from './../../components/Sidebar';
import Navbar from './../../components/Navbar';
import DataTable from './../../components/DataTable';
import './List.scss'


const List = () => {
  return (
    <div className='list'>
        <Sidebar/>
        <div className="listContainer">
            <Navbar/>
            <DataTable/>
            
        </div>
    </div>
  )
}

export default List