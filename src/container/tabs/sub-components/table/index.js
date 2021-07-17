import React from "react";
import {Table,Space} from "antd";
import moment from "moment";
import "./table.css";
import ViewPricingSvg from "../../../../images/viewPricing"
import CSVSvg from "../../../../images/csv"
import ReportSvg from "../../../../images/report"
import CalendarSvg from "../../../../images/calendar"
import {DatePicker} from "antd";
import CustomModal from "../../../../components/Modal"
export default function CampaignTable({arrayOfCampaign,campaignType,setCampaigns,currentLangData}){
  const [viewPricing,setViewPricing]=React.useState(false);
  const [currentObj,setCurrentObj]=React.useState({});

  const onChangeDate=(campaignObj,date)=>{
    
let updatedArrayofCampaign=arrayOfCampaign.map(key=>{
  if(key.id===campaignObj.id){
    return {...campaignObj,createdOn:moment(date)}
  }
  return key
})
setCampaigns(updatedArrayofCampaign)

localStorage.setItem("campaign",JSON.stringify(updatedArrayofCampaign))    

  }

  const onClickViewPricing=(campaignObj)=>{
    setCurrentObj(campaignObj)
    setViewPricing(true)
  }

  const handleCancel=()=>{
    setViewPricing(false)
  }
    const columns = [
        {
          title: currentLangData.date,
          dataIndex: 'createdOn',
          key: 'createdOn',
          render:(campaign,campaignObj)=>(
                <>
                <div>{moment(campaign).format("MMMM yy, Do")}</div>
                <div>{moment().diff(moment(campaign),'days')>0?
                 `${moment().diff(moment(campaign),'days')} ${currentLangData.days} ${currentLangData.before}`:
                moment().diff(moment(campaign),'days')===0?`${currentLangData.live}`:
                `${Math.abs(moment().diff(moment(campaign),'days'))} ${currentLangData.days} ${currentLangData.after}`} </div>
              </>
          )
        },
        {
          title: currentLangData.campaign,
          dataIndex: 'name',
          key: 'name',
          render:(campaign,campaignObj)=>(
            <>
            <div>{campaign}</div>
            <div>{campaignObj.region}</div>
          </>
      )
        },
        {
          title: currentLangData.view,
          dataIndex: 'image_url',
          key: 'image_url',
          render:(image_url,campaignObj)=>(
            <div onClick={()=>onClickViewPricing(campaignObj)}>
            <ViewPricingSvg/> <span className="v_align_top m_right_2">{currentLangData.view} {currentLangData.pricing} </span>
            
          </div>)
        },
        {
            title: currentLangData.actions,
            dataIndex: 'actions',
            key: 'actions',
            render:(_,campaignObj)=>(
              <>
              <CSVSvg/> <span className="v_align_top m_right_2">{currentLangData.CSV}</span>
              <ReportSvg/><span className="v_align_top"> {currentLangData.report}</span>
              <Space direction="vertical" size={2}>
              
              <DatePicker  onChange={(date)=>onChangeDate(campaignObj,date)} size="small" suffixIcon={<CalendarSvg/>}>
              </DatePicker>
              </Space>
              <span className="v_align_top m_right_2">{currentLangData.scheduleAgain}</span>
              
            </>)
          }
      ];
let specificCampaignarray=[]
if(campaignType==="upcomingCampaign"){
  specificCampaignarray=  arrayOfCampaign.filter(key=>{
   
     return moment().diff(moment(key.createdOn),'days') < 0
  })
}
if(campaignType==="liveCampaign"){
  specificCampaignarray= arrayOfCampaign.filter(key=>{
     return moment().diff(moment(key.createdOn),'days')=== 0
  })
}
if(campaignType==="pastCampaign"){
  specificCampaignarray= arrayOfCampaign.filter(key=>{
    return moment().diff(moment(key.createdOn),'days') > 0
  })
}

      return  <>  
        {viewPricing && <CustomModal  campaignObj={currentObj}  handleCancel={handleCancel} currentLangData={currentLangData}/>}
      <Table dataSource={specificCampaignarray}  columns={columns} />
      </>

}