import React, { Component } from 'react'
import Page1 from './components/Page1';
// import Page2 from './components/Page2';
// import Page3 from './components/Page3';
import AsyncComponent from './components/AsyncComponent';
import './App.css';

class App extends Component {
  constructor(){
      super();
      this.state = {
        route: 'page1',
        components: null
      }
    }

    onRouteChange = (route) => {
      // No Code Splitting
      // this.setState({route: route})

      // Asynchrone Component
      this.setState({route: route})

      // With Code Splitting import() syntax
      // if(route === 'page1'){
      //   this.setState({route: route})
      // }else if(route === 'page2'){
      //   import('./components/Page2').then((Page2) => {
      //     this.setState({route: route, components: Page2.default})
      //   })
      // }else if(route === 'page3'){
      //   import('./components/Page3').then((Page3) => {
      //     this.setState({route: route, components: Page3.default})
      //   })
      // }
    }
  render(){
    // No Code Splitting
      // if(this.state.route ==='page1'){
      //     return <Page1 onRouteChange={this.onRouteChange}/>
      // }else if(this.state.route ==='page2'){
      //    return <Page2 onRouteChange={this.onRouteChange}/>
      //  }else if(this.state.route ==='page3'){
      //      return <Page3 onRouteChange={this.onRouteChange}/>
      //  }

    // Asynchrone Component
    if(this.state.route ==='page1'){
          return <Page1 onRouteChange={this.onRouteChange}/>
      }else if(this.state.route ==='page2'){
          const AsyncPage2 = AsyncComponent(() => import('./components/Page2'))
          return <AsyncPage2 onRouteChange={this.onRouteChange}/>
       }else if(this.state.route ==='page3'){
          const AsyncPage3 = AsyncComponent(() => import('./components/Page3'))
          return <AsyncPage3 onRouteChange={this.onRouteChange}/>
       }

    // With Code Splitting: import() syntax
    // if(this.state.route){
    //   return <Page1 onRouteChange={this.onRouteChange} />
    // }else{
    //   return <this.state.components onRouteChange={this.onRouteChange} />
    // }
  }
  
}

export default App;
