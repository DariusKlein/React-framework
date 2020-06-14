import React from 'react'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import {BrowserRouter as Router} from "react-router-dom";




import {BaseRouter, LayoutRouter} from "./Routes";

import {Customlayout} from "./container/layout";




function App() {
  return (
    <div className="App">
        <Router>
        <LayoutRouter>
          <BaseRouter/>
        </LayoutRouter>
    </Router>
    </div>
  );
}

export default App;
