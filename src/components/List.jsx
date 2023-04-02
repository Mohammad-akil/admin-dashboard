import React from 'react'
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import DataTable from './DataTable';

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