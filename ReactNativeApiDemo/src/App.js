import React, { Component } from 'react';
import { 
	AppState,
	View,
	StyleSheet,
	Navigator
} from 'react-native';
const INITAL_ROUTE = {
	location: '/splash',
};
const styles =StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: 'black'
	},
});

export default class App extends Component { 
	renderScene = (currentRoute, navigator) => {

	} 
	render(){
		return(
			<View>
				<Text>App</Text>
			</View>
		);
	}
}