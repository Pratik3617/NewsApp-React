import './App.css';
import LoadingBar from 'react-top-loading-bar'


import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";


import React , {useState} from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

const App =()=> {

  const apiKey=process.env.REACT_APP_NEWS_API; // method to hide your api key  ( you have to create  env.local file and write REACT_APP_NEWS_API = "your api key")
  const [progress,setProgress]=useState(10)

    return (
      <div style={{backgroundColor:"#222"}}>
        <Router>
            <Navbar/>
            <LoadingBar height={3} color='#f11946' progress={progress} />
            <Routes>
                <Route exact path="/" element={<News apiKey={apiKey}  setProgress={setProgress}  pageSize={9} country="in" category="general"/>}/>
                <Route exact path="/general" element={<News apiKey={apiKey}  setProgress={setProgress}  key="general" pageSize={9} country="in" category="general"/>}/>
                <Route exact path="/business" element={<News apiKey={apiKey}  setProgress={setProgress}  key="business" pageSize={9} country="in" category="business"/>}/>
                <Route exact path="/entertainment" element={<News apiKey={apiKey}  setProgress={setProgress}  key="entertainment" pageSize={9} country="in" category="entertainment"/>}/>
                <Route exact path="/health" element={<News apiKey={apiKey}  setProgress={setProgress}  key="health" pageSize={9} country="in" category="health"/>}/>
                <Route exact path="/science" element={<News apiKey={apiKey}  setProgress={setProgress}  key="science" pageSize={9} country="in" category="science"/>}/>
                <Route exact path="/sports" element={<News apiKey={apiKey}  setProgress={setProgress}  key="sports" pageSize={9} country="in" category="sports"/>}/>
                <Route exact path="/technology" element={<News apiKey={apiKey}  setProgress={setProgress}  key="technology" pageSize={9} country="in" category="technology"/>}/>

            </Routes>
        </Router>
      </div>
    )
  }

export default App;

