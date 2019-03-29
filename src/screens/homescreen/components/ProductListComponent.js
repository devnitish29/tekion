import React, { Component } from 'react'
import {  View, FlatList, } from 'react-native'
import ListItemComponent from './ImageListItemComponent';
import { ImageArray} from '../../../utils/ImageArrayUtils';
import styles from '../styles/Styles';


export default class ProductListComponent extends Component {


    onToggle = (data) => {
      const { showProductDetails } =this.props;
      
      showProductDetails();
    }
    
    _renderProducts = (item) =>{
       return (
        <ListItemComponent product={item} showProduct={this.onToggle} />
       )
    } 



    _renderItemSeparator = () =>{   
        return(  
            <View style={styles.imageListItemSeparator}/>
        );
    };



    componentDidUpdate(props) { 
      const{DetailHeight} = this.props;
      
      
      // if(DetailHeight != 0){
      //   this.refs.listRef.scrollToOffset({x: 0, y: 0, animated: true})
      // } 
    }
  render() {
    return (
      <View style={styles.productContainer}> 
        <FlatList 

            data={ImageArray} 
            renderItem={({item}) => this._renderProducts(item)}
            keyExtractor={(item, index) => index} 
            ItemSeparatorComponent={this._renderItemSeparator}
            ref="listRef"
            
            
        />

      </View>
    )
  }
}
