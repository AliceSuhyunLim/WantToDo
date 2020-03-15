import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Dimensions} from "react-native"

const {width, height} = Dimensions.get("window");

export default class ToDo extends Component {
    state = {
        isEditing: false,
        isCompleted: false
    };
    render() {
            const {isCompleted} = this.state;
        return (
          <View style={styles.container}>
            <TouchableOpacity onPress={this._toggleComplete}>
              <View
                style=
                {[
                  styles.circle,
                  isCompleted
                    ? styles.completedCircle
                    : styles.uncompletedCircle
                ]}
              ></View>
            </TouchableOpacity>
            <Text style={styles.text}>Hello I'm a ToDo </Text>
          </View>
        );
    }
    _toggleComplete = () => {
        this.setState(prevState => {
            return {
                isCompleted: !prevState.isCompleted
            };
        });
    };
}

const styles = StyleSheet.create({
  container: {
    width: width - 50,
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center"
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    marginRight: 10,
    marginLeft: 5
  },
  completedCircle: {
    borderColor: "#bbb"
  },
  uncompletedCircle: {
    borderColor: "#DF27FF"
  },
  text: {
    fontWeight: "400",
    fontSize: 20,
    marginVertical: 15,
    padding: 5
  }
});