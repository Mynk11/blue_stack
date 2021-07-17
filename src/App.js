import './App.css';
import PageTitle from "./components/pageTitle/pageTitle"
import Header from "./components/header/header"
import CampaignTabs from "./container/tabs"
import {useState,useEffect,useContext} from "react"; 
import "antd/dist/antd.css";
import { Campaign } from './constants';
import {IntlProvider} from "react-intl";
import LangContext from "./context/langContext";
const campaignTabs=[{name:"Upcoming Campaign",id:"upcomingCampaign"},
{name:"Live Campaign",id:"liveCampaign"},
{name:"Past Campaign",id:"pastCampaign"}
]
function App(props) {
  const [campaignType,setCampaignType]=useState("upcomingCampaign");
  const [campaigns,setCampaigns]=useState(!localStorage.getItem("campaign")?Campaign:JSON.parse(localStorage.getItem("campaign")))
  const { lang, currentLangData,switchLang } = useContext(LangContext);

  useEffect(()=>{
    if(!localStorage.getItem("campaign")){
    localStorage.setItem('campaign',JSON.stringify(Campaign))
    }
  },[])

  return (
    <div className="App">
     <IntlProvider 
     locale={lang} 
     messages={currentLangData}>   
      <Header 
      name={currentLangData.appName}
      lang={lang} 
      switchLang={switchLang}
      playBigger={currentLangData.playBigger}
      />
      <PageTitle headline={currentLangData.manageCampaigns} />
      <CampaignTabs campaigns={campaigns}  
      setCampaigns={setCampaigns} 
      campaignTabs={campaignTabs} 
      setCampaignType={setCampaignType} 
      campaignType={campaignType}
      currentLangData={currentLangData}
      />
    </IntlProvider>
    </div>
  );
}

export default App;
