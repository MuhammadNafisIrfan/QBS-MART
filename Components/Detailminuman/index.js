import React, {Component} from 'react'
import {View, Text, Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

export default class Detailminuman extends Component{

  constructor(props){
    super(props)
  }



    render(){
        const { navigation } = this.props;

        let data = navigation.getParam('data')
 
    return(
        <ScrollView>
            <View>
            <View style={{display: 'flex', flexDirection: 'column', backgroundColor: '#ffe7ad', justifyContent:'center'}}>
                <Image style={{height: 300, width: 340,borderRadius: 30 , margin: 10, borderWidth: 2, borderColor: 'black'}} source={data.img}/>
                <View style={{backgroundColor:'#94ceca',marginTop: 18, borderRadius: 18, borderWidth: 2, borderColor: 'black'}}>
                <Text style={{fontSize: 30,fontFamily: 'casual',alignSelf: 'center'}}>{data.name}</Text>
                </View>
                <View style={{marginLeft:4}}>
             
                <Text style={{fontSize: 16, marginTop: 12}}>Deskripsi Produk :</Text>
                <Text style={{fontSize: 16,marginTop: 4,fontFamily: 'casual'}}>{data.desc}</Text>
                <Text style={{fontSize: 20, marginTop:100}}>Stok: {data.barang}</Text>
            </View>
                </View>
                
        </View>
        </ScrollView>
        
    

    )

        }
    }