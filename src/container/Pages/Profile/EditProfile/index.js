import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconUser from 'react-native-vector-icons/FontAwesome';
import styles from './style';

class editProfile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Icon name= 'chevron-left' color='#FF5063' size={25} 
                        onPress={() => this.props.navigation.navigate('Profile')}/>
                        
                    </TouchableOpacity>
                    <Text style={styles.textHeader}>
                        Edit Profil
                    </Text>
                </View>
                <View style={{borderBottomWidth: 1, paddingBottom: 20, borderColor: '#E3E3E3'}}>
                    <View style={{alignItems: 'center', paddingTop: 25}}>
                        <IconUser name='user-circle' size={70} color='#EE4F6F'/>
                    </View>
                    <View style={styles.editProfilButton}>
                        <TouchableOpacity style={styles.touchableEdit}>
                            <Text style={styles.textEdit}>
                                Edit Foto
                            </Text>
                        </TouchableOpacity>
                </View>
                </View>
                <View  style={{alignContent: 'center', paddingHorizontal: 40}}>
                    <Input
                        inputContainerStyle={{height: 30}}
                        containerStyle={{marginBottom: 15, marginTop: 20}}
                        labelStyle={{
                        fontSize: 12,
                        }}
                        label="Nama"
                        inputStyle={{fontSize: 12}}
                    />
                    <Input
                        inputContainerStyle={{height: 30}}
                        containerStyle={{marginBottom: 15, marginTop: 3}}
                        labelStyle={{
                        fontSize: 12,
                        }}
                        label="No. Telepon"
                        inputStyle={{fontSize: 12}}
                    />
                    <Input
                        inputContainerStyle={{height: 30}}
                        containerStyle={{marginBottom: 15, marginTop: 3}}
                        labelStyle={{
                        fontSize: 12,
                        }}
                        label="E-mail"
                        inputStyle={{fontSize: 12}}
                    />
                </View>
                <View style={styles.editButton}>
                    <TouchableOpacity style={styles.touchEdit} 
                     onPress={() => this.props.navigation.navigate('Profile')}>
                        <Text style={styles.textEditProfile}>
                            Edit
                        </Text>
                    </TouchableOpacity>
                </View>


            </View>
        )
    }
}

export default editProfile;