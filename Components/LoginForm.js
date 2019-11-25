import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Image, SaveAreaVIew, ImageBackground, Animated, StatusBar, SafeAreaView } from 'react-native';
import { Item, Input, Form, Label, Button, Thumbnail, Text, Toast } from 'native-base';
import Icon from 'react-native-ionicons';

// class Imageloader extends Component {
//     state ={
//         opacity: new Animated.Value(0),
//     }

//     onLoad = () => {
//         Animated.timing(this.state.opacity, {
//             toValue :1,
//             duration:500,
//             useNativeDriver: true,
//         }).start();
//     }

//     render() {
//         return(
//             <Animated.Image
//             onLoad={this.onLoad}
//             {...this.props}
//             style={[
//                 {
//                     opacity: this.state.opacity,
//                     transform:[
//                         {
//                             scale: this.state.opacity.interpolate({
//                                 inputRange: [0.1],
//                                 outputRange: [0.85, 1],
//                             })
//                         }
//                     ]
//                 },
//                 this.props.style,
//             ]}
//             />
//         )
//     }
// }

// import Logo from '../profile.png';
export default class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state={
            username:'',
            password:'',
        }
    }

    login = () => {
        var authUsername = 'Admin'
        var authPassword = 'quadrant'
        var username = this.state.username
        var password = this.state.password

        if(username === authUsername && password === authPassword ){
            Toast('Login berhasil')
            
            this.props.navigation.navigate('Routes')
        } else{
            alert('data tidak valid silahkan coba lagi')
        }

    }

    render() {
        return (

            <ImageBackground source={require('../3333.jpg')} style={styles.bgImageStyle}>
                <SafeAreaView style={styles.container}>
                    <StatusBar barStyle='light-content' />
                    <View style={styles.containerStyle}>
                        <View style={styles.logostyle}>
                            <Thumbnail square large source={require('../profile.png')} />
                            <Text style={styles.textLogoStyle}>SIGN IN</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', marginTop: 16 }}>
                            <Form style={styles.FormLoginStyle}>
                                <View style={styles.loginImage} >
                                    <Image style={{ width: 22, height: 22, tintColor: 'white' }} source={require('../login.png')}></Image>
                                    <Image style={{ width: 22, height: 25, tintColor: 'white', marginTop: 44 }} source={require('../lock.png')}></Image>
                                </View>
                                <View style={styles.LabelStyle}>
                                    <Item floatingLabel>
                                        <Label onChangeText={ (value) => (this.setState({ username: value}) ) } >
                                            <Text style={styles.inputStyle}>Username</Text>
                                        </Label>
                                        <Input style={styles.inputStyle} />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label onChangeText={ (value) => (this.setState({password: value}) ) }>
                                            <Text style={styles.inputStyle}>Password</Text>
                                        </Label>
                                        <Input style={styles.inputStyle} secureTextEntry={true} />
                                    </Item>
                                </View>
                                <TouchableOpacity onPress={this.login}>
                                    <View style={styles.LoginButton}>
                                        <Text style={{ color: 'white', fontSize: 18 }}>SIGN IN</Text>
                                    </View>
                                </TouchableOpacity>
                            </Form>
                        </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>

        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'column'
    },
    bgImageStyle: {
        opacity: 10,
        flex: 1,
        resizeMode: 'cover',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    logostyle: {
        marginTop: 140,
        marginBottom: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textLogoStyle: {
        marginTop: 8,
        fontSize: 18,
        color: 'white'
    },
    FormLoginStyle: {
        marginTop: -30,
        paddingLeft: 10,
        paddingRight: 30
    },
    inputStyle: {
        color: 'white',
        marginBottom: 6,
        fontSize: 14,
    },
    itemStyle: {
        padding: 10,
        marginTop: 5,
        height: 2,
        width: 100
    },
    loginImage: {

        marginTop: 46,
    },
    LabelStyle: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        marginLeft: 32,
        marginRight: 30
    },
    LoginButton: {        
        backgroundColor: '#D665C2',
        margin: 6,
        padding: 12,
        alignItems: 'center',
        borderRadius: 14,
        marginTop: 80,
        marginLeft: 20
    }

})


