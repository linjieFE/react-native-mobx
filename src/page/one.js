import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { observer, inject } from "mobx-react";

@inject("homeStore")
@inject("oneStore")
@observer
export default class App extends Component {
  render() {
    let { homeNum } = this.props.homeStore;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>第二个页面</Text>
        <Text style={styles.title}>跨页面共享值</Text>
        <Text style={styles.welcome}>HomeNum值:{homeNum}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  addNumberView: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 30
  }
});
