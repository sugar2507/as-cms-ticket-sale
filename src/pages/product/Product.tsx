/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Tag, Layout } from "antd";
import UpdateProd from "../../share/component/updateprod/UpdateProd";
import CreateProd from "../../share/component/createprod/CreateProd";
import { useState, useEffect } from "react";
import coursehelper, { ICourseDoc } from "../../firebase/coursehelper";
import * as XLSX from "xlsx";

const { Content } = Layout;

const Product = () => {
  const [ticketpackage, setCourses] = useState<ICourseDoc[]>([]);

  const fetchCourses = async () => {
    const ticketpackage = await coursehelper.getCourses();
    setCourses(ticketpackage);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const FileCSV = ()=>{
    var wb = XLSX.utils.book_new(),
    ws = XLSX.utils.json_to_sheet(ticketpackage);

    XLSX.utils.book_append_sheet(wb,ws,"MySheet1");
    XLSX.writeFile(wb,"MyExcel.xlsx");
  }


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
                onClick={FileCSV}
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
              <div style={{ paddingLeft: 10 }}>
                <CreateProd/>
              </div>
            </div>
          </div>
          <table className="setting__table">
            <thead>
              <tr>
                <th>Mã gói vé</th>
                <th>Tên gói vé</th>
                <th>Ngày áp dụng</th>
                <th>Ngày hết hạn</th>
                <th>Giá vé (VNĐ/Vé)</th>
                <th>Tình trạng</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {ticketpackage.map((course) => (
                <tr key={course.id}>
                  <td>ALT20210501</td>
                  <td>{course.name}</td>
                  <td>{course.datestart}</td>
                  <td>{course.dateend}</td>
                  <td>{course.price}</td>
                  <td>
                    <Tag
                      color={
                        course.status === "Tắt"
                          ? "red"
                          : course.status === "Đang áp dụng"
                          ? "green"
                          : "red"
                      }
                    >
                      {course.status}
                    </Tag>
                  </td>
                  <td>
                    <UpdateProd />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Content>
    </div>
  );
};

export default Product;
