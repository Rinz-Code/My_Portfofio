import React, { useState,useEffect } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';

import Portfolio from './Components/Portfolio';

const App =()=>{

  const [resumeData,setResumeData] = useState({});
  const [foo,setFoo] = useState('bar');

  ReactGA.initialize('UA-110570651-1');
  ReactGA.pageview(window.location.pathname);

  function getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        setResumeData(data);
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  useEffect(()=>{
    getResumeData();
  })

    return (
      <div className="App">
        <Header data={resumeData.main}/>
        <About data={resumeData.main}/>
        <Resume data={resumeData.resume}/>
        <Portfolio data={resumeData.portfolio}/>
        <Contact data={resumeData.main}/>
        <Footer data={resumeData.main}/>
      </div>
    );
}

export default App;
