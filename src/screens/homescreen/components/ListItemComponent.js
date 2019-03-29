import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from '../styles/Styles';
import AppTheme from '../../../utils/AppTheme';

export default class ListItemComponent extends Component {

    render() {
        const {index} =this.props;
        return (
            <View style={styles.listItemContainer}>
                <View style={styles.listItemSubContainer}>
                    <View style={styles.listItemViewRight}>
                        <Text style={styles.listItemTextHeader}>Header</Text> 
                    </View>
                    <View style={styles.listItemViewLeft}>
                        <View style={[styles.itemCircle,{backgroundColor:index % 2 ==0? AppTheme.RED :AppTheme.GREEN,}]}></View>
                        <Text>PDI</Text>
                    </View>     
                </View>
                <Text>Text</Text>
            </View>
        )
    }
}
