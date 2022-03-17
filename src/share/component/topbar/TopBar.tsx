/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Badge, Avatar  } from 'antd';
import { MailOutlined,UserOutlined,NotificationOutlined } from '@ant-design/icons';

export const TopBar = () => {
  return (
    <div className='top'>
      <div style={{width:470}}>
          <input className='search-input'placeholder='Search'/>
      </div>
      <div className='top-right'>
        <a style={{paddingTop:6}}>
          <Badge count={5}>
            <MailOutlined style={{ fontSize: 18 , color:'#1E0D03' }} />
          </Badge>
        </a>
        <a style={{paddingTop:6}} className='padding-top-right'>
          <Badge count={5}>
          <NotificationOutlined style={{ fontSize: 18 , color:'#1E0D03' }} />
          </Badge>
        </a>
        <div className='padding-top-right'>
          <Avatar style={{bottom:2}} size={35} icon={<UserOutlined />} />
        </div>
      </div>
    </div>
  )
}

export default TopBar