import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Mainmenu from './Components/Mainmenu'
import minuman from './Components/Minuman'
import Makanan from './Components/Makanan'
import DetailProduk from './Components/Detailproduk'
import Detailminuman from './Components/Detailminuman'
import About from './Components/About'
import LoginForm from './Components/LoginForm'
import Splash from './Components/Splash'




const navigator = createStackNavigator({
    LoginForm: {
        screen: LoginForm,
        navigationOptions: {
            title: '',
            headerShown: false
        }
    },
    Splash: {
        screen: Splash,
        navigationOptions: {
            title: '',
            headerShown: false
        }
    },
    minuman: {
        screen: minuman,
        navigationOptions: {
            title: 'Minuman'

        }
    },
    About: {
        screen: About,
        navigationOptions: {
            title: 'Tentang Kami'

        }
    },
    Makanan: {
        screen: Makanan,
        navigationOptions: {
            title: 'Makanan'

        }
    },
    DetailProduk: {
        screen: DetailProduk,
        navigationOptions: {
            title: 'Detail produk',
            headerStyle: {
                backgroundColor: '#ffe7ad',
            }

        }
    },
    Detailminuman: {
        screen: Detailminuman,
        navigationOptions: {
            title: 'Detail minuman',
            headerStyle: {
                backgroundColor: '#ffe7ad',
            }

        }

    },

    Mainmenu: {
        screen: Mainmenu,
        navigationOptions: {
            title: 'QBS MART',
            // headerShown: false
        }
    }
},
    {
        initialRouteName: 'Mainmenu'
    })

const Routes = createAppContainer(navigator)
export default Routes