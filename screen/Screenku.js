import React from "react";
import { StyleSheet, SafeAreaView, View, ScrollView, TextInput, TouchableOpacity,Image, Dialog } from "react-native";
import { Container, CardItem, Body, Content, Header, Left, Right, Icon, Item,Card, Input, Title, Button, Text } from "native-base";
import { FAB, Provider, Portal,Modal } from 'react-native-paper';
// import {Modal} from 'react-native-elements'
// import styles from './ScreenkuCSS'

export default class Screenku extends React.Component {
  constructor(){
    super()
    this.state={
      visible:''
    }
  }
  showModal=()=>this.setState({visible:true})
  hideModal=()=>this.setState({visible:false})
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
        <View style={styles.card}>
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
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Isi') }}>
              <Text style={styles.child}>Apa Tumbasin.id?</Text>
            </TouchableOpacity>
            <View style={styles.line}/>
            <Text style={styles.parent}>Operasional</Text>
            <View style={styles.line}/>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Isi2') }}>
            <Text style={styles.child}>Pasar mana saja yang sementara bekerjasama dengan Tumbasin.id?</Text>
            </TouchableOpacity>
            <View style={styles.line}/>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Isi3') }}>
            <Text style={styles.child}>Operasional Tumbasin.id sudah ada di kota mana saja?</Text>
            </TouchableOpacity>
            <View style={styles.line}/>
            <Text style={styles.parent}>Harga dan Transaksi</Text>
            <View style={styles.line}/>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Isi4') }}>
            <Text style={styles.child}>Berapa ongkos kirimnya?</Text>
            </TouchableOpacity>
            <View style={styles.line}/>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Isi5') }}>
            <Text style={styles.child}>Kapan saya dapat menerima pengambilan uang dari Tumbasin.id?</Text>
            </TouchableOpacity>
            <View style={styles.line}/>
            <Text style={styles.parent}>Pesanan</Text>
            <View style={styles.line}/>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Isi6') }}>
            <Text style={styles.child}>Seberapa cepat Tumbasin.id mengantarkan pesanan?</Text>
            </TouchableOpacity>
            <View style={styles.line}/>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Isi7') }}>
            <Text style={styles.child}>Apa yang dimaksud waktu pengantaran?</Text>
            </TouchableOpacity>
            <View style={styles.line}/>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Isi8') }}>
            <Text style={styles.child}>Bagaimana jika stok barang yang saya pesan habis?</Text>
            </TouchableOpacity>
            <View style={styles.line}/>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Isi9') }}>
            <Text style={styles.child}>Apakah harga barang di Tumbasin.id berbeda dengan harga di Pasar Tradisional?</Text>
            </TouchableOpacity>
            <View style={styles.line}/>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Isi10') }}>
            <Text style={styles.child}>Bagaimana saya mengecek status pemesanan saya?</Text>
            </TouchableOpacity>
            <View style={styles.line}/>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Isi11') }}>
            <Text style={styles.child}>Bagaimana cara edit atau membatalkan pemesanan?</Text>
            </TouchableOpacity>
            <View style={styles.line}/>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Isi12') }}>
            <Text style={styles.child}>Apa kebijakan Tumbasin.id terkait pembatalan pesanan?</Text>
            </TouchableOpacity>
            <View style={styles.line}/>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Isi13') }}>
            <Text style={styles.child}>Bagaimana jika saya ingin melaporkan masalah terhadap pesanan saya?</Text>
            </TouchableOpacity>
            <View style={styles.line}/>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Isi14') }}>
            <Text style={styles.child}>Bagaimana melihat struk pembelanjaan saya?</Text>
            </TouchableOpacity>
            <View style={styles.line}/>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Isi15') }}>
            <Text style={styles.child}>Bagaimana jika saya ingin mengembalikan kantong belanja Tumbasin.id?</Text>
            </TouchableOpacity>
            <View style={styles.line}/>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Isi16') }}>
            <Text style={styles.child}>Bagaimana jika saya ingin mereturn barang?</Text>
            </TouchableOpacity>
            <View style={styles.line}/>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Isi17') }}>
            <Text style={styles.child}>Siapa yang akan memilihkan pesanan saya?</Text>
            </TouchableOpacity>
            <View style={styles.line}/>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Isi18') }}>
            <Text style={styles.child}>Siapa yang akan mengantarkan pesanan saya?</Text>
            </TouchableOpacity>
            <View style={styles.line}/>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Isi19') }}>
            <Text style={styles.child}>Saya punya pertanyaan lebih lanjut untuk Tumbasin.id!</Text>
            </TouchableOpacity>
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
            <Image style={styles.icon2} source={require('./info.png')} />
              <Text style={styles.layanan}>Layanan Pelanggan 24 Jam, Senin s/d Minggu, tidak termasuk Hari Libur Nasional</Text>
            </Item>
          
        </View>  
            <Text style={{marginBottom:150}}/>
          </ScrollView>

          <Provider>
            <Portal>
              <Modal   containerStyle={{ justifyContent: 'flex-end' }} visible={this.state.visible} onDismiss={this.hideModal}>
                <Card style={{marginTop: 320,bottom:0,height:100, marginLeft:8,marginRight:8}}>
                  <Image style={{marginLeft:15,marginTop:18,height: 50,width:50}} source={require('./whatsapp2.png')} />
                  <Text style={{marginLeft:14, fontSize: 12}}>whatsapp</Text>
                </Card>
                <Card style={{marginTop:5,height:45,marginLeft:8,marginRight:8}}>
                <TouchableOpacity onPress={this.hideModal}>
                  <Text style={{marginLeft:140, marginTop:12, color:'#43CFA8'}}>Cancel</Text>
                </TouchableOpacity>
                </Card>
              </Modal>
            </Portal>
          </Provider>

        <TouchableOpacity onPress={this.showModal}
          style={{
            borderWidth:1,
            borderColor:'rgba(0,0,0,0.2)',
            alignItems:'center',
            justifyContent:'center',
            width:60,
            position: 'absolute',
            height:60,
            right:0,
            marginTop:545,
            marginRight:10,
            backgroundColor:'#43CFA8',
            borderRadius:100,
        }}>
          <Image style={{height: 40,width:40}} source={require('./whatsapp.png')} />
        </TouchableOpacity>

        {/* <FAB
            style={{
              position: 'absolute',
              right:0,
              marginTop:550,
              marginRight:16,
              backgroundColor:'#43CFA8',
              height:55,
              width:55,
              
            }}
            medium
            icon="whatsapp"
            onPress={this.showModal}
          /> */}
      </View>
    );
  }
}

const styles=StyleSheet.create({
  fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
      // zIndex: 3
    },
  header: {
    backgroundColor: 'white',
    width: 360,
    height: 60,
    
  },
  card:{marginTop:0,
      marginLeft:0,
      marginBottom:0,
      marginRight:0,
      backgroundColor:'white',borderTopWidth:1,borderColor:'#F1F2F6'},
  iconHeader: {
    color: '#F15B5D',
  },
  titleHeader: {
    color: 'black',
    fontSize:18
  },
  backgroundAll:{
    backgroundColor:'white',borderColor:'black'
    },
  card: {marginTop:0,
      marginLeft:0,
      marginBottom:0,
      marginRight:0,
      backgroundColor:'white',borderTopWidth:1,borderColor:'#DBD9D9'},
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
    shadowColor:'black'
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
    marginTop:16,
    fontSize:13,
    marginRight:25
  },
  icon2:{
    marginRight: 10,
    marginLeft: 15,
    width:12,
    height:12
  },
})