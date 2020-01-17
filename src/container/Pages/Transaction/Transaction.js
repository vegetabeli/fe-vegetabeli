import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Icon} from 'react-native-elements';
import noTransaction from '../../../assets/image/noTransaction.png'

class Transaksi extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <View style={styles.navbarTextView}>
            <Text style={styles.navbarText}>Daftar Transaksi</Text>
          </View>
          <View style={styles.navbarIcon} >
          <TouchableOpacity>
            <Icon name="history" type="font-awesome" size={22} color="#A1A1A1" />
          </TouchableOpacity>
          </View>
        </View>
        <View style={styles.content}>
          <Image source={noTransaction} style={styles.img}/>
          <Text style={styles.textTop}>Transaksimu kosong, yuk order lagi!</Text>
          <Text style={styles.textBot}>Cari produk kebutuhanmu hari ini,</Text>
          <Text style={styles.textBot}>yuk belanja sekarang!</Text>
        </View>
      </View>
    );
  }
}

export default Transaksi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  // Navbar
  navbar: {
    marginBottom: 30,
    height: 60,
    backgroundColor: 'white',
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
  },
  navbarTextView: {
    marginLeft: 5,
  },
  navbarText: {
    fontSize: 16,
    fontWeight: '700',
  },
  navbarIcon: {
    marginRight: 20
  },
  //Content
  content: {
    justifyContent: "center",
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 100
  },
  img: {
    width: 200,
    height: 200,
  },
  textTop: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 5
  },
  textBot: {
    fontSize: 18,
  }
});
