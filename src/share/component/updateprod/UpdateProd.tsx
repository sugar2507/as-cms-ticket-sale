/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Space, Modal,DatePicker ,Input,TimePicker , Checkbox,Cascader} from "antd";
import {FormOutlined } from '@ant-design/icons';

import moment from 'moment';
const options = [
    {
      value: "Đang áp dụng",
      label: "Đang áp dụng",
    },
    {
      value: "Tắt",
      label: "Tắt",
    },
  ];
  
  function onChangeTinhTrang(value: any) {
      console.log(value);
    }

function onChange(e: { target: { checked: any; }; }) {
    console.log(`checked = ${e.target.checked}`);
  }

const dateFormat = 'DD/MM/YYYY';
const UpdateProd = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <Space size="middle">
        <a style={{ color: "#FF993C" }} onClick={showModal}>
          {" "}
          <FormOutlined style={{ fontSize: 16, paddingRight: 5 }} />
          Cập nhật
        </a>
        <Modal
          style={{ minWidth: 700 }}
          title="Cập nhật thông tin gói vé"
          visible={isModalVisible}
          onOk={handleOk}
          okText="Lưu"
          onCancel={handleCancel}
          cancelText="Hủy"
          closable={false}
        >
          <table>
            <tbody>
              <tr>
                <td style={{ paddingRight: 60 }} className="title-modal">
                  <p className="title-16px">Mã sự kiện</p>
                  <Input style={{ borderRadius: 7 }} placeholder="Mã sự kiện" />
                </td>
                <td className="title-modal">
                  <p className="title-16px">Tên sự kiện</p>
                  <Input
                    style={{ borderRadius: 7 }}
                    placeholder="Tên sự kiện"
                  />
                </td>
              </tr>
              <tr>
                <td style={{ paddingRight: 60 }} className="title-modal">
                  <p className="title-16px">Ngày áp dụng</p>
                  <div style={{ display: "flex" }}>
                    <div style={{ paddingRight: 10 }}>
                      <DatePicker
                        style={{ borderRadius: 5 }}
                        placeholder="Chọn ngày"
                        defaultValue={moment("01/01/2015", dateFormat)}
                        format={dateFormat}
                        showToday={false}
                      />
                    </div>

                    <TimePicker
                      style={{ borderRadius: 5 }}
                      placeholder="Chọn giờ"
                    />
                  </div>
                </td>
                <td className="title-modal">
                  <p className="title-16px">Ngày hết hạn</p>
                  <div style={{ display: "flex" }}>
                    <div style={{ paddingRight: 10 }}>
                      <DatePicker
                        style={{ borderRadius: 5 }}
                        placeholder="Chọn ngày"
                        defaultValue={moment("01/01/2015", dateFormat)}
                        format={dateFormat}
                        showToday={false}
                      />
                    </div>

                    <TimePicker
                      style={{ borderRadius: 5 }}
                      placeholder="Chọn giờ"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <p className="title-16px">Giá vé áp dụng</p>
            <div>
              <Checkbox onChange={onChange}>
                Vé lẻ (vnđ/vé) với giá {" "}
                <Input
                  placeholder="Giá vé"
                  style={{ minWidth: 80, maxWidth: 80,borderRadius: 5 }}
                  disabled
                />{" "}
                / vé
              </Checkbox>
            </div>
            <div style={{paddingTop:10}}>
              <Checkbox onChange={onChange}>
                Combo vé với giá {" "}
                <Input
                  placeholder="Giá vé"
                  style={{ minWidth: 100, maxWidth: 100,borderRadius: 5 }}
                  disabled
                />{" "}
                /{" "}
                <Input
                  placeholder="Giá vé"
                  style={{ minWidth: 80, maxWidth: 80 ,borderRadius: 5}}
                  disabled
                />{" "}
                vé
              </Checkbox>
            </div>
          </div>
          <div style={{paddingTop:10}}>
              <p className="title-16px">Tình trạng</p>
              <div>
              <Cascader
                style={{ width: 300 }}
                options={options}
                onChange={onChangeTinhTrang}
                placeholder="Chọn tình trạng"
              />
              </div>
          </div>
        </Modal>
      </Space>
    </div>
  );
}

export default UpdateProd