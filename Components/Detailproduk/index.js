import React, {Component} from 'react'
import {View, Text, Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

export default class Detailproduk extends Component{

  constructor(props){
    super(props)
  }
    render(){
        const { navigation } = this.props;

        let data = navigation.getParam('data')

    return(
        <ScrollView>
             <View>
            <View style={{display: 'flex', flexDirection: 'column', backgroundColor: '#ffe7ad'}}> 
                <Image style={{height: 300, width: 320, margin: 18,borderRadius: 40 }} source={data.avatar}/>
                <View style={{backgroundColor:'#b2fcff',borderRadius:40,borderWidth: 2, borderColor: 'black'}}>
                <Text style={{fontSize: 30,alignSelf: 'center',fontFamily: 'casual',margin: 2}}>{data.name}</Text>
                </View>
                <View style={{marginLeft: 8}}>
                <Text style={{fontSize: 16, marginTop: 14}}>Deskripsi Produk :</Text>
                <Text style={{fontSize: 16, marginTop: 10,fontFamily:'casual'}}>{data.detailProduk}</Text>
                <Text style={{fontSize: 16,marginTop: 40}}>Stok: {data.stok}</Text>
                </View>
                
            </View>
        </View>
        </ScrollView>
       
    )
        }
    }