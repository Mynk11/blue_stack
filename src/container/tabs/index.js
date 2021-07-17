import React from "react";
import {Tabs} from "antd";
import CampaignTable from "./sub-components/table"
import "./tabs.css"
const { TabPane } = Tabs;
export default function CamapignTabs({campaignTabs=[],setCampaignType,campaignType,campaigns=[],setCampaigns,currentLangData}){
const onChangeCampaign=(key)=> {        
setCampaignType(key)
     }
 
 return <Tabs defaultActiveKey={campaignType} onChange={onChangeCampaign} >
     { 
     campaignTabs.map(key=><TabPane tab={key.name} key={key.id}>
     {/* {key.name} */}
     <CampaignTable currentLangData={currentLangData} arrayOfCampaign={campaigns} campaignType={campaignType} setCampaigns={setCampaigns}/>
    </TabPane>
     )}
  </Tabs>
 
}