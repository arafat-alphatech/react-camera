import React, { Component } from 'react';
import './App.css';
import Camera from './Camera'
import axios from 'axios'

class App extends Component {
  
  state = {
    displayScanner: false
  }

  showScanner(){
    this.setState({
      displayScanner: !this.state.displayScanner
    })
  }

  uye = () => {
    axios
    .get("https://sipss-api.online/")
    .then((value) => {
        alert('uyee berhasil hit ke API...')
    })
    .catch((err) => {
        alert(err)
    })
  }
  render() {
    return (
      <div className="App">
        {
         this.state.displayScanner ?  
          <div style={{width: 200, textAlign: 'center'}}>
              {/* <Qrscanner/> */}
              <Camera/>
              {/* <RearCamera/> */}
              <hr/> 
          </div>
          :
          ""
        }
        <button onClick={() => this.showScanner()}>click me </button>
        <button onClick={() => this.uye()}>uyee</button>

      </div>
    );
  }
}

export default App;
