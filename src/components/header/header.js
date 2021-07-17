import React from "react";
import PropTypes from 'prop-types';
import BlueStackIcon from "../../images/bluestacks";
import {Select} from "antd";
import "./header.css"
const { Option } = Select;
export default function Header(props){
  return <header className="custom_header">
    {<BlueStackIcon/>}<div className="custom_name">{props.name}<br/><span className="custom_sub_heading">{props.playBigger}</span></div>
    
    <div className={"align_self"}>
    <Select
    showSearch
    style={{ width: 100 }}
    optionFilterProp="children"
    value={props.lang}
    onChange={(val)=>{
        props.switchLang(val)
    }}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="en-US">English</Option>
    <Option value="fr-FR">German</Option>
  </Select>
  </div>
    </header>
}

Header.propTypes = {
    name: PropTypes.string
  };