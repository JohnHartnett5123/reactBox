import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Box from "./Components/box"
import "./App.css" 

function App() {
  const [color, setColor] = useState("")
  const [height, setHeight] = useState("")
  const [width, setWidth] = useState("")
  const [box, setBox] = useState([])
  const addBox = (e) => {
    e.preventDefault()

    setBox([...box, { color, height, width }])
  }
  // constructor(props) {
  //   super (props)
  //   this.state = {}
  // }
  return (

    <div classname="container">
      <form onSubmit={addBox}>

        <div className="formgroup">
          <input type="text" name="color" className="form-control"
            onChange={e => setColor(e.target.value)} value={color} />
          {/* <input type="text" name="height" className="form-control"
            onChange={e => setHeight(e.target.value)} value={height} />
          <input type="text" name="weight" className="form-control"
            onChange={e => setWidth(e.target.value)} value={width} />
          <input type="submit" value="Submit" className="btn btn-outline-info" /> */}
          </div>
      </form>
      

      <div className="card-body">
      <div className="box" backgroundColor={color}>
        <Box className="box" color={color}/>
        
          
          {box.map(please => <div className="box" style={{backgroundColor:please.color}}  >
            {please.color}
            {please.height},
            {please.width}
          </div>)}
        </div>

      </div>
    </div>





  );
}

export default App;
