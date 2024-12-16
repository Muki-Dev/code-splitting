import React, { Component } from 'react'
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import './App.css';

class App extends Component {
  constructor(){
      super();
      this.state = {
        route: 'page1',
        components: ''
      }
    }

    onRouteChange = (route) => {
      // No Code Splitting
      this.setState({route: route})
    }
  render(){
    // No Code Splitting
      if(this.state.route ==='page1'){
          return <Page1 onRouteChange={this.onRouteChange}/>
      }else if(this.state.route ==='page2'){
         return <Page2 onRouteChange={this.onRouteChange}/>
       }else if(this.state.route ==='page3'){
           return <Page3 onRouteChange={this.onRouteChange}/>
       }
  }
  
}

export default App;
