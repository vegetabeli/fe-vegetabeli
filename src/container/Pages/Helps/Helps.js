import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Bantuan extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <Text>This Screen Bantuan</Text>
        <Text>OK HELP</Text>
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