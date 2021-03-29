import {createStackNavigator} from '@react-navigation/stack'
import {createAppContainer} from '@react-navigation/native'
import Board from '../Components/Board'
import AddMoney from '../Components/AddMoney'
import RemoveMoney from '../Components/RemoveMoney'
import Setting from '../Components/Setting'

const MoveStackNavigator = createStackNavigator({
    Board: {
        screen: Board,
        navigationOptions: {
            title: 'Gemos',
        }
    },
    AddMoney: {
        screen: AddMoney,
        navigationOptions: {
            title: 'Ajout Argent'
        }
    }, 
    RemoveMoney: {
        screen: RemoveMoney,
        navigationOptions: {
            title: 'retrais Argent'
        }
    },
    Setting: {
        screen: Setting,
        navigationOptions: {
            title: 'paramaitre'
        }
    }
})

export default createAppContainer(MoveStackNavigator)