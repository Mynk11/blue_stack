import React from "react";
import {Modal} from "antd";
import PubgMobile from "../../images/pubgMobile";
import PubgText from "../../images/pubg_text";
import "./modal.css";

export default function CustomModal({campaignObj,handleCancel,currentLangData}){
console.log("CustomModal=======>",campaignObj);
    return <Modal height="452px" width="400px"  title="Basic Modal"  visible={true} onCancel={handleCancel} footer={null} header={null}>
    <section>

    <PubgMobile/>    <PubgText/>
    </section>

    <b>Pricing</b>
   <div className="width_100 padding_top_bottom_3">
   <span className="text_left">Name</span> <span className="text_right">{campaignObj.name}</span>
   </div>
   <div className="clearBoth padding_top_bottom_3">
   <span className="text_left">6 {currentLangData.month}</span> <span className="text_right">$ 100.00</span>
   </div>
   <div className="clearBoth padding_top_bottom_3">
   <span className="text_left">1 {currentLangData.week} - 1 {currentLangData.month}</span> <span className="text_right">$ 100.00</span>
   </div>
<div className="content_center clearBoth padding_top_bottom_3">
    <button className="pad5" type="reset" onClick={handleCancel}>Close</button>
    </div>
  </Modal>
}