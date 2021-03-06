import React, { Component } from 'react';
// TODO - move API to BE (fail):
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import 'tachyons';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

// TODO - move API to BE (fail):
const ClarifaiApp = new Clarifai.App({
  // Not secure to have API key in FE
 apiKey: '9e909660143244e98334f056c09f2d3b'
});

const initialState = {
  input: '',
  imageURL: '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState
    // this.state = {
    //   input: '',
    //   imageURL: '',
    //   box: {},
    //   route: 'signin',
    //   isSignedIn: false,
    //   user: {
    //     id: '',
    //     name: '',
    //     email: '',
    //     entries: 0,
    //     joined: ''
    //   }
    // }
  }

  // To check if server mounted:
  // componentDidMount() {
  //   fetch('http://localhost:3000')
  //     .then(response => response.json())
  //     .then(console.log);
  // }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height),
      leftCol: clarifaiFace.left_col * width
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onImageSubmit = (calculateFaceLocation) => {
    this.setState({imageURL: this.state.input});
    ClarifaiApp.models.predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input
    )
    // TODO - move API to BE (fail):
    // fetch('http://localhost:3000/imageURL', {
    //   method: 'post',
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify({
    //       input: this.state.input
    //   })
    // })
    // .then(response => response.json())
    .then(response => {
      if (response) {
        fetch('http://localhost:3000/image', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
              id: this.state.user.id
          })
        })
        .then(response => response.json())
        .then(count => {
          // This block replaces the user object as a whole:
          // this.setState({user: {
          //   entries: count
          // }})
          // Better alternative with Object.assign():
            this.setState(Object.assign(this.state.user, {entries: count}))
        })
        .catch(err => console.log(err));
      }
      this.displayFaceBox(this.calculateFaceLocation(response), 'put')
    })
    .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})
  }

  render() {
    const { isSignedIn, imageURL, route, box } = this.state;
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation isSignedIn={isSignedIn}onRouteChange={this.onRouteChange}/>
        { this.state.route === 'home'
          ? <div>
              <Logo />
              <Rank name={this.state.user.name} entries={this.state.user.entries}/>
              <ImageLinkForm
                onInputChange={this.onInputChange}
                onImageSubmit={this.onImageSubmit}
              />
              <FaceRecognition
                box={box}
                imageURL={imageURL}
              />
            </div>
          : (
            route === 'signin'
            ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          )
        }
      </div>
    );
  }
}

export default App;
