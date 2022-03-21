import React from 'react'
import { Button,Popover} from 'antd';
import {
  FilterOutlined
} from "@ant-design/icons";
import ContentFilter from './contentfilter/ContentFilter';

const content = (
    <ContentFilter/>
  );

const FilterTicket = () => {
  return (
    <div>
      <Popover
        placement="bottom"
        content={content}
        title="Lọc vé"
        trigger="click"
      >
        <Button
          style={{
            borderRadius: 8,
            color: "#FF993C",
            fontWeight: 500,
            fontSize: 15,
            borderColor: "#FF993C",
          }}
          icon={<FilterOutlined />}
        >
          Lọc Vé
        </Button>
      </Popover>
    </div>
  );
}

export default FilterTicket