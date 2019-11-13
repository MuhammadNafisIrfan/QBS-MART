import React, {Component} from 'react'
import {View, Text, FlatList, ScrollView, Image,TouchableOpacity} from 'react-native'

import DATA from '../../assets/item'

export default class List extends Component{

  constructor(props){
    super(props)

    this.state={
        data: DATA
    }
  }

  loop = () => {
      
    for(let i = 0; i < DATA.length; i++){
        console.log('name: ' + DATA[i].name)
       }
    }


    render(){

    this.loop

    return(
       <ScrollView>
           <FlatList
                data={DATA}
                renderItem={({ item }) => {
                    return(

                        <TouchableOpacity 
                            onPress={() => {
                                let id = item.id
                                let data = this.state.data

                                let temp = data.find(e => e.id === id)
                                console.log(temp)
                                
                                this.props.navigation.navigate('DetailProduk', { data: temp })
                            }}>
                        <View style={{display: 'flex', flexDirection: 'row', padding: 12, backgroundColor: 'white'}}>
                            <Image style={{height: 60, width: 60, marginRight: 18, borderRadius: 30}} source={item.avatar}/>
                        <View>
                            <Text style={{fontSize: 20}}>{item.name}</Text>
                            <Text style={{fontSize: 16, padding: 4}}>{item.company}</Text>
                        </View>
                        </View>
                       </TouchableOpacity>
                        
                    )
                }}
                />
       </ScrollView>

    )

        
    }
}