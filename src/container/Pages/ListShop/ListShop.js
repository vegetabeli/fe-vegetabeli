import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon, SearchBar} from 'react-native-elements';

class ListShop extends Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({search});
  };

  render() {
    const {search} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
            <View style={styles.btnBack}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('RouteTab')}>
            <Icon name="chevron-left" size={40} color="#F15B5D" />
          </TouchableOpacity>
          <View style={styles.navbarTextView}>
            <Text style={styles.navbarText}>Pilih Pasar</Text>
          </View>
          </View>
          <View style={styles.search}>
          <SearchBar
            inputStyle={{fontSize: 14}}
            containerStyle={styles.searchBar}
            onChangeText={this.updateSearch}
            value={search}
            platform="android"
            placeholder="Cari sayur, bumbu dapur, lauk pauk"
          />
          </View>
        </View>
        
      </View>
    );
  }
}

export default ListShop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  // Navbar
  navbar: {
    marginBottom: 30,
    height: 100,
    backgroundColor: 'white',
    elevation: 3,
  },
  navbarTextView: {
    marginLeft: 30,
  },
  navbarText: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 10
  },
  btnBack: {
      flexDirection: 'row',
      paddingLeft: 5,
  },
  searchBar: {
    width: '95%',
    height: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#F9F9F9',
    marginTop: 8,
    borderRadius: 45,
  },
  search: {
    justifyContent: 'flex-start'
  }
});
