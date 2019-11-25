import React, {Component} from 'react'
import { StyleSheet, Text , View,Image} from 'react-native'
export default class Splash extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../icon.png.png')}style={{margin: 30, marginTop: 40, width:200,height: 120}}/>  
            <View style={styles.textcontainer} >
                <Text style={styles.title}>QBS DEVELOPER</Text>
            </View>            
            </View>
           
        
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex : 1,
        marginBottom: 30, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        position: 'absolute',
        marginTop: 0,
    },
    textcontainer: {
        position: "absolute",
        left: 0,
        right: 0,
        right: 0,
        bottom : 0,
        top: 560,
        fontWeight: 'bold',
        alignItems: 'center',
        
    }

})
