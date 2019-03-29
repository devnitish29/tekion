import React, { Component } from "react";
import { View } from "react-native";
import HeaderComponent from "../../../components/HeaderComponent";
import BottomComponent from "../components/HomeScreenComponent";
import styles from '../styles/Styles';

export default class HomeScreenContainer extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    return (
      <View style={styles.homeScreenContainer}>
        <HeaderComponent />
        <BottomComponent />
      </View>
    );
  }
}
