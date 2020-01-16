import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Bantuan extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <Text>This Screen Bantuan</Text>
      </View>
    );
  }
}

export default Bantuan;

const styles = StyleSheet.create({
    parent: {
      backgroundColor: '#F8F3E6',
      flex: 1,
    },
  });