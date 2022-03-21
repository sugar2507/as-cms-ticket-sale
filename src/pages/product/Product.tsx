/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { FormOutlined} from '@ant-design/icons';
import { Button, Table , Tag, Layout , Space} from 'antd';

const { Content} = Layout;

    const columns = [
    {
        title: "Mã gói",
        dataIndex: "magoi",
        key: "magoi",
    },
    {
        title: "Tên gói vé",
        dataIndex: "tengoive",
        key: "tengoive",
    },
    
    {
        title: "Ngày áp dụng",
        dataIndex: "dateuse",
        key: "dateuse",
    },
    {
        title: "Ngày hết hạn",
        dataIndex: "expiresdate",
        key: "expiresdate",
    },
    {
        title: "Giá vé (VNĐ/Vé)",
        dataIndex: "price",
        key: "price",
    },
    {
        title: "Giá Combo (VNĐ/Combo)",
        dataIndex: "pricecombo",
        key: "pricecombo",
    },
    {
        title: "Tình trạng",
        key: "tags",
        dataIndex: "tags",
        render: (tags: any[]) => (
        <>
            {tags.map((tag) => {
            let color = "green";
            if (tag === "Tắt") {
                color = "volcano";
            }
            else if (tag === "Đang áp dụng") {
                color = "green";
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
    {
      title: '',
      key: 'action',
      render: (text: any, record: any) => (
        <Space size="middle">
          <a style={{color:'#FF993C'}}> <FormOutlined style={{fontSize:16,paddingRight:5}} />Cập nhật</a>
        </Space>
      ),
    },
    ];
  
    const data = [
        {
        key: "1",
        magoi: "ALT20210501",
        tengoive: 'Gói gia đình',
        dateuse: "14/04/2021 08:00:00",
        expiresdate: "14/04/2021 23:00:00",
        price: "90.000 VNĐ",
        pricecombo: "360.000 VNĐ/4 Vé",
        tags: ["Đang áp dụng"],
        },
        {
          key: "2",
          magoi: "ALT20210501",
          tengoive: 'Gói sự kiện',
          dateuse: "14/04/2021 08:00:00",
          expiresdate: "14/04/2021 23:00:00",
          price: "20.000 VNĐ",
          pricecombo: "",
          tags: ["Tắt"],
          },
    ];


const Product = () => {
  return (
    <div>
      <Content style={{ margin: "15px 15px 15px 0" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 645, borderRadius: 24 }}
        >
          <div className="title">Danh sách gói vé</div>
          <div className="search-button">
            <div style={{ padding: "32px 0 32px 0", width: 446 }}>
              <input className="search-input-1" placeholder="Tìm bảng số vé" />
            </div>

            <div className="button-right">

              <div>
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

              <div  style={{ paddingLeft: 10 }}>
                <Button
                  type="primary"
                  style={{
                    backgroundColor: "#FF993C",
                    borderRadius: 8,
                    color: "#FFFFFF",
                    fontWeight: 500,
                    fontSize: 15,
                    borderColor: "#FF993C",
                  }}
                >
                  Chốt đối soát
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
      </Content>
    </div>
  );
}

export default Product