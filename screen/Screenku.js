import React from "react";
import { StyleSheet, SafeAreaView, View, ScrollView, TextInput } from "react-native";
import { Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Item, Input, Title, Button, Text } from "native-base";

export default class Screenku extends React.Component {

  render() {
    return (
      <View>
        <Header style={styles.header}>
          <Left>
            <Button transparent>
              <Icon name='ios-arrow-back' style={styles.iconHeader} />
            </Button>
          </Left>
          <Body>
            <Title style={styles.titleHeader}>Pusat Bantuan</Title>
          </Body>
          <Right />
        </Header>
        {/* <SafeAreaView> */}
        
        <View >
            <Item regular style={styles.searchColumn}>
              <Icon active name="search" style={styles.iconSearch} />
              <TextInput
                autoCapitalize="none"
                placeholder='Cari solusi jawaban'
                placeholderTextColor="gray"
                clearButtonMode="always"
                style={{fontSize:13}}
              // onChangeText={val => this.onChangeText('email', val)}
              />
            </Item>
        </View>  
        <ScrollView style={styles.backgroundAll}> 
            <View style={styles.backText}>
              <Text style={styles.topText}>Hello..</Text>
              <Text style={styles.bottomText}>Anda Memerlukan Bantuan?</Text>
            </View>
            <Text style={styles.parent}>Tentang Kami</Text>
            <View style={styles.line}/>
            <Text style={styles.child}>Apa Tumbasin.id?</Text>
            <View style={styles.line}/>
            <Text style={styles.parent}>Operasional</Text>
            <View style={styles.line}/>
            <Text style={styles.child}>Pasar mana saja yang sementara bekerjasama dengan Tumbasin.id?</Text>
            <View style={styles.line}/>
            <Text style={styles.child}>Operasional Tumbasin.id sudah ada di kota mana saja?</Text>
            <View style={styles.line}/>
            <Text style={styles.parent}>Harga dan Transaksi</Text>
            <View style={styles.line}/>
            <Text style={styles.child}>Berapa ongkos kirimnya?</Text>
            <View style={styles.line}/>
            <Text style={styles.child}>Kapan saya dapat menerima pengambilan uang dari Tumbasin.id?</Text>
            <View style={styles.line}/>
            <Text style={styles.parent}>Pesanan</Text>
            <View style={styles.line}/>
            <Text style={styles.child}>Seberapa cepat Tumbasin.id mengantarkan pesanan?</Text>
            <View style={styles.line}/>
            <Text style={styles.child}>Apa yang dimaksud waktu pengantaran?</Text>
            <View style={styles.line}/>
            <Text style={styles.child}>Bagaimana jika stok barang yang saya pesan habis?</Text>
            <View style={styles.line}/>
            <Text style={styles.child}>Apakah harga barang di Tumbasin.id berbeda dengan harga di Pasar Tradisional?</Text>
            <View style={styles.line}/>
            <Text style={styles.child}>Bagaimana saya mengecek status pemesanan saya?</Text>
            <View style={styles.line}/>
            <Text style={styles.child}>Bagaimana cara edit atau membatalkan pemesanan?</Text>
            <View style={styles.line}/>
            <Text style={styles.child}>Apa kebijakan Tumbasin.id terkait pembatalan pesanan?</Text>
            <View style={styles.line}/>
            <Text style={styles.child}>Bagaimana jika saya ingin melaporkan masalah terhadap pesanan saya?</Text>
            <View style={styles.line}/>
            <Text style={styles.child}>Bagaimana melihat struk pembelanjaan saya?</Text>
            <View style={styles.line}/>
            <Text style={styles.child}>Bagaimana jika saya ingin mengembalikan kantong belanja Tumbasin.id?</Text>
            <View style={styles.line}/>
            <Text style={styles.child}>Bagaimana jika saya ingin mereturn barang?</Text>
            <View style={styles.line}/>
            <Text style={styles.child}>Siapa yang akan memilihkan pesanan saya?</Text>
            <View style={styles.line}/>
            <Text style={styles.child}>Siapa yang akan mengantarkan pesanan saya?</Text>
            <View style={styles.line}/>
            <Text style={styles.child}>Saya punya pertanyaan lebih lanjut untuk Tumbasin.id!</Text>
            <View style={styles.line}/>
            <Text style={styles.call}>
              <Text style={styles.call}>Masih</Text>
              <Text style={styles.callBold}> butuh bantuan </Text>
              <Text style={styles.call}>atau </Text>
              <Text style={styles.callBold}>punya pertanyaan lain</Text>
              <Text style={styles.call}> yang ingin ditanyakan? </Text>
              <Text style={styles.callRed}>HUBUNGI KAMI</Text>
            </Text>
            <View style={{marginTop: 22, marginLeft:2}}>
            <Item regular style={styles.item2}>
              <Icon active name="wifi" style={styles.iconSearch2} />
              <Text style={styles.layanan}>Layanan Pelanggan 24 Jam, Senin s/d Minggu, tidak termasuk Hari Libur Nasional</Text>
            </Item>
        </View>  
            <Text style={{marginBottom:150}}/>
          </ScrollView>
        {/* </SafeAreaView> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    width: 360,
    height: 50
  },
  iconHeader: {
    color: '#F15B5D',
  },
  titleHeader: {
    color: 'black',
    fontSize:18
  },
  backgroundAll:{
    backgroundColor:'white'
    },
  card: {
    marginTop: 0,
    marginBottom:0,
    marginLeft: -2,
    width: 370,
    height:75
  },
  iconSearch: {
    color: 'gray'
  },
  iconSearch2: {
    color: 'gray',
    marginTop:12
  },
  searchColumn: {
    height: 40,
    width: "92%",
    borderColor: '#F1F2F6',
    backgroundColor: '#E9EAEC',
    borderWidth: 2,
    borderRadius: 20,
    marginBottom: 12,
    marginTop: 16,
    marginLeft:15,
    fontSize: 10,
  },
  backText:{
    backgroundColor:"#F15B5D"
  },
  topText:{
    marginTop:18,
    marginBottom:18,
    color:'white',
    textAlign:'center',
    fontSize:14,
    // fontFamily:'Arial'
  },
  bottomText:{
    color:'white',
    textAlign:'center',
    marginBottom:18,
    fontSize: 20,
    fontWeight:'bold',
    // fontFamily:'Georgia'
  },
  line:{
    borderBottomColor: '#dcdcdc',
    borderBottomWidth: 1,
    marginLeft:15,
    marginRight:15,
    marginTop:15
  },
  parent:{
    marginTop:30,
    marginLeft:15,
    fontSize:13,
    fontWeight:"bold"
  },
  child:{
    marginTop:18,
    marginLeft:15,
    marginRight:15,
    fontSize:13,
    color:"gray"
  },
  call:{
    marginTop:37,
    marginLeft:15,
    marginRight:15,
    fontSize:13,
    color:"gray"
  },
  callBold:{
    marginTop:37,
    marginLeft:15,
    marginRight:15,
    fontSize:13,
    fontWeight:'bold',
    color:"gray"
  },
  callRed:{
    marginTop:37,
    marginLeft:15,
    marginRight:15,
    fontSize:13,
    color:"red"
  },
  item2:{
    height: 40,
    width: "92%",
    borderColor: 'white',
    backgroundColor: 'white'
    },
    layanan:{
      color:'gray',
      marginTop:22,
      fontSize:13,
      marginRight:25
      }
})

