/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Space, Modal,DatePicker } from "antd";
import { EllipsisOutlined } from '@ant-design/icons';

import moment from 'moment';

const dateFormat = 'DD/MM/YYYY';

const Ellipsis = () => {
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
          <EllipsisOutlined
            style={{ fontSize: 17, color: "#1E0D03", opacity: 0.7 }}
          />
        </a>
        <Modal
          title="Đổi ngày sử dụng vé"
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
                <td className="title-table-modal title-modal">Số vé</td>
                <td className='title-modal'>PKG20210502</td>
              </tr>
              <tr>
                <td className="title-table-modal title-modal">Tên gói vé</td>
                <td className='title-modal'>Vé cổng - Gói sự kiện</td>
              </tr>
              <tr>
                <td className="title-table-modal title-modal">Tên sự kiện</td>
                <td className='title-modal'>Hội trợ triển lãm hàng tiêu dùng 2021</td>
              </tr>
              <tr>
                <td className="title-table-modal title-modal">Hạn sử dụng</td>
                <td className='title-modal'>
                  <DatePicker
                    style={{ borderRadius: 5 }}
                    placeholder="Chọn ngày"
                    defaultValue={moment("01/01/2015", dateFormat)}
                    format={dateFormat}
                    showToday={false}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </Modal>
      </Space>
    </div>
  );
}

export default Ellipsis