import React, { Component } from 'react'
import {
    Text, View, FlatList, Dimensions, NativeModules,
    LayoutAnimation, TouchableOpacity
} from 'react-native'
import ListItemComponent from './ListItemComponent';
import ProductListComponent from './ProductListComponent';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from '../styles/Styles';
import AppTheme from '../../../utils/AppTheme';
import { dummyDataArray } from '../../../utils/stringUtils';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);


export default class BottomComponent extends Component {

    state = {

        ImageHeight: SCREEN_HEIGHT / 2,
        DetailHeight: SCREEN_HEIGHT / 2,
        ListHeight: SCREEN_HEIGHT / 3
    };


    onImageClicked = () => {
        LayoutAnimation.easeInEaseOut();
        this.setState({
            ImageHeight: SCREEN_HEIGHT,
            DetailHeight: 0
        })
    }

    showDetail = () => {
        LayoutAnimation.easeInEaseOut();
        this.setState({
            ImageHeight: SCREEN_HEIGHT / 2,
            DetailHeight: SCREEN_HEIGHT / 2,
        })
    }

    showDetailFullPage = () => {
        LayoutAnimation.easeInEaseOut();
        const { ImageHeight } = this.state;
        if (ImageHeight > 0) {
            this.setState({
                ImageHeight: 0,
                DetailHeight: SCREEN_HEIGHT - 80,
                ListHeight: SCREEN_HEIGHT - 190

            })
        } else {
            this.setState({
                ImageHeight: SCREEN_HEIGHT / 2,
                DetailHeight: SCREEN_HEIGHT / 2,
                ListHeight: SCREEN_HEIGHT / 3

            })
        }

    }

    _renderProducts = (item,index ) => {
        return (
            <ListItemComponent product={item} index={index}/>
        )
    }

    _renderItemSeparator = () => {
        return (
            <View style={styles.imageListItemSeparator} />
        );
    };




    render() {
        const { ...rest } = this.state;
        return (

            <View style={styles.homeScreenContainer}>


                <View style={{ height: this.state.ImageHeight, width: null }} >
                    <ProductListComponent showProductDetails={this.onImageClicked} {...rest} />
                </View>

                <View style={[styles.bottomComponent, {
                    width: SCREEN_WIDTH,
                    height: this.state.DetailHeight,

                }]} >


                    <TouchableOpacity
                        onPress={() => this.showDetailFullPage()}
                        style={styles.labelHeader}><Text style={styles.labelHeaderText}>General</Text></TouchableOpacity>
                    <View style={{ height: this.state.ListHeight + 10 }}>
                        <FlatList
                            data={dummyDataArray}
                            renderItem={({ item,index }) => this._renderProducts(item,index)}
                            keyExtractor={(item, index) => index}
                            ItemSeparatorComponent={this._renderItemSeparator}

                        />
                    </View>
                    <View style={styles.bottomButton}>
                        <Text style={styles.bottomButtonText}>Create RO</Text>
                    </View>

                </View>



                {this.state.DetailHeight == 0 ? <View
                    style={styles.buttonClose}
                >
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.showDetail()}
                    >
                        <Icon name="window-close" size={30} style={{ color: AppTheme.WHITE }} />
                    </TouchableOpacity>
                </View> : null}


            </View>

        )
    }
}
