// import React, { Component } from 'react'
// import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, StatusBar, TextInput, SafeAreaView, Keyboard, TouchableOpacity, KeyboardAvoidingView, ImageBackground } from 'react-native'
// import LinearGradient from 'react-native-linear-gradient'


// export default class Login extends Component {
//     render() {
//         return (
//             <ImageBackground source={require('../../115.png')} style={{ width: '100%', height: '100%' }}>
//                 <SafeAreaView style={styles.container}>
//                     <StatusBar barStyle='light-content' />
//                     <KeyboardAvoidingView style={styles.container}>
//                         <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
//                             <View style={styles.logoContainer}>
//                                 <View style={styles.logoContainer}>
//                                     <Image style={styles.logo}
//                                         source={require('../../profile.png')}>
//                                     </Image>
//                                     <Text style={styles.title}>LOGIN</Text>
//                                 </View>

//                                 <View style={styles.infoContainer}>
//                                     <TextInput style={styles.input}
//                                         placeholder="Enter username or email"
//                                         placeholderTextColor='#000000'
//                                         keyboardType='email-address'
//                                         returnKeyType='next'
//                                         autoCorrect={false} />
//                                 </View>

//                                 <View style={styles.infoContainer2}>
//                                     <TextInput style={styles.input}
//                                         placeholder="Enter username or email"
//                                         placeholderTextColor='#000000'
//                                         keyboardType='email-address'
//                                         returnKeyType='next'
//                                         autoCorrect={false} />
//                                 </View>
//                             </View>
//                         </TouchableWithoutFeedback>
//                     </KeyboardAvoidingView>
//                 </SafeAreaView>
//             </ImageBackground>


//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: 'column'
//     },
//     logoContainer: {
//         alignItems: 'center',
//         marginTop: 50,
//         flex: 1
//     },
//     logo: {
//         width: 100,
//         height: 100
//     },
//     title: {

//         color: 'white',
//         fontSize: 20,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         marginTop: 5,
//         opacity: 0.9,
//         marginBottom: 5
//     },
//     infoContainer: {
//         position: 'absolute',
//         left: 0,
//         right: 0,
//         bottom: 0,
//         height: 300,
//         marginBottom: 60,
//         padding: 20,
//         margin: 8,
//         borderRadius: 8,
//     },
//     input: {
//         height: 50,
//         color: '#000000',
//         paddingHorizontal: 10,
//         borderBottomWidth: 4,
//         borderBottomColor: 'white',
//         backgroundColor: 'rgba(255,255,255,0.2)',

//     },
//     infoContainer2: {
//         position: 'absolute',
//         left: 0,
//         right: 0,
//         bottom: 0,
//         height: 240,
//         marginBottom: 60,
//         padding: 20,
//         margin: 8,
//         borderRadius: 8,
//     },
// })