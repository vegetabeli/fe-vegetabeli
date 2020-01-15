import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Home extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <Text>Hello, world!</Text>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
    parent: {
      backgroundColor: 'white',
      flex: 1,
    },
  });