import React from 'react'
import { Button, Table ,Layout ,Cascader ,Radio, RadioChangeEvent ,DatePicker} from 'antd';
import moment from 'moment';

const dateFormat = 'DD/MM/YYYY';

const { Content} = Layout;

const options = [
  {
    value: "Hội chợ triển lãm tiêu dùng 2021",
    label: "Hội chợ triển lãm tiêu dùng 2021",
  },
  {
    value: "Hội chợ triển lãm tiêu dùng 2022",
    label: "Hội chợ triển lãm tiêu dùng 2022",
  },
];

function onChange(value: any) {
    console.log(value);
  }

const columns = [
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
      title: "Ngày sử dụng",
      dataIndex: "dateuse",
      key: "dateuse",
    },
    {
      title: "Loại vé",
      dataIndex: "tickettype",
      key: "tickettype",
    },
    {
      title: "Cổng check - in",
      dataIndex: "gate",
      key: "gate",
    },
  ];
    
    const data = [
      {
        key: "1",
        idticket: 123456789034,
        nameevent: "Hội chợ triển lãm tiêu dùng 2021",
        dateuse: "14/04/2021",
        tickettype: "Vé cổng",
        gate: "Cổng 1",
      },
      {
        key: "2",
        idticket: 123456789034,
        nameevent: "Hội chợ triển lãm tiêu dùng 2021",
        dateuse: "14/04/2021",
        tickettype: "Vé cổng",
        gate: "Cổng 1",
      },
      {
        key: "3",
        idticket: 123456789034,
        nameevent: "Hội chợ triển lãm tiêu dùng 2021",
        dateuse: "14/04/2021",
        tickettype: "Vé cổng",
        gate: "Cổng 1",
      },
      {
        key: "4",
        idticket: 123456789034,
        nameevent: "Hội chợ triển lãm tiêu dùng 2021",
        dateuse: "14/04/2021",
        tickettype: "Vé cổng",
        gate: "Cổng 1",
      },
      {
        key: "5",
        idticket: 123456789034,
        nameevent: "Hội chợ triển lãm tiêu dùng 2021",
        dateuse: "14/04/2021",
        tickettype: "Vé cổng",
        gate: "Cổng 1",
      },
      {
        key: "6",
        idticket: 123456789034,
        nameevent: "Hội chợ triển lãm tiêu dùng 2021",
        dateuse: "14/04/2021",
        tickettype: "Vé cổng",
        gate: "Cổng 1",
      },
      {
        key: "7",
        idticket: 123456789034,
        nameevent: "Hội chợ triển lãm tiêu dùng 2021",
        dateuse: "14/04/2021",
        tickettype: "Vé cổng",
        gate: "Cổng 1",
      },
      {
        key: "8",
        idticket: 123456789034,
        nameevent: "Hội chợ triển lãm tiêu dùng 2021",
        dateuse: "14/04/2021",
        tickettype: "Vé cổng",
        gate: "Cổng 1",
      },
      {
        key: "9",
        idticket: 123456789034,
        nameevent: "Hội chợ triển lãm tiêu dùng 2021",
        dateuse: "14/04/2021",
        tickettype: "Vé cổng",
        gate: "Cổng 1",
      },
      {
        key: "10",
        idticket: 123456789034,
        nameevent: "Hội chợ triển lãm tiêu dùng 2021",
        dateuse: "14/04/2021",
        tickettype: "Vé cổng",
        gate: "Cổng 1",
      },
    ];

const CheckTicket = () => {

    const [value, setValue] = React.useState(1);

    const onChangeRadioGrp = (e: RadioChangeEvent) => {
        console.log("radio checked", e.target.value);
        setValue(e.target.value);
    };
  return (
    <div style={{ display: "flex" }}>
      <Content style={{ margin: "15px 15px 15px 0" }}>
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: 645,
            borderRadius: 24,
            width: 900,
            minWidth: 400,
          }}
        >
          <div>
            <div className="title">Đối soát vé</div>
            <div className="search-button">
              <div style={{ padding: "32px 0 32px 0", width: 446 }}>
                <input
                  className="search-input-1"
                  placeholder="Tìm bảng số vé"
                />
              </div>

              <div className="button-right">
                <div>
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
              pagination={{ pageSize:8, position: ["bottomCenter"], size: "small" }}
              columns={columns}
              dataSource={data}
            ></Table>
          </div>
        </div>
      </Content>

      <Content style={{ margin: "15px 15px 15px 0" }}>
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: 645,
            borderRadius: 24,
            maxWidth: 4,
            minWidth: 350,
          }}
        >
          <div>
            <div className="title-24px">Lọc vé</div>
          </div>
          <div>
            <div style={{ paddingTop: 20 }}>
              <Cascader
                style={{ width: 300 }}
                options={options}
                onChange={onChange}
                placeholder="Chọn tên sự kiện"
              />
            </div>
            <div style={{ display: "flex" }}>
              <p style={{ paddingTop: 15 }} className="title-16px">
                Tình trạng đơn soát
              </p>
              <div>
                <Radio.Group
                  style={{
                    padding: "20px 0 0 15px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  onChange={onChangeRadioGrp}
                  value={value}
                >
                  <Radio value={1}>Tất cả</Radio>
                  <Radio style={{ padding: "10px 0 10px 0" }} value={2}>
                    Đã đối soát
                  </Radio>
                  <Radio value={3}>Chưa đối soát</Radio>
                </Radio.Group>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                paddingTop: 15,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p className="title-16px">Loại vé</p>
              <p style={{ width: 142 }}>Vé cổng</p>
            </div>
            <div
              style={{
                display: "flex",
                paddingTop: 15,
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <p>Từ ngày</p>
              <div>
                <DatePicker
                  style={{ borderRadius: 5 }}
                  placeholder="Chọn ngày"
                  defaultValue={moment("01/01/2015", dateFormat)}
                  format={dateFormat}
                  showToday={false}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                paddingTop: 15,
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <p>Đến ngày</p>
              <div>
                <DatePicker
                  style={{ borderRadius: 5 }}
                  placeholder="Chọn ngày"
                  defaultValue={moment("01/01/2015", dateFormat)}
                  format={dateFormat}
                  showToday={false}
                />
              </div>
            </div>
            <div style={{ paddingTop: 15, textAlign: "center" }}>
              <Button
                style={{
                  padding: "0 40px",
                  borderRadius: 8,
                  color: "#FF993C",
                  fontWeight: 500,
                  fontSize: 15,
                  borderColor: "#FF993C",
                }}
              >
                Lọc
              </Button>
            </div>
          </div>
        </div>
      </Content>
    </div>
  );
}

export default CheckTicket