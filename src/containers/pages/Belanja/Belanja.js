import React, {Component} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';
import {Button, Icon, SearchBar, Card} from 'react-native-elements';
import driver from '../../../assets/image/bike.png'

class Belanja extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <View style={styles.topBar}>
          <SearchBar
            inputStyle={{fontSize: 14}}
            containerStyle={styles.searchBar}
            platform="android"
            placeholder="Cari sayur, bumbu dapur, lauk pauk"
          />
        </View>
        <View style={styles.addressBar}>
          <View style={styles.textPos}>
            <Text style={styles.textGray}>Kamu Belanja di:</Text>
          </View>
          <View style={styles.textStore}>
            <Icon
              name="store"
              size={28}
              color="skyblue"
              containerStyle={styles.iconStyle}
            />
            <Text style={styles.textSize}>BAKUL DAWET</Text>
            <Button
              title="GANTI"
              titleStyle={styles.titleBtn}
              containerStyle={styles.btnAdress}
              buttonStyle={styles.btnColor}
            />
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.categoryBar}>
            <Text style={styles.fontCategory}>Telusuri Jenis Produk</Text>
            <View style={styles.categoryTop}>
              <View style={styles.card1}>
                <Icon
                  name="store"
                  size={28}
                  color="brown"
                  containerStyle={styles.iconStyle}
                />
                <View style={styles.textCategory}>
                  <Text style={styles.textCategory}>Sayuran</Text>
                </View>
              </View>
              <View style={[styles.card1, styles.cardMid]}>
                <Icon
                  name="store"
                  size={28}
                  color="gray"
                  containerStyle={styles.iconStyle}
                />
                <View style={styles.textCategory}>
                  <Text style={styles.textCategory}>Lauk Pauk</Text>
                </View>
              </View>
              <View style={styles.card1}>
                <Icon
                  name="store"
                  size={28}
                  color="green"
                  containerStyle={styles.iconStyle}
                />
                <View style={styles.textCategory}>
                  <Text style={styles.textCategory}>Bumbu</Text>
                </View>
              </View>
              <View style={[styles.card1, styles.cardMid]}>
                <Icon
                  name="store"
                  size={28}
                  color="blue"
                  containerStyle={styles.iconStyle}
                />
                <View style={styles.textCategory}>
                  <Text style={styles.textCategory}>Seafood</Text>
                </View>
              </View>
              <View style={styles.card1}>
                <Icon
                  name="store"
                  size={28}
                  color="red"
                  containerStyle={styles.iconStyle}
                />
                <View style={styles.textCategory}>
                  <Text style={styles.textCategory}>Sembako</Text>
                </View>
              </View>
            </View>
            <View style={styles.categoryBot}>
              <View style={styles.card1}>
                <Icon
                  name="store"
                  size={28}
                  color="purple"
                  containerStyle={styles.iconStyle}
                />
                <View style={styles.textCategory}>
                  <Text style={styles.textCategory}>Jajanan</Text>
                </View>
              </View>
              <View style={[styles.card1, styles.cardMid]}>
                <Icon
                  name="store"
                  size={28}
                  color="black"
                  containerStyle={styles.iconStyle}
                />
                <View style={styles.textCategory}>
                  <Text style={styles.textCategory}>Buah</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.img}>
            <View style={styles.rounded}>
            <Image source={driver} style={styles.imgStyle}/>
            </View>
            <View style={styles.textPromo}>
              <Text style={styles.ok}>PROMO BERLIMPAH, SLUR!</Text>
              <Text style={styles.ok}>SELAMAT BERBELANJA</Text>
            </View>
          </View>
          <View style={styles.bestSeller}>
            <Text style={styles.fontBestSell}>Produk Bestseller</Text>
            <TouchableOpacity>
              <Text style={styles.fontSeeAll}>Lihat semua</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.listProduk}>
            <View style={styles.produkStyle}>
              <Card containerStyle={styles.cardStyle} />
            </View>
            <View style={styles.produkStyle1}>
              <Text>Nama Produk</Text>
              <Text style={styles.fontSeeAll}>Rp. Harga /pcs</Text>
            </View>
            <View style={styles.produkStyle2}>
              <Button
                title="Tambahkan"
                titleStyle={styles.titleBtn}
                buttonStyle={styles.btnColor}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Belanja;

const styles = StyleSheet.create({
  parent: {
    backgroundColor: 'white',
    flex: 1,
  },
  topBar: {
    backgroundColor: '#DC4C6F',
    flexDirection: 'row',
    height: 120,
    justifyContent: 'center',
  },
  searchBar: {
    width: '90%',
    height: '32%',
    justifyContent: 'center',
    backgroundColor: '#F9F9F9',
    marginTop: 15,
    borderRadius: 45,
  },
  addressBar: {
    width: '90%',
    aspectRatio: 4 / 1,
    flexDirection: 'column',
    alignSelf: 'center',
    backgroundColor: '#F9F9F9',
    marginTop: -50,
    borderRadius: 10,
    elevation: 2,
  },
  categoryBar: {
    height: 180,
    backgroundColor: '#F9F9F9',
    marginVertical: 10,
    flexDirection: 'column',
  },
  textGray: {
    fontSize: 13,
    color: '#919392',
    marginLeft: 10,
  },
  textSize: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 8,
    marginTop: 12,
  },
  textPos: {
    justifyContent: 'center',
    marginTop: 18,
  },
  textStore: {
    flexDirection: 'row',
  },
  btnAdress: {
    marginLeft: 110,
    marginTop: 2,
  },
  btnColor: {
    backgroundColor: '#F15B5D',
    width: 100,
    height: 40,
    borderRadius: 6,
    elevation: 2,
  },
  titleBtn: {
    fontSize: 14,
  },
  iconStyle: {
    marginLeft: 9,
    marginTop: 7,
    marginBottom: 10,
  },
  fontCategory: {
    marginTop: 3,
    marginLeft: 16,
    fontSize: 18,
    fontWeight: 'bold',
  },
  categoryTop: {
    flexDirection: 'row',
    marginTop: 8,
    marginHorizontal: 28,
  },
  categoryBot: {
    flexDirection: 'row',
    marginTop: 24,
    marginHorizontal: 28,
  },
  card1: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 2.5,
  },
  cardMid: {
    marginHorizontal: 22,
  },
  textCategory: {
    fontSize: 12,
    marginBottom: -12,
  },
  img: {
    width: '80%',
    aspectRatio: 2 / 1,
    backgroundColor: '#F15B5D',
    marginVertical: 10,
    alignSelf: 'center',
    flexDirection: 'column',
    marginHorizontal: 20,
    borderRadius: 10,
    justifyContent: "center"
  },
  bestSeller: {
    width: '95%',
    aspectRatio: 10 / 1,
    backgroundColor: 'white',
    marginHorizontal: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fontBestSell: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: '2%',
  },
  fontSeeAll: {
    color: '#F15B5D',
    fontSize: 13
  },
  listProduk: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '2%',
    marginBottom: '12%',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  cardStyle: {
    height: 100,
    width: 100,
    borderRadius: 8,
    elevation: 2,
  },
  produkStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  produkStyle1: {
    flexDirection: 'column',
    position: 'absolute',
    marginLeft: '35%',
    marginTop: '5%',
  },
  produkStyle2: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  imgStyle: {
    height: 75,
    width: 75,
    marginLeft: 10
  },
  rounded: {
    backgroundColor: '#F1F1F1',
    width: '35%',
    borderTopRightRadius: 50,
    borderBottomRightRadius: 6
    
  },
  textPromo: {
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  ok : {
    fontSize: 16,
    fontWeight: "bold",
    color: 'white',
    marginRight: 10
  }
});
