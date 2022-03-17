import React from 'react'
import { Button, Table , Tag} from 'antd';
import '../ticket-m/ticket.css';


import {
  FilterOutlined
} from "@ant-design/icons";

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags: any[]) => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
        key: '4',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
      {
        key: '5',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
      {
        key: '6',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
      {
        key: '7',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
  ];


const Ticket = () => {
  return (
    <div>
      <div className='title'>Danh sách vé</div>
      <div className='search-button'>
        <div style={{ padding: "32px 0 32px 0", width: 446 }}>
          <input className="search-input-1" placeholder="Tìm bảng số vé" />
        </div>

        <div className="button-right">
          <Button
            style={{
              borderRadius: 8,
              color: "#FF993C",
              fontWeight: 500,
              fontSize: 15,
              borderColor: "#FF993C",
            }}
            icon={<FilterOutlined />}
          >
            Lọc Vé
          </Button>
            <div style={{paddingLeft:10}}>
            <Button
            style={{
              borderRadius: 8,
              color: "#FF993C",
              fontWeight: 500,
              fontSize: 15,
              borderColor: "#FF993C",
            }}
          >
            Xuất file(.csv)
          </Button>
            </div>
          
        </div>
      </div>
      <Table
        pagination={{ position: ["bottomCenter"], size: "small" }}
        columns={columns}
        dataSource={data}
      ></Table>
    </div>
  );
}

export default Ticket