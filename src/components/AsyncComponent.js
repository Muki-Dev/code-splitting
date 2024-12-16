import React, { Component } from 'react';

export default function asyncComponent(importComponennt){
	class AsyncComponent extends Component{
		constructor(props){
			super(props);
			this.state = {
				component: null
			}
		}

		async componentDidMount(){
			const { default: component } = await importComponennt();
			this.setState({
				component: component 
			})
		}

		render(){
			const Component = this.state.component;
			return Component ? <Component {...this.props} /> : null;

		}
	}
	return AsyncComponent;
}