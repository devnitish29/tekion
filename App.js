/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {SafeAreaView , StatusBar} from 'react-native';
import HomeScreenContainer from './src/screens/homescreen/container/HomeScreenContainer';
import Apptheme from './src/utils/AppTheme';  



export default class App extends Component {
  render() {
    return ( 
      <SafeAreaView style={{flex:1, backgroundColor:Apptheme.WHITE}}>
      <StatusBar barStyle="light-content" backgroundColor={Apptheme.WHITE}/>
     <HomeScreenContainer />
     </SafeAreaView>
    );
  }
}


