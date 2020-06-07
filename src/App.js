import React from 'react'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Eventslistview from "./container/Eventslistview";



import Customlayout from "./container/layout";

function App() {
  return (
    <div className="App">
      <Customlayout>

          <Eventslistview />


      </Customlayout>
    </div>
  );
}

export default App;
