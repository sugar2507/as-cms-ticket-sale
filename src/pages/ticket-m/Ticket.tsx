/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Button, Table, Tag, Layout} from "antd";
import FilterTicket from "../../share/component/filterticket/FilterTicket";
import Ellipsis from "../../share/component/ellipsis/Ellipsis";

const { Content } = Layout;

const columns = [
  {
    title: "Booking code",
    dataIndex: "bookingcode",
    key: "bookingcode",
  },
  {
    title: "Số vé",
    dataIndex: "idticket",
    key: "idticket",
  },
  {
    title: "Tên sự kiện",
    dataIndex: "nameevent",
    key: "nameevent",
  },

  {
    title: "Tình trạng sử dụng",
    key: "tags",
    dataIndex: "tags",
    render: (tags: any[]) => (
      <>
        {tags.map((tag) => {
          let color = "green";
          if (tag === "Hết hạn") {
            color = "volcano";
          } else if (tag === "Chưa sử dụng") {
            color = "green";
          } else if (tag === "Đã sử dụng") {
            color = "blue";
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
    title: "Ngày sử dụng",
    dataIndex: "dateuse",
    key: "dateuse",
  },
  {
    title: "Ngày xuất vé",
    dataIndex: "exportdate",
    key: "exportdate",
  },
  {
    title: "Cổng check - in",
    dataIndex: "gate",
    key: "gate",
  },
  {
    title: "",
    key: "action",
    render: (text: any, record: any) => <Ellipsis />,
  },
];

const data = [
  {
    key: "1",
    bookingcode: "ALT20210501",
    idticket: 123456789034,
    nameevent: "Hội chợ triển lãm tiêu dùng 2021",
    tags: ["Chưa sử dụng"],
    dateuse: "14/04/2021",
    exportdate: "14/04/2021",
    gate: "Cổng 1",
  },
  {
    key: "2",
    bookingcode: "ALT20210502",
    idticket: 123456789035,
    nameevent: "Hội chợ triển lãm tiêu dùng 2021",
    tags: ["Hết hạn"],
    dateuse: "14/04/2021",
    exportdate: "14/04/2021",
    gate: "Cổng 2",
  },
  {
    key: "3",
    bookingcode: "ALT20210503",
    idticket: 123456789036,
    nameevent: "Hội chợ triển lãm tiêu dùng 2021",
    tags: ["Đã sử dụng"],
    dateuse: "14/04/2021",
    exportdate: "14/04/2021",
    gate: "Cổng 3",
  },
  {
    key: "4",
    bookingcode: "ALT20210504",
    idticket: 123456789037,
    nameevent: "Hội chợ triển lãm tiêu dùng 2021",
    tags: ["Đã sử dụng"],
    dateuse: "14/04/2021",
    exportdate: "14/04/2021",
    gate: "Cổng 3",
  },
  {
    key: "5",
    bookingcode: "ALT20210505",
    idticket: 123456789038,
    nameevent: "Hội chợ triển lãm tiêu dùng 2021",
    tags: ["Đã sử dụng"],
    dateuse: "14/04/2021",
    exportdate: "14/04/2021",
    gate: "Cổng 3",
  },
  {
    key: "6",
    bookingcode: "ALT20210506",
    idticket: 123456789039,
    nameevent: "Hội chợ triển lãm tiêu dùng 2021",
    tags: ["Chưa sử dụng"],
    dateuse: "14/04/2021",
    exportdate: "14/04/2021",
    gate: "Cổng 3",
  },
  {
    key: "7",
    bookingcode: "ALT20210504",
    idticket: 123456789037,
    nameevent: "Hội chợ triển lãm tiêu dùng 2021",
    tags: ["Chưa sử dụng"],
    dateuse: "14/04/2021",
    exportdate: "14/04/2021",
    gate: "Cổng 3",
  },
  {
    key: "8",
    bookingcode: "ALT20210505",
    idticket: 123456789038,
    nameevent: "Hội chợ triển lãm tiêu dùng 2021",
    tags: ["Hết hạn"],
    dateuse: "14/04/2021",
    exportdate: "14/04/2021",
    gate: "Cổng 3",
  },
  {
    key: "9",
    bookingcode: "ALT20210505",
    idticket: 123456789038,
    nameevent: "Hội chợ triển lãm tiêu dùng 2021",
    tags: ["Hết hạn"],
    dateuse: "14/04/2021",
    exportdate: "14/04/2021",
    gate: "Cổng 3",
  },
  {
    key: "10",
    bookingcode: "ALT20210501",
    idticket: 123456789034,
    nameevent: "Hội chợ triển lãm tiêu dùng 2021",
    tags: ["Đã sử dụng"],
    dateuse: "14/04/2021",
    exportdate: "14/04/2021",
    gate: "Cổng 1",
  },
  {
    key: "11",
    bookingcode: "ALT20210502",
    idticket: 123456789035,
    nameevent: "Hội chợ triển lãm tiêu dùng 2021",
    tags: ["Hết hạn"],
    dateuse: "14/04/2021",
    exportdate: "14/04/2021",
    gate: "Cổng 2",
  },
  {
    key: "12",
    bookingcode: "ALT20210503",
    idticket: 123456789036,
    nameevent: "Hội chợ triển lãm tiêu dùng 2021",
    tags: ["Đã sử dụng"],
    dateuse: "14/04/2021",
    exportdate: "14/04/2021",
    gate: "Cổng 3",
  },
  {
    key: "13",
    bookingcode: "ALT20210504",
    idticket: 123456789037,
    nameevent: "Hội chợ triển lãm tiêu dùng 2021",
    tags: ["Chưa sử dụng"],
    dateuse: "14/04/2021",
    exportdate: "14/04/2021",
    gate: "Cổng 3",
  },
  {
    key: "14",
    bookingcode: "ALT20210505",
    idticket: 123456789038,
    nameevent: "Hội chợ triển lãm tiêu dùng 2021",
    tags: ["Đã sử dụng"],
    dateuse: "14/04/2021",
    exportdate: "14/04/2021",
    gate: "Cổng 3",
  },
  {
    key: "15",
    bookingcode: "ALT20210506",
    idticket: 123456789039,
    nameevent: "Hội chợ triển lãm tiêu dùng 2021",
    tags: ["Chưa sử dụng"],
    dateuse: "14/04/2021",
    exportdate: "14/04/2021",
    gate: "Cổng 3",
  },
  {
    key: "16",
    bookingcode: "ALT20210504",
    idticket: 123456789037,
    nameevent: "Hội chợ triển lãm tiêu dùng 2021",
    tags: ["Chưa sử dụng"],
    dateuse: "14/04/2021",
    exportdate: "14/04/2021",
    gate: "Cổng 3",
  },
  {
    key: "17",
    bookingcode: "ALT20210505",
    idticket: 123456789038,
    nameevent: "Hội chợ triển lãm tiêu dùng 2021",
    tags: ["Hết hạn"],
    dateuse: "14/04/2021",
    exportdate: "14/04/2021",
    gate: "Cổng 3",
  },
  {
    key: "18",
    bookingcode: "ALT20210505",
    idticket: 123456789038,
    nameevent: "Hội chợ triển lãm tiêu dùng 2021",
    tags: ["Hết hạn"],
    dateuse: "14/04/2021",
    exportdate: "14/04/2021",
    gate: "Cổng 3",
  },
];

const Ticket = () => {
  const [q, setQ] = useState("");

  return (
    <div>
      <Content style={{ margin: "15px 15px 15px 0" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 645, borderRadius: 24 }}
        >
          <div className="title">Danh sách vé</div>
          <div className="search-button">
            <div style={{ padding: "32px 0 32px 0", width: 446 }}>
              <input
                className="search-input-1"
                placeholder="Tìm bảng số vé"
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
            </div>

            <div className="button-right">
              <FilterTicket />

              <div style={{ paddingLeft: 10 }}>
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
            pagination={{ pageSize:8, position: ["bottomCenter"], size: "small" }}
            columns={columns}
            dataSource={data}
          ></Table>
        </div>
      </Content>
    </div>
  );
};

export default Ticket;
