import React, {Component} from 'react'
import {View, Text, FlatList, ScrollView, Image, TouchableOpacity} from 'react-native'

import ABOUT from '../../assets/about'

export default class About extends Component{

    constructor(props){
        super(props)
    }

    loop = () => {

        for(let i = 0; i < ABOUT.length; i++){
            console.log('nama: ' + ABOUT[i].name)
            console.log('jobs: ' + ABOUT[i].jobs)
        
        }

    }

  render() {

    this.loop()

    return(
        
        <ScrollView>
            <FlatList 
                data={ABOUT}
                renderItem={({ item }) => { 
                    return (
                        <View style={{display: 'flex', flexDirection: 'row', padding: 12, borderWidth: 2, borderRadius: 8, margin: 5, borderColor: 'red'}}>
                            <Image style={{height: 80, width: 80, marginRight: 18, borderRadius: 40}} source={item.avatar}/>
                            <View>
                                <Text style={{fontSize: 20, fontFamily: 'serif'}}>{ item.name }</Text>
                                <Text style={{fontSize: 18, fontStyle: 'italic'}}>{ item.jobs }</Text>
                                <Text style={{fontSize: 18, fontStyle: 'italic', fontWeight: 'bold'}}>{ item.team }</Text>
                                <Text style={{fontSize: 18, fontWeight: 'bold', fontFamily: 'monospace'}}>Rating: { item.rating }</Text>
                            </View>
                        
                        </View>
                    )
                }}
                
            />

        </ScrollView>
        
    )
    
  }
  
}