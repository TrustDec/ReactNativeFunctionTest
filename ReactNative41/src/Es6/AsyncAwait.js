'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
function sleep(timeout) {  
    return new Promise(function(resolve, reject) {
    	console.log(resolve);
        setTimeout(resolve, timeout);
    });
}

async function main() {  
    // console.time('how long did I sleep');
    await sleep(10);
    // console.timeEnd('how long did I sleep');
}
main();
export default class AsyncAwait extends Component {
	  render() {
	    return (
	      <TouchableHighlight
	        style={styles.button}
	        underlayColor="#a5a5a5"
	        onPress={()=>main()}>
	        <Text style={styles.buttonText}>执行</Text>
	      </TouchableHighlight>
	    );
	  }
}
const styles = StyleSheet.create({
  button: {
    margin:5,
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#cdcdcd',
  }
 });