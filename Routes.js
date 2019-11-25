import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import {Button} from 'react-native'


import MainMenu from './Components/Mainmenu'
import minuman from './Components/Minuman'
import Makanan from './Components/Makanan'
import DetailProduk from './Components/Detailproduk'
import Detailminuman from './Components/Detailminuman'
import About from './Components/About'



const navigator = createStackNavigator({ 
    minuman: {
        screen: minuman,
        navigationOptions:{
            title: 'Minuman'

            }
        },
        About: {
            screen: About,
            navigationOptions:{
                title: 'Tentang Kami'
    
                }
            },
        Makanan: {
            screen: Makanan,
            navigationOptions:{
                title: 'Makanan'
                
                }
            },
            DetailProduk: {
                screen: DetailProduk,
                navigationOptions:{
                    title: 'Detail produk',
                    headerStyle: {
                        backgroundColor: '#ffe7ad',
                      }
        
                    }
                },
                Detailminuman: {
                    screen: Detailminuman,
                    navigationOptions:{
                        title: 'Detail minuman',
                        headerStyle: {
                            backgroundColor: '#ffe7ad',
                          }
            
                        }
                       
                    },
            
    MainMenu: {
        screen: MainMenu,
        navigationOptions:{
            title: 'QBS MART'
            
            // headerShown: false
        } 
    }  
},
{
    initialRouteName: 'MainMenu'
})

const Routes = createAppContainer(navigator)
export default Routes