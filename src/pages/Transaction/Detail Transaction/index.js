import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ShopBag from 'react-native-vector-icons/FontAwesome5';
import IconHome from 'react-native-vector-icons/Entypo';
import Arrow from 'react-native-vector-icons/AntDesign';
import styles from './style';

class detailTrans extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Icon name= 'chevron-left' color='red' size={25}
                        onPress={() => this.props.navigation.navigate('listTrans')}/>
                    </TouchableOpacity>
                    <Text style={styles.textHeader}>
                        Detail Transaksi
                    </Text>
                </View>
                <ScrollView>
                {/* <View style={{flexDirection: 'row', height: 40, alignItems: 'center', paddingHorizontal: 16}}>
                    <View>
                        <Text style={{fontSize: 14,}}>
                            Kode Belanja - 27940
                        </Text>
                    </View>
                    <View style={{paddingLeft: 80}}>
                        <Text style={{fontSize: 14, color: '#737375'}}>
                            Status:
                        </Text>
                    </View>
                    <View style={{padding: 5}}>
                        <Text style={{fontSize: 14, color: '#737375'}}>
                            Dibatalkan
                        </Text>
                    </View>
                </View> */}

                <View style={styles.cardDate}>
                    <View style={styles.subCardCode}>
                        <View style={{flexDirection: 'row'}}>    
                            <View>
                                <Text style={styles.textCode}>
                                    Kode Belanja -
                                </Text>
                            </View>
                            <View style={styles.codeShop}>
                                <Text style={{fontSize: 14,}}>
                                    27940
                                </Text>
                            </View>
                        </View>
                        <View style={{paddingLeft: 47}}>
                            <Text style={styles.textStatus}>
                                Status:
                            </Text>
                        </View>
                        <View style={{padding: 5}}>
                            <Text style={styles.valueStatus}>
                                Dalam Proses
                            </Text>
                        </View>
                    </View>
                    <View style={styles.subCardDate}>
                        <View style={{flexDirection: 'column'}}>
                            <View style={{flexDirection: 'row', marginTop: -5}}>
                                <ShopBag name='shopping-bag' size={13} color='#737375'/>
                                <Text style={styles.textOrderDate}>Tanggal Order</Text>
                            </View>
                            <View>
                                <Text style={{fontSize: 13}}>16 Januari 2020</Text>
                            </View>
                        </View>
                        <View style={{paddingLeft: 23}}>
                            <Arrow name='arrowright' size={23} color= '#737375'/>
                        </View>
                        <View style={{paddingLeft: 33}}>
                            <View style={{flexDirection:'row'}}>
                                <IconHome name="home" size={14} color= '#737375'/>
                                <Text style={styles.textOrderDate}>Tanggal Pengantaran</Text>
                            </View>
                            <View>
                                <Text style={{fontSize: 13}}>17 Januari 2020</Text>
                            </View>
                        </View>
                    </View>
                </View>
                
                <View style={{flexDirection: "column", height: 150,  backgroundColor: 'white', elevation: 3, marginTop: 10,paddingHorizontal: 16}}>
                    <View style={{height: '50%',  borderBottomWidth: 1, borderColor: '#EFEAEA', justifyContent: 'center'}}>
                        <View style={{flexDirection:'row', paddingVertical: 5}}>
                            <ShopBag name="store" size={14} color= 'red'/>
                            <Text style={styles.valueNameMarket}>Pasar Perundungan</Text>
                        </View>
                        <View style={{flexDirection:'row', paddingVertical: 5}}>
                            <Icon name="map-marker" size={17} color= 'red' style={{paddingLeft:3}}/>
                            <Text style={styles.valueAddress}>aaa</Text>
                        </View>
                    </View>
                    <View style={{height: '50%',  justifyContent: "center"}}>
                        <Text style={{fontSize: 13, fontWeight: 'bold'}}>
                            Catatan Order
                        </Text>
                        <Text style={{fontSize: 13}}>
                            -
                        </Text>
                    </View>
                </View>

                <View style={{flexDirection: "column", height: 115,  backgroundColor: 'white', elevation: 3, marginTop: 10,paddingHorizontal: 16}}>
                    <View style={{height: '35%',  borderBottomWidth: 1, borderColor: '#EFEAEA', justifyContent: 'center'}}>
                        <Text style={{fontSize: 13, fontWeight: 'bold'}}>
                            Ringkasan Pesanan
                        </Text>
                    </View>
                    <View style={{height: '60%',  borderBottomWidth: 1, borderColor: '#EFEAEA', flexDirection: 'row'}}>
                        <View style={{paddingTop: 25, paddingLeft: 20}}>
                            <Text style={{fontSize: 17}}>
                                1x
                            </Text>
                        </View>
                        <View style={{flexDirection: 'column', paddingLeft: 20, paddingTop: 12}}>
                            <View>
                                <Text style={styles.nameItem}>Tempe Bungkus Daun</Text>
                            </View>
                            <View>
                                <Text style={styles.priceItem}>Rp 6.000/pcs</Text>
                            </View>
                        </View>
                        <View style={{paddingTop: 25, paddingLeft: 70}}>
                            <Text style={{fontSize: 17}}>
                                Rp 6.000
                            </Text>
                        </View>
                    </View>
                </View>

                </ScrollView>
            </View>
        )
    }
}

export default detailTrans;