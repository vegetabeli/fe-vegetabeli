import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import ItemImage from '../../../assets/image/Tempe.png'
import noTransaction from '../../../assets/image/noTransaction.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconStore from 'react-native-vector-icons/FontAwesome5';
import IconInfo from 'react-native-vector-icons/Foundation';
import styles from './style';

class ShoppingCart extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Icon name= 'chevron-left' color='#FF5063' size={25}/>
                    </TouchableOpacity>
                    <Text style={styles.textHeader}>
                        Keranjang Belanja
                    </Text>
                </View>

                {/* tidak ada transaksi */}
                {/* <View style={styles.content}>
                    <Image source={noTransaction} style={styles.img}/>
                    <Text style={styles.textTop}>Keranjangmu masih kosong nih :(</Text>
                    <Text style={styles.textBot}>Cari produk kebutuhanmu hari ini,</Text>
                    <Text style={styles.textBot}>yuk belanja sekarang!</Text>
                </View>
                <View style={{paddingTop: 60}}>
                    <View style={{flexDirection: 'row', width: '100%', height: 40, paddingHorizontal: 14}}>
                        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: '#FF5063', width: '100%', borderRadius: 7}}
                        onPress={() => this.props.navigation.navigate('Shop')}>
                            <Text style={{fontSize: 20, color: 'white', alignSelf: 'center'}}>
                                BELANJA SEKARANG
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View> */}

                {/*ada transaksi */}
                <View style={{flexDirection: "column", height: 20, elevation: 3, marginTop: 3}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 16, justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{fontSize: 14,}}>
                                Total Produk:
                            </Text>
                            <Text style={{fontSize: 14, paddingLeft: 5}}>
                                1
                            </Text>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Text style={{fontSize: 14, color: '#FF5063'}}>
                                    Tambah lagi
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <ScrollView>
                <View style={{flexDirection: "column", height: 100,}}>
                    <View style={{flexDirection: 'row', height: '95%', borderBottomWidth: 1, borderColor: '#DBDBDB'}}>
                        <View style={{padding: 16}}>
                            <Image source={ItemImage} style={{width:60, height: 60}}/>
                        </View>
                        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                            <Text style={{fontSize: 16, paddingVertical: 3}}>
                                Tempe Bungkus Daun
                            </Text>
                            <View style={{flexDirection: 'row', paddingVertical: 3}}>
                                <Text style={{fontSize: 15, color: '#FF5063'}}>
                                    Rp 6.000 
                                </Text>
                                <Text style={{paddingLeft: 3,fontSize: 15, color: '#737375'}}>
                                    /pcs
                                </Text>
                            </View>
                        </View>
                        <View style={{padding: 19, flexDirection: 'row', paddingTop: 43}}>
                            <TouchableOpacity style={styles.minButton}>
                                <Text style={styles.textEdit}>
                                    -
                                </Text>
                            </TouchableOpacity>
                            <Text style={{fontWeight: 'bold', fontSize: 17, paddingHorizontal: 8}}>
                                1
                            </Text>
                            <TouchableOpacity style={styles.plusButton}>
                                <Text style={styles.textEdit}>
                                    +
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                </ScrollView>

                <View style={{flexDirection: 'column', height: 145, backgroundColor: 'white', paddingHorizontal: 14}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', height: '45%', borderBottomWidth: 1, borderColor: '#DBDBDB'}}>
                        <View style={{flexDirection: 'column', justifyContent: 'center',}}>
                            <View>
                                <Text style={{fontSize: 17, paddingBottom:2}}>
                                    Total Pembayaran
                                </Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <IconInfo name='info' size={22}/>
                                <Text style={{fontSize: 13, paddingLeft: 5}}>
                                    belum termasuk biaya antar
                                </Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{fontSize: 17, paddingTop: 7}}>
                                Rp 6.000
                            </Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'column', height: '65%', paddingTop: 3}}>
                        <View style={{flexDirection: 'row',}}>
                            <View>
                                <Text style={{fontSize: 15}}>
                                    Kamu belanja di:
                                </Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingLeft: 5}}>
                                <IconStore name='store' size={15} color={'skyblue'}/>
                                <Text style={{fontSize: 15, fontWeight: 'bold', paddingLeft: 5}}>
                                    Pasar Karangayu
                                </Text>
                            </View>
                        </View>
                        <View  style={{flexDirection: 'row', width: '100%', height: 45, marginTop: 5}}>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Payment') }} style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: '#FF5063', width: '100%', borderRadius: 7}}>
                                <Text style={{fontSize: 20, color: 'white', alignSelf: 'center'}}>
                                    Lanjutkan
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </View>
        )
    }
}

export default ShoppingCart;