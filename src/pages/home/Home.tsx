import React from "react";
import Chart from "../../share/component/chart/Chart";
import DonutEvent from "../../share/component/donut/donutevent/DonutEvent";
import DonutFamily from "../../share/component/donut/donutfamily/DonutFamily";


export const Home = () => {
  return (
    <div>
      <div className="title">Thống kê</div>
      <div>
        <div style={{ padding: "20px 0 20px 0" }} className="title-16px">
          Doanh thu
        </div>
      </div>
      <div>
        <Chart />
        <div style={{ paddingTop: 20 }} className="title-op title-14px">
          Tổng doanh thu theo tuần
        </div>
        <div>
          <span className="title-24px">525.145.000</span>
          <span style={{ paddingLeft: 5 }} className="title-14px">
            đồng
          </span>
        </div>
      </div>
      <div className="grp-donut">
        <div>
          <div style={{ padding: "20px 0 20px 0" ,textAlign: 'center'}} className="title-16px">
            Gói gia đình
          </div>
          <DonutFamily/>
        </div>
        <div>
          <div style={{ padding: "20px 0 20px 0" ,textAlign: 'center'}} className="title-16px">
            Gói sự kiện
          </div>
          <DonutEvent/>
        </div>
      </div>
    </div>
  );
};

export default Home;
