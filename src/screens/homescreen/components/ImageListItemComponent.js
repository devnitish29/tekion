import React, { Component } from 'react'
import {  Image , TouchableOpacity} from 'react-native'
import styles from '../styles/Styles';

export default class ImageListItemComponent extends Component {
  render() {
      const { product} = this.props;
    return (
      <TouchableOpacity style={styles.imageItemContainer}
      onPress ={() =>this.props.showProduct(false)}>
        <Image 
            source={product.path} 
             
            style={styles.image}  
            
        /> 
      </TouchableOpacity>
    )
  }
}
