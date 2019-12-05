import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

export default class Mainmenu extends Component {

    Minuman = () => {

    }


    render() {
        return (
           
                <View style={{ flex: 1, backgroundColor: 'white' }}>

                    <View  style={{flexDirection: 'column'  }}>

                    <Text style={{ fontWeight: 'bold', marginLeft: 30, fontSize: 20, alignSelf: 'flex-start', marginTop: 10, fontFamily: 'casual' }}>CATEGORY :</Text>

                    </View>
                   
               


                <View style={{ flex: 8, flexDirection: 'row'  }}>
                
                <View style={{flexDirection: 'column'  }}>

                <View style={{ backgroundColor: '#c299fc', marginLeft: 20, height: 150, width: 150, borderRadius: 4, marginTop: 10 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('minuman')}>
                            <Image source={require('../../assets/drnk.png')} style={{ opacity: 0.5, width: 100, height: 100, borderRadius: 60, }}></Image>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, marginLeft: 50, marginTop: 20, fontFamily: 'casual' }}>Minuman</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ backgroundColor: '#f9b282', marginLeft: 20, height: 150, width: 150, borderRadius: 4, marginTop: 10 }}>
                        <TouchableOpacity>
                            <Image source={require('../../assets/cobaaja.png')} style={{ opacity: 0.5, margin: 6, width: 100, height: 100, marginLeft: 12 }}></Image>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, marginLeft: 50, marginTop: 8, fontFamily: 'casual' }}>Calculator</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: '#4b8e8d', marginLeft: 20, height: 150, width: 150, borderRadius: 4, marginTop: 10 }}>
                        <TouchableOpacity>
                            
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, marginLeft: 16, marginTop: 65, fontFamily: 'casual' }}>Coming Soon</Text>
                        </TouchableOpacity>
                    </View>
                </View >

                <View style={{flexDirection: 'column'  }}>
                <View style={{ backgroundColor: 'lightblue', marginLeft: 10, height: 150, width: 150, borderRadius: 4, marginTop: 10 }}>
                        <View>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Makanan')}>
                                <Image source={require('../../assets/ssss.png')} style={{ opacity: 0.5, margin: 6, width: 100, height: 100, marginLeft: 12 }}></Image>
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, marginLeft: 80, marginTop: 8, fontFamily: 'casual' }}>Snack</Text>
                            </TouchableOpacity>
                        </View>
                    </View> 

                    <View style={{ backgroundColor: '#6807f9', marginLeft: 10, height: 150, width: 150, borderRadius: 4, marginTop: 10 }}>
                        <View>
                            <TouchableOpacity>
                                <Image source={require('../../assets/plus.png')} style={{ opacity: 0.5, margin: 6, width: 100, height: 100, marginLeft: 12 }}></Image>
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, marginLeft: 10, marginTop: 8, fontFamily: 'casual' }}>Tambah Barang</Text>
                            </TouchableOpacity>
                        </View>
                    </View> 

                    <View style={{ backgroundColor: '#ffd739', marginLeft: 10, height: 150, width: 150, borderRadius: 4, marginTop: 10 }}>
                        <View>
                            <TouchableOpacity>
                              
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, marginLeft: 16, marginTop: 65, fontFamily: 'casual' }}>Coming Soon</Text>
                            </TouchableOpacity>
                        </View>
                    </View> 
                </View>
                   
                </View>
                <View  style={{ flex:1,  backgroundColor: '#fffffff' }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('About')}>
                    <Text style={{ fontSize: 18, alignSelf: 'center', marginTop: 30 , opacity: 0.5 }}>QBS DEVELOPER</Text>
                </TouchableOpacity>
                </View>
                
            </View>

        )
    }
}