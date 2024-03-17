import React from 'react'
import AddChat from './AddChat'
import QueryAllChat from './QueryAllChat'

export default function ChatContent() {
  return (
    <div className='container'>
        <ul className='nav nav-tabs' id='myTab'>
            <li className='nav-item'><a className='nav-link active' data-bs-toggle='tab' href='#tab1'>留言板</a></li>
            <li className='nav-item'><a className='nav-link' data-bs-toggle='tab' href='#tab2'>新增</a></li>
            <li className='nav-item'><a className='nav-link' data-bs-toggle='tab' href='#tab3'>查詢</a></li>
        </ul>

        <div className='tab-content' id='myTabContent'>
            <div className='tab-pane fade show active' id='tab1'><p>留言規範</p></div>
            <div className='tab-pane fade' id='tab2'><AddChat/></div>
            <div className='tab=pane fade' id='tab3'><QueryAllChat/></div>
        </div>
    </div>
  )
}
