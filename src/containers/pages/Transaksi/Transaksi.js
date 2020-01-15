import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Transaksi extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <Text>This Screen Transaksi</Text>
      </View>
    );
  }
}

export default Transaksi;

const styles = StyleSheet.create({
    parent: {
      backgroundColor: '#EFD2BC',
      flex: 1,
    },
  });