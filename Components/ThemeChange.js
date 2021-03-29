import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import { connect } from 'react-redux'
import colorData from '../Data/colorData'

const Color = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
        <View style={{
            flex: 1,
            flexDirection:'row',
            width:'100%',
            height:50,
            alignSelf: 'center',
            borderColor: 'white',
            borderWidth: 1,
            borderRadius: 30,
            margin: 5,
            overflow: 'hidden',
        }}>
            <View style={{flex:1, backgroundColor: props.col0}}></View>
            <View style={{flex:1, backgroundColor: props.col1}}></View>
            <View style={{flex:1, backgroundColor: props.col2}}></View>
        </View>
        </TouchableOpacity>
    )
}



const ThemeChange = (props) => {

    const changTheme = (value) => {
        props.dispatch({ type: 'THEME', value: value })
    }
    return(
        <View style={{flex:1,backgroundColor: props.param.theme[0]}}>
            <View style={{
                width:'95%',
                margin:10,
                alignSelf: 'center',
            }}>
                <FlatList 
                    data={colorData}
                    keyExtractor={(item) => item[0]}
                    extraData={props.param.theme}
                    renderItem={(item) => <Color  onPress={() => changTheme(item.item)} col0={item.item[0]} col1={item.item[1]} col2={item.item[2]}/>}
                />
            </View>
        </View>
    )
}
const mapStore = (state) => {
    return {
        param: state.param
    }
}

export default connect(mapStore)(ThemeChange)