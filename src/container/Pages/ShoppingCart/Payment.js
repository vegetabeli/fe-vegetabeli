import React from "react";
import { StyleSheet, SafeAreaView, View, ScrollView, TextInput, TouchableOpacity, Image, Dialog } from "react-native";
// import { Container, CardItem, Body, Content, Header, Left, Right, Icon, Item,Card, Input, Title, Button, Text } from "native-base";
import { Container, Header, Content, Form, Item, Input, Footer, Text, Label, Left, Right, Button, Icon, Body, Title, Card, Radio, ListItem } from 'native-base';

// import {Modal} from 'react-native-elements'
// import styles from './ScreenkuCSS'

export default class Payment extends React.Component {
    constructor(){
    super()
    this.state={
      selected:''
      }
    }
    render() {
        return (
            <Container>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={() => { this.props.navigation.navigate('ShoppingCart') }}>
                            <Icon name='ios-arrow-back' style={styles.iconHeader} />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.titleHeader}>Pesan</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Form >

                        <Item stackedLabel>
                            <Text style={styles.DetailPengiriman}>Detail Pengiriman</Text>
                            <Label style={{ fontSize: 13 }}>Nama Lengkap</Label>
                            <Input style={{ marginBottom: 0 }} />
                        </Item>
                        <Item stackedLabel last>
                            <Label style={{ fontSize: 13, marginBottom: 50 }}>Alamat Pengantaran</Label>
                            <Input />
                        </Item>
                        <Item stackedLabel last>
                            <Label style={{ fontSize: 13 }}>Email</Label>
                            <Input />
                        </Item>
                        <Item stackedLabel last>
                            <Label style={{ fontSize: 13 }}>No. Telephone</Label>
                            <Input />
                        </Item>
                        <Item stackedLabel last>
                            <Label style={{ fontSize: 13, marginBottom: 50 }}>Catatan Order</Label>
                            <Input />
                        </Item>
                    </Form>
                    <View style={styles.line} />
                    <Container style={{ borderColor: 'black', height: 190 }}>
                        <Text style={{ marginLeft: 12, marginTop: 15, fontWeight: 'bold', marginBottom: 12, fontSize: 15 }}>Tanggal Pengiriman</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('./lock.png')} style={{ width: 15, height: 15, marginLeft: 15 }} />
                            <Text style={{ marginLeft: 5, fontSize: 13, marginTop: 0, color: 'gray' }}>Tanggal Order</Text>
                            <Image source={require('./next.png')} style={{ width: 15, height: 15, marginLeft: 35 }} />
                            <Image source={require('./home.png')} style={{ width: 15, height: 15, marginLeft: 35 }} />
                            <Text style={{ marginLeft: 5, fontSize: 13, marginTop: 0, color: 'gray' }}>Tanggal Pengantaran</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginLeft: 15, fontSize: 15, marginTop: 0, fontWeight: 'bold' }}>17 Januari 2020</Text>
                            <Text style={{ marginLeft: 78, fontSize: 15, marginTop: 0, fontWeight: 'bold' }}>18 Januari 2020</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={{ width: 15, height: 15, marginLeft: 40, marginTop: 50 }} source={require('./info.png')} />
                            <Text style={{ marginTop: 48, fontSize: 13, marginLeft: 5, marginRight: 90, color: 'gray' }}>Order sebelum jam 8 pagi akan diantarkan oleh kurir kami Hari ini. Sedangkan untuk order setelah jam 8 pagi akan diantarkan oleh kurir kami Esok Harinya</Text>
                        </View>
                    </Container>
                    <View style={styles.line} />
                    <Content>
                    <Text style={{ marginLeft: 12, marginTop: 20, fontWeight: 'bold' }}>Metode Pembayaran</Text>
                        <ListItem  style={{ borderColor: 'white' }}>
                            <Left>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={require('./money.png')} style={{ width: 17, height: 17, marginLeft: 2 }} />
                                    <Text style={{ marginLeft: 5, fontSize: 13, marginTop: 0 }}>Bayar di rumah</Text>
                                </View>
                                <View>
                                </View>
                            </Left>
                            <Right>
                                <Radio
                                    color={"#f0ad4e"}
                                    selectedColor={"#5cb85c"}
                                    selected={this.state.selected=='pilih'}
                                    onPress={()=>this.setState({selected:'pilih'})}
                                />
                            </Right>
                        </ListItem>
                        <Text style={{ marginLeft: 15, fontSize: 13, marginTop: -1 }}>Cara Pembayaran:</Text>
                        <Text style={{ marginLeft: 15, fontSize: 13 }}>- Lakukan pembayaran setelah barang diterima.</Text>
                        {/* <View style={styles.line}/> */}
                        <ListItem  style={{ borderColor: 'white' }}>
                            <Left>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={require('./pay.png')} style={{ width: 17, height: 17, marginLeft: 2, marginTop: 12 }} />
                                    <Text style={{ marginLeft: 5, fontSize: 13, marginTop: 12 }}>Transfer Bank</Text>
                                </View>
                            </Left>
                            <Right>
                                <Radio
                                    color={"#f0ad4e"}
                                    selectedColor={"#5cb85c"}
                                    selected={this.state.selected=='pilih2'}
                                    onPress={()=>this.setState({selected:'pilih2'})}
                                />
                            </Right>
                        </ListItem>
                        <Text style={{ marginLeft: 15, fontSize: 13 }}>Cara Pembayaran:</Text>
                        <Text style={{ marginLeft: 15, fontSize: 13, marginRight: 50, marginBottom: 12 }}>- Lakukan pembayaran ke rekening BCA Tumbasin sesuai total pembayaran ke 8715122291 a.n Tri Asworo Mituhu Subekti.</Text>
                        <Text style={{ marginLeft: 15, fontSize: 13, marginRight: 50, marginBottom: 12 }}>- Konfirmasi pembayaran ke Admin Tumbasin Telp./ WA 082242861268</Text>
                        <Text style={{ marginLeft: 15, fontSize: 13, marginRight: 50}}>- Kirim bukti pembayaran berupa foto struk pembayaran atau screenshot pembayaran</Text>
                    </Content>
                    <View style={styles.line2} />
                    <Card style={{marginTop:0, marginLeft:0, marginBottom:0,marginRight:0}}>
                        <Text style={{ marginLeft: 12, marginTop: 20, fontWeight: 'bold', marginBottom:15 }}>Ringkasan Pesanan</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginLeft: 13, fontSize: 13, marginTop: 0, marginRight:10 }}>Jumlah</Text>
                            <View>
                                <Text style={{marginLeft: 13, fontSize: 13}}>Tempeeeeeeeee</Text>
                                <Text style={{marginLeft: 13, fontSize: 13}}>Harga Tempe</Text>
                            </View>
                            <Text style={{marginLeft: 100, fontSize: 13}}>Rp 6000</Text>
                        </View>
                    </Card>
                    <Card style={{marginTop:1, marginLeft:0, marginRight:0}}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginLeft: 13, fontSize: 13, marginTop: 20, marginRight:10, color:'gray' }}>Sub Total</Text>
                            <Text style={{textAlign: 'right', marginLeft:200, fontSize: 13,marginTop: 20}}>Rp 6000</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginLeft: 13, fontSize: 13, marginTop: 20, marginRight:10, color:'gray' }}>Biaya Pengantaran</Text>
                            <Text style={{textAlign: 'right', marginLeft:145, fontSize: 13,marginTop: 20}}>Rp 6000</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginLeft: 13, fontSize: 13, marginTop: 20, marginRight:10, color:'gray' }}>Diskon</Text>
                            <Text style={{textAlign: 'right', marginLeft:215, fontSize: 13,marginTop: 20,marginBottom:15}}>Rp 0</Text>
                        </View>
                    </Card>
                </Content>
                <Footer style={{backgroundColor:'white', borderWidth:1, borderColor:'#DBD9D9', height:150}}>
                    <View style={{flexDirection: 'column'}}>
                    <View style={{ flexDirection: 'row' }}>
                        <ListItem style={{marginTop:-4}}>
                            <Text style={{ marginLeft: -5, fontSize: 15, marginRight:10, marginTop:-4, color:'gray', fontWeight:'bold' }}>Total Pembayaran</Text>
                            <Text style={{textAlign: 'right', marginLeft:120, fontSize: 15,marginBottom:5}}>Rp 10000</Text>
                        </ListItem>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <ListItem style={{marginTop:-4}}>
                            <Text style={{ marginLeft: -5, fontSize: 15, marginRight:10, marginTop:-4, color:'gray', fontWeight:'bold' }}>Kamu Belanja di:</Text>
                            <Image source={require('./store.png')} style={{ width: 17, height: 17, marginLeft: 2,marginTop:-7 }} />
                            <Text style={{ marginLeft: 5, marginTop: -3, fontWeight: 'bold', fontSize: 15 }}>Pasar OKE</Text>
                        </ListItem>
                    </View>
                    {/* <TouchableOpacity }> */}
                        <Button onPress={() => { this.props.navigation.navigate('PaymentSucces') }} style={{backgroundColor:'#F15B5D',borderRadius: 10}}>
                        {/* <Button onPress={() => { this.props.navigation.navigate('PaymentSucces') }} style={{backgroundColor:'#F15B5D',borderRadius: 10}}> */}
                            <Text style={{marginLeft:100}}>Pesan Sekarang</Text>
                        </Button>
                    {/* </TouchableOpacity> */}
                    </View>
                </Footer>
            </Container>
        );
    }
}




const styles = StyleSheet.create({

    header: {
        backgroundColor: 'white',
        width: 360,
        height: 60,

    },
    titleHeader: {
        color: 'black',
        fontSize: 18
    },
    iconHeader: {
        color: '#F15B5D',
    },
    line: {
        borderBottomColor: '#dcdcdc',
        borderBottomWidth: 1,
        marginTop: 30
    },
    line2: {
        borderBottomColor: '#dcdcdc',
        borderBottomWidth: 1,
        marginTop: 12
    },
    DetailPengiriman:{ marginLeft: -220, marginTop: 20, fontWeight: 'bold' }
})