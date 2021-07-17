import { Component } from "react";
import './greetings.css'

const languages = {
  de: 'Guten Tag',
  fr: 'Bonjour',
  es: 'Hola',
  en: 'Hello',
  pt: 'Olá',
  jp: 'Konnichiwa'
}



function Greetings ({lang, children}){
 let languages =''
  if(lang === 'de'){
    languages = 'Hallo'
  }
   else if(lang === 'en'){
    languages = 'Hello'
  }
  else if(lang ==='pt'){
    languages = 'Olá'
  }
  else if(lang === 'es'){
    languages = 'Hola'
  }
  else if(lang === 'fr'){
    languages = 'Bonjour'
  }

  return(
    <div className = 'container'>
      <h3 >
       {`${languages} ${children}`}
      </h3>
    </div>
  )
}


export default Greetings