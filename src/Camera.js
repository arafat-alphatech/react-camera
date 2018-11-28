import React, { Component } from 'react';
import Camera, { FACING_MODES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import axios from 'axios'
class App extends Component {

    onTakePhoto (data_uri) {
        
        const url = "http://0.0.0.0:5000/build"
        // console.log(dataUri)

        const body = {
            data_uri: data_uri
        }
        console.log(data_uri)
        axios
        .post(url, body)
        .then((response) => {
            alert('message ', response.data)
            console.log("Response data: ", response.data)
        })
        .catch((err) => {
            alert(err)
        })
    }
    
    render () {
        return (
        <div className="App">
            {/* <img src={this.state.dataUri} /> */}
            <Camera
            onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } }
            idealFacingMode = {FACING_MODES.ENVIRONMENT}
            isImageMirror = {false}
            isMaxResolution = {true}
            />            
        </div>
        );
    }
}
 
export default App;