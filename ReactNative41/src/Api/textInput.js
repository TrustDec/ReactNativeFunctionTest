import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Linking
} from 'react-native';

export default class TextInputDemo extends Component {
	state={
		l:20,
		x:0,
		y:0,
		width:0,
		height:0,
	};
	_onLayout(x, y, width, height){
		this.setState({x, y, width, height});
	}
	_onPress(){
		let url ="geo:37.484847,-122.148386";
		Linking.canOpenURL(url).then(supported => {
		  if (!supported) {
		    console.log('Can\'t handle url: ' + url);
		  } else {
		    return Linking.openURL(url);
		  }
		}).catch(err => console.error('An error occurred', err));
	}
	render(){
		return(
			<View style={{width:250,margin:this.state.l}}			>
				<View  style={{width:100,height:100,backgroundColor:'red'}}></View>
				<TextInput
					style={{height: 40, borderWidth: 1,textAlignVertical:'center',includeFontPadding:false,}}					
					placeholder="TextInput"
					underlineColorAndroid='transparent'
					selectionColor="#188eee"
					selectTextOnFocus={false}
					secureTextEntry={false}
					placeholderTextColor='red'
					dataDetectorTypes='phoneNumber'
					//multiline
					//maxLength={10}
					keyboardType="default"
					editable
					defaultValue="1212"
					blurOnSubmit={false}
					autoFocus={false}
					autoCorrect={false}
					autoCapitalize='characters'
					// onBlur={()=>alert('onBlur')}
					// onFocus={()=>alert('onFocus')}
					// onChange={()=>alert('onChange')}
					// onEndEditing={()=>alert('onEndEditing')}
					// onChangeText={()=>alert('onChangeText')}
					// onSubmitEditing={()=>alert('onSubmitEditing')}
					// onContentSizeChange={(x)=>console.log(x)}
					// onSelectionChange={()=>console.log('onSelectionChange')}
				/>
				<TextInput
					style={{height: 40, borderWidth: 1}}					
					placeholder="TextInput"
					underlineColorAndroid='transparent'/>
				<Text onPress={()=>this._onPress()}
				 style={{ transform: [{perspective:-10},{rotate: '-135deg'}],
				 	width:100,height:30,opacity:1,elevation:5,backgroundColor:'red',textAlignVertical:'center',includeFontPadding:false,textAlign:'center'}}>sds</Text>
				<Text>{this.state.x+'\n'+this.state.y+'\n'+this.state.width+'\n'+this.state.height}</Text>
			</View>
		);
	}
}