'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import TabView from 'react-native-tabcontrol';

export default class Tabcontrol extends Component{
    render(){


    return (
        <TabView
                // hasAnimated={false}
                // hasUnderline={false}
                hasRedDot={true}

                data={[
                    {
                        value: '全部'
                    },
                    {
                        value: '降价(99+)',
                        unread: 5
                    },
                    {
                        value: '失效(8)'
                    }
                ]}

                // tintColor='green'

                // currentIndex={0}
                hasAnimated={false}
                onChange={(item, index)=>{
                    // alert('index:' + index + '\n' + 'value:' + item.value);
                    console.log('index:' + index  + 'value:' + item.value);
                    item.unread = 0
                }}
            />
    )
    }
}