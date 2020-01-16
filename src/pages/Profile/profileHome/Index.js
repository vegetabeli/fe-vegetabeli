import React, { Component } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={{fontSize: 17, fontWeight: 'bold', alignSelf: 'center', paddingLeft: 16}}>
                        Profil
                    </Text>
                </View>
                <ScrollView>
                    <View style={{flexDirection: 'row', height: 90, elevation: 3, backgroundColor: 'white', marginTop: 5}}>
                        <View style={{marginLeft: 14, justifyContent: 'center'}}>
                            <Icon name= 'user-circle' size={55} color='#EE4F6F'/>
                        </View>
                        <View style={{alignSelf: 'center', marginLeft: 20}}>
                            <Text style={{fontSize:17, marginBottom: 6, fontWeight: 'bold'}}>Misaki Setyawan</Text>
                            <Text style={{fontSize:14}}>misakiyoung6310@gmail.com</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'column', height: 122, elevation: 3, backgroundColor:'white', marginTop: 4}}>
                        <View>
                            <Text style={{fontSize: 17, marginTop: 18, marginBottom: 10,  marginLeft: 14, fontWeight: 'bold'}}>Ikuti kami</Text>
                        </View>
                        <View style={{flexDirection: 'row', width: '100%', height: 44, paddingHorizontal: 14}}>
                            <TouchableOpacity style ={{flexDirection:'row',backgroundColor: '#3972D9', width:'100%', height: 44, borderRadius: 8, justifyContent: 'center'}}>
                                    <View style={{backgroundColor: 'white', height:30, width:30}}>
                                        <Image source={require('../../Images/facebook.png')} style={{ height: 30, width: 30}}/>
                                    </View>
                                    <Text style = {{color: 'white', fontSize: 20,}}>
                                        Follow us On Facebook
                                    </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flexDirection: 'column', backgroundColor: 'white', elevation: 3, marginTop: 5, paddingTop: 4, paddingHorizontal: 14}}>
                        <TouchableOpacity style={{height: 46, width: '100%'}}>
                            <View style={{flexDirection: 'row', height: 46, width: '100%', borderTopWidth: 1, borderTopColor: '#F2F2F2', justifyContent: 'space-between'}}>
                                <Text style={{fontSize: 17, alignSelf: 'center', color: '#88898B'}}>Syarat Penggunaan</Text>
                                <Icon name='chevron-right' color='#ACADAF' size={17} style={{alignSelf: 'center'}} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{height: 46, width: '100%'}}>
                            <View style={{flexDirection: 'row', height: 46, width: '100%', borderTopWidth: 1, borderTopColor: '#F2F2F2', justifyContent: 'space-between'}}>
                                <Text style={{fontSize: 17, alignSelf: 'center', color: '#88898B'}}>Kebijakan Privasi</Text>
                                <Icon name='chevron-right' color='#ACADAF' size={17} style={{alignSelf: 'center'}} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{height: 46, width: '100%'}}>
                            <View style={{flexDirection: 'row', height: 46, width: '100%', borderTopWidth: 1, borderTopColor: '#F2F2F2', justifyContent: 'space-between'}}>
                                <Text style={{fontSize: 17, alignSelf: 'center', color: '#88898B'}}>Tentang Kami</Text>
                                <Icon name='chevron-right' color='#ACADAF' size={17} style={{alignSelf: 'center'}} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{height: 46, width: '100%'}}>
                            <View style={{flexDirection: 'row', height: 46, width: '100%', borderTopWidth: 1, borderTopColor: '#F2F2F2', justifyContent: 'space-between'}}>
                                <Text style={{fontSize: 17, alignSelf: 'center', color: 'red'}}>Keluar</Text>
                                <Icon name='chevron-right' color='#ACADAF' size={17} style={{alignSelf: 'center'}} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', backgroundColor: 'white', height: 52, elevation: 3, justifyContent: 'flex-end', marginTop: 5}}>
                        <Text style={{fontSize: 15, color:'#88898B', alignSelf: 'center',  paddingRight: 16}}>
                            Vegetabeli v.1.0.0
                        </Text>
                    </View>   
                </ScrollView>
            </View>
        )
    }
};

export default Profile;