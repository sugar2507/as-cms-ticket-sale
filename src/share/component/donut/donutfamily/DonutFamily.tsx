import React from 'react'
import { Pie } from '@ant-design/plots';


const DonutFamily = () => {
    const data = [
        {
          type: 'Vé đã sử dụng',
          value: 56024 ,
        },
        {
          type: 'Vé chưa sử dụng',
          value: 13568,
        },
      ]; 
      const config = {
        legend:undefined,
        color: ['#4F75FF', '#FF8A48'],
        appendPadding: 10,
        data,
        angleField: "value",
        colorField: "type",
        radius: 1,
        innerRadius: 0.6,
        interactions: [
          {
            type: "element-selected",
          },
          {
            type: "element-active",
          },
        ],
        statistic: {
          title: false,
          content: {
            content: "",
          },
        },
      };
      return (
        <div style={{height:200,width:350}}>
          <Pie {...config} />
        </div>
      );
    }

export default DonutFamily