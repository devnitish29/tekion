import React, { Component } from 'react'
import { Text, View, TouchableOpacity, } from 'react-native'   
import Icon from 'react-native-vector-icons'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../screens/homescreen/styles/Styles'
import Apptheme from '../utils/AppTheme';     
export default class HeaderComponent extends Component {


    render() {
        const { title, notificationCount, messageCount } = this.props;
        return (
            <View style={styles.appBarContainer}>

                    <View style={styles.headerRight}>
                        <TouchableOpacity style={{  }} 
                        >
                            <MaterialCommunityIcons
                                name="chevron-left"
                                
                                size={40}
                                style={{ color: Apptheme.BLACK }}  />
                                
                        </TouchableOpacity>

                        
                    </View> 
                    <View style={styles.headerLeft}> 
                        <View style={styles.itemMargin}>
                        <MaterialIcons 
                            name="search"
                            type="material" 
                            size={35}
                            style={{ color: Apptheme.BLACK}} 
                        />   
                        
                        </View>
                        <View style={styles.itemMargin}>
                        <MaterialCommunityIcons
                            name="bell-outline"
                            size={35}
                           
                            style={{ color: Apptheme.BLACK }} 
                        />   
                        <View style={styles.notificationCircle}>
                        <Text style={styles.notificationCountText}>2</Text>
                        </View>
                        </View>   
                        
                        <View style={styles.itemMargin}>
                        <MaterialCommunityIcons
                            name="message-outline"
                            size={30} 
                            
                            style={{ color: Apptheme.BLACK }}    
                        />  
                        <View style={[styles.notificationCircle,{right:0,top:-4}]}>
                            <Text style={styles.notificationCountText}>10</Text>
                        </View>
                        </View>
                    </View>

                </View>
        )
    }
}



