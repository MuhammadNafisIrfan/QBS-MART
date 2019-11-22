import React, {Component} from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'

export default class Mainmenu extends Component{

Minuman = () =>{
    
}


    render(){
        return(
            <View style={{flex:1,backgroundColor:'#ffafb0'}}>
                 <View style={{backgroundColor: 'white', marginTop: 60, borderRadius: 100}}>
                <Text style={{fontSize: 30,alignSelf: 'center', marginTop: 50,fontFamily:'casual'}}>MENU CATEGORY</Text>
                
           
                <View style={{flexDirection: 'row' ,fontColor:'white'}}>

                <TouchableOpacity onPress={ () => this.props.navigation.navigate('minuman')}>
                <Image source={require('../../assets/iconminuman.png')}style={{margin: 30,marginTop: 50 ,width:120,height: 120, borderRadius: 60,}}></Image>
                <Text style={{fontSize: 20,marginLeft: 50,marginBottom: 40, fontFamily: 'casual'}}>Minuman</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => this.props.navigation.navigate('Makanan')}>
                <Image source={require('../../assets/download.png')}style={{margin: 30 ,alignSelf:'center',marginTop: 50 ,width:120,height: 120,backgroundColor: 'white', borderRadius: 60}}></Image>
                <Text style={{fontSize: 20,marginLeft: 46,marginBottom: 40, fontFamily: 'casual'}}>Makanan</Text>
                </TouchableOpacity>
               
                </View>
            </View>

            <TouchableOpacity onPress={ () => this.props.navigation.navigate('About')}>
                <Text style={{fontSize: 18, alignSelf: 'center', marginTop: 100, opacity: 0.5}}>QBS DEVELOPER</Text>
                </TouchableOpacity>         
            </View>
             
        )
    }
}