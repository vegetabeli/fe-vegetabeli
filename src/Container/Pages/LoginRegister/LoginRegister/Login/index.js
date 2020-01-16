import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput, Picker } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles'

class Login extends Component {
  state = {
    role: ''
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
            <Icon name="chevron-left" size={25} color="#F15B5D" />
          </TouchableOpacity>
          <View style={styles.navbarTextView}>
            <Text style={styles.navbarText}>Masuk Lewat Email</Text>
          </View>
        </View>
        <View style={styles.homeIconContainer}>
          <View style={styles.homeTopIconView}>
            <View style={styles.homeIcon}>
              <Icon style={styles.homeIconLogo} name="sign-in" size={40} color="white" />
            </View>
            <Text style={styles.homeIconText}>Masuk Lewat Email</Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputView1}>
            <View style={styles.inputView2}>
              <Text style={styles.inputText}>Email:</Text>
              <TextInput style={styles.inputTextInput} placeholder="Masukkan Email" />
              <Icon name="envelope" color="gray" size={21}
                style={styles.inputLogoEmail} />
            </View>
          </View>
          <View style={styles.inputPassword}>
            <View style={styles.inputView2}>
              <Text style={styles.inputText}>Password:</Text>
              <TextInput style={styles.inputTextInput} placeholder="Masukkan Password" />
              <Icon name="lock" color="gray" size={25}
                style={styles.inputPasswordIcon} />
            </View>
          </View>

          <View style={styles.questionTextContainer}>
            <View style={styles.questionTextView}>
              <View>
                <View style={styles.forgotView}>
                  <Text>Belum terdaftar? </Text>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                    <Text style={styles.questionTextColor}>Daftar</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity>
                    <Text style={styles.forgotText}>Lupa Password?</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View>
              <Picker
                selectedValue={this.state.role}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ role: itemValue })
                }>
                <Picker.Item label="Buyer" value="buyer" />
                <Picker.Item label="Seller" value="seller" />
              </Picker>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity>
              <View style={styles.buttonRegister}>
                <Text style={styles.buttonRegisterText}>Masuk</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.buttonCancelContainer}>
              <Text onPress={() => this.props.navigation.navigate('Register')}
                style={styles.buttonCancelText}>Batalkan</Text>
            </View>
          </View>
          <View style={styles.conditionView}>
            <Text style={styles.conditionText}>Dengan masuk dan mendaftar,Anda menyetujui
            <Text style={styles.conditionText2}> Syarat Penggunaan</Text> dan <Text style={styles.conditionText2}>
                Kebijakan Privasi
            </Text>
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

export default Login