/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useState } from "react";
import {
  Modal,
  DatePicker,
  Input,
  TimePicker,
  Checkbox,
  Select,
  Button,
  Form,
} from "antd";

import moment from "moment";
import coursehelper from "../../../firebase/coursehelper";

const { Option } = Select;

const dateFormat = "DD/MM/YYYY HH:mm:ss";


const CreateProd = () => {
  const [form] = Form.useForm();

  const onCreate = (values: any) => {
    console.log("Received values of form: ", values);
    setIsModalVisible(false);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const onCancel = () => {
    setIsModalVisible(false);
  };

  const [setShowInput, setShowInput1] = useState(false);

  const showInput1 = () => {
    setShowInput1(true);
  };
  return (
    <div>
      <Button
        type="primary"
        onClick={showModal}
        style={{
          backgroundColor: "#FF993C",
          borderRadius: 8,
          color: "#FFFFFF",
          fontWeight: 500,
          fontSize: 15,
          borderColor: "#FF993C",
        }}
      >
        Thêm gói vé
      </Button>
      <Modal
        style={{ minWidth: 700 }}
        title="Thêm gói vé"
        visible={isModalVisible}
        okText="Luu"
        cancelText="Huy"
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
        onCancel={onCancel}
        closable={false}
      >
        <Form form={form} name="themgoive" scrollToFirstError>
          <p className="title-16px">Tên gói vé</p>
          <Form.Item name="name">
            <Input
              style={{ borderRadius: 7, minWidth: 400, maxWidth: 400 }}
              placeholder="Tên gói vé"
            />
          </Form.Item>

          <table>
            <tbody>
              <tr>
                <td style={{ paddingRight: 60 }} className="title-modal">
                  <p className="title-16px">Ngày áp dụng</p>
                  <div style={{ display: "flex" }}>
                    <div style={{ paddingRight: 10 }}>
                      <Form.Item name="datestart">
                        <DatePicker
                          style={{ borderRadius: 5 }}
                          placeholder="Chọn ngày"
                          format={dateFormat}
                          showTime
                          showToday={false}
                        />
                      </Form.Item>
                    </div>
                  </div>
                </td>
                <td className="title-modal">
                  <p className="title-16px">Ngày hết hạn</p>
                  <div style={{ display: "flex" }}>
                    <div style={{ paddingRight: 10 }}>
                      <Form.Item name="dateend">
                        <DatePicker
                          style={{ borderRadius: 5 }}
                          placeholder="Chọn ngày"
                          format={dateFormat}
                          showTime
                          showToday={false}
                        />
                      </Form.Item>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <div>
            <p className="title-16px">Giá vé áp dụng</p>
            <div>
              <Checkbox onChange={showInput1}>
                <span style={{ display: "flex", alignItems:"center" }}>
                  Vé lẻ (vnđ/vé) với giá{" "}
                  <Form.Item style={{padding:"0 5px 0 5px"}} name="price">
                    <Input
                      type="number"
                      placeholder="Giá vé"
                      style={{ minWidth: 80, maxWidth: 80, borderRadius: 5 }}
                    />
                  </Form.Item>{" "}
                  / vé
                </span>
              </Checkbox>
            </div>
            <div style={{ paddingTop: 10 }}>
              <Checkbox>
                Combo vé với giá{" "}
                <Input
                  placeholder="Giá vé"
                  style={{ minWidth: 100, maxWidth: 100, borderRadius: 5 }}
                  disabled
                />{" "}
                /{" "}
                <Input
                  placeholder="Số vé"
                  style={{ minWidth: 80, maxWidth: 80, borderRadius: 5 }}
                  disabled
                />{" "}
                vé
              </Checkbox>
            </div>
          </div>
          <div style={{ paddingTop: 10 }}>
            <p className="title-16px">Tình trạng</p>
            <div>
              <Form.Item name="status">
                <Select style={{ width: 300 }} placeholder="Chọn tình trạng">
                  <Option value="Tắt">Tắt</Option>
                  <Option value="Đang áp dụng">Đang áp dụng</Option>
                </Select>
              </Form.Item>
            </div>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default CreateProd;
