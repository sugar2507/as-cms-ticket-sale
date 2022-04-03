
import React from 'react'
import {DatePicker,Radio, RadioChangeEvent,Checkbox} from 'antd';
import moment from 'moment';

const dateFormat = 'DD/MM/YYYY';


const ContentFilter = () => {

    const [value, setValue] = React.useState(1);

    const onChange = (e: RadioChangeEvent) => {
        console.log("radio checked", e.target.value);
        setValue(e.target.value);
    };
    function onChangee(e: { target: { checked: any; }; }) {
        console.log(`checked = ${e.target.checked}`);
      }

  return (
    <div>
      <div className="filter">
        <div className="date-filter">
          <div style={{ paddingRight: 40 }}>
            <p className="title-date-filter">Từ ngày</p>
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

          <div>
            <p className="title-date-filter">Đến ngày</p>
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
        </div>

        <div className="status-filter">
          <p className="title-status-filter">Tình trạng sử dụng</p>
          <div>
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={1} key="1">Tất cả</Radio>
              <Radio value={2} key="2">Đã sử dụng</Radio>
              <Radio value={3} key="3">Chưa sử dụng</Radio>
              <Radio value={4} key="4">Hết hạn</Radio>
            </Radio.Group>
          </div>
        </div>

        <div className="gate-filter">
          <p className="title-gate-filter">Cổng check - in</p>
          <div style={{display:'flex',flexDirection:'row'}}>
            <div className="checkbox-filter">
              <Checkbox onChange={onChangee}>Tất cả</Checkbox>
              <Checkbox onChange={onChangee}>Cổng 3</Checkbox>
            </div>
            <div>
              <Checkbox onChange={onChangee}>Cổng 1</Checkbox>
              <Checkbox onChange={onChangee}>Cổng 4</Checkbox>
            </div>
            <div className="checkbox-filter">
              <Checkbox onChange={onChangee}>Cổng 2</Checkbox>
              <Checkbox onChange={onChangee}>Cổng 5</Checkbox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentFilter