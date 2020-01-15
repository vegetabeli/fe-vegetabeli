import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Profile extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <Text>This Screen Profile</Text>
      </View>
    );
  }
}

export default Profile;

const styles = StyleSheet.create({
    parent: {
      backgroundColor: 'yellow',
      flex: 1,
    },
  });