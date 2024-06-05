import React from 'react'
// import 'antd/dist/antd.min.css';
import TestSlide from './Test';
import {BrowserRouter} from 'react-router-dom'
import MyRoute from './MyRoute';
import './assets/css/index.css'
import "react-multi-carousel/lib/styles.css";

function App() {
  return (
    // <div >
    //   <TestSlide/>
    // </div>
    <BrowserRouter>
      <MyRoute/>
    </BrowserRouter>
  );
}

export default App;
