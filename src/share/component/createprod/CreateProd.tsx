/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useState } from "react";
import {
  Modal,
  DatePicker,
  Input,
  TimePicker,
  Checkbox,
  Cascader,
  Button,
  Form,
} from "antd";

import { Formik } from "formik";

import moment from "moment";
import coursehelper from "../../../firebase/coursehelper";
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

interface IAddCourseProps {
  fetchCourses: () => void;
}

function onChangeTinhTrang(value: any) {
  console.log(value);
}

function onChange(e: { target: { checked: any } }) {
  console.log(`checked = ${e.target.checked}`);
}

const dateFormat = "DD/MM/YYYY";

const CreateProd: FC<IAddCourseProps> = ({ fetchCourses }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
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
        okText="Lưu"
        onCancel={handleCancel}
        cancelText="Hủy"
        closable={false}
      >
        <Formik
          initialValues={{
            name: "",
            price: "",
            datestart: "",
            dateend: "",
            status: "",
          }}
          onSubmit={async (values) => {
            console.log(values);
            try {
              setIsLoading(true);
              await coursehelper.addCourse({
                name: values.name,
                price: parseInt(values.price),
                status: values.status,
                datestart: values.datestart,
                dateend: values.dateend,
              });
            } catch (error) {
              console.log(error);
              alert(error);
            } finally {
              setIsLoading(false);
              fetchCourses();
              handleCancel();
            }
          }}
        >
          <Form>
            <div style={{ paddingBottom: 10 }}>
              <p className="title-16px">Tên gói vé</p>
              <Form.Item name="name">
                <Input
                  style={{ borderRadius: 7, minWidth: 400, maxWidth: 400 }}
                  placeholder="Tên gói vé"
                />
              </Form.Item>
            </div>

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
                            defaultValue={moment("01/01/2015", dateFormat)}
                            format={dateFormat}
                            showToday={false}
                          />
                        </Form.Item>
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
                        <Form.Item name="dateend">
                          <DatePicker
                            style={{ borderRadius: 5 }}
                            placeholder="Chọn ngày"
                            defaultValue={moment("01/01/2015", dateFormat)}
                            format={dateFormat}
                            showToday={false}
                          />
                        </Form.Item>
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
                  Vé lẻ (vnđ/vé) với giá{" "}
                  <Form.Item name="price">
                    <Input
                      placeholder="Giá vé"
                      style={{ minWidth: 80, maxWidth: 80, borderRadius: 5 }}
                    />
                  </Form.Item>{" "}
                  / vé
                </Checkbox>
              </div>
              <div style={{ paddingTop: 10 }}>
                <Checkbox onChange={onChange}>
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
                  <Cascader
                    style={{ width: 300 }}
                    options={options}
                    onChange={onChangeTinhTrang}
                    placeholder="Chọn tình trạng"
                  />
                </Form.Item>
              </div>
            </div>
            <Button loading={isLoading} type="primary">
              OK
            </Button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default CreateProd;
