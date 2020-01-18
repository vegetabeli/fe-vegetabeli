import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon, SearchBar, Button} from 'react-native-elements';

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
            onPress={() => this.props.onPress}>
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
        <View style={styles.listProduk}>
          <View style={styles.produkStyle}>
            <View style={styles.cardStyle}></View>
            <View>
              <Text style={styles.fontBestSell}>
                ndkjakjadbknkjfnjknsjknjfnknkn
              </Text>
              <Text style={styles.fontSeeAll}>
                fknkfsnklnlkfkjfkjfkjakjfhkjfkjbkdabnwn
              </Text>
            </View>
          </View>
          <View style={styles.produkStyle2}>
            <Button
              title="Tambahkan"
              titleStyle={styles.titleBtn}
              buttonStyle={styles.btnColor}
              containerStyle={styles.marginBtn}
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
    marginBottom: 15,
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
  },
  btnColor: {
    backgroundColor: '#F15B5D',
    width: 90,
    height: 30,
    borderRadius: 6,
    elevation: 2,
  },
  marginBtn: {
    marginBottom: 10,
  },
  titleBtn: {
    fontSize: 12,
    textAlign: 'center',
  },
  fontBestSell: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: '5%',
  },
  fontSeeAll: {
    color: '#F15B5D',
    fontSize: 13,
    marginLeft: '5%',
  },
  listProduk: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginBottom: 12,
    marginHorizontal: '2%',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: '#E5E5E5',
    borderTopColor: '#E5E5E5',

  },
  cardStyle: {
    height: 110,
    width: 95,
    alignItems: 'stretch',
    borderRadius: 8,
    elevation: 2.5,
    backgroundColor: 'white',
    marginLeft: '2%',
    marginBottom: 10,
  },
  produkStyle: {
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 10
  },
  produkStyle1: {
    flexDirection: 'column',
    position: 'absolute',
    marginLeft: '35%',
    marginTop: '5%',
  },
  produkStyle2: {
    position: 'absolute',
    alignSelf: 'flex-end',
    marginLeft: '75%',
  },
});
