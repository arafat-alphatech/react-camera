import React, { Component } from 'react';
import Camera, { FACING_MODES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import axios from 'axios'
class App extends Component {

    state = {
        dataUri: ''
    }

    onTakePhoto (dataUri) {
        // alert("belum bisa di setting ulang")
        this.setState({
            dataUri: dataUri
        })
        
        
        const url = "https://sipss-api.online/"
        // console.log(dataUri)

        const body = {
            dataUri: dataUri
        }
        axios
        // .post(url, body)
        .get(url) 
        .then((response) => {
            alert('message ', response.data.message)
            console.log("Response data: ", response.data.message)
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