import React, { useState, useLayoutEffect } from 'react';
import English from "../lang/en-US.json";
import French from  "../lang/fr-FR.json"
//import English_GB from "../lang/en-GB.json"
const LangContext = React.createContext({
  lang: 'en-US',
  currentLangData: English,
  switchLang: () => {},
});

export default LangContext;

export function LangProvider (props) {

  const [lang, setLang] = useState(window.localStorage.getItem('appUILang') || window.navigator.language);
  
  useLayoutEffect(() => {
    const selectedLang = window.localStorage.getItem('appUILang');
    if (selectedLang) {
      setLang(selectedLang);
    } 
  }, [lang])

  const switchLang = (ln) => {
    setLang(ln);
    window.localStorage.setItem('appUILang', ln);
  };
  return (
    <LangContext.Provider value={{
      lang, 
      switchLang, 
      currentLangData: langData[lang==="en-GB"?"en-US":lang]
    }}>
      {props.children}
    </LangContext.Provider>
  );
};

export const langData = {
//'en-GB': English_GB,
  'en-US': English,
  'fr-FR':French,
}

export const langIcons={
  'en-US':"https://cdn.countryflags.com/thumbs/india/flag-round-250.png",
  'fr-FR':"https://cdn.countryflags.com/thumbs/france/flag-3d-round-250.png"
}

export const langOptions = {
    //'en-GB': "English_GB",
    'en-US': "English",
    'fr-FR':"French",
  }