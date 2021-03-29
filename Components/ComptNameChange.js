import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'


const ComptNameChange = (props) => {
    let text1 = props.param.comptName[0]
    let text2 = props.param.comptName[1]
    let text3 = props.param.comptName[2]
    const changTheme = () => {
        props.dispatch({ type: 'COMPTNAME', value: [text1, text2, text3] })
    }
    return(
        <View style={{flex:1,backgroundColor: props.param.theme[0]}}>
        <View style={{
            width:'95%',
            height: 'auto',
            padding: 10,
            margin:10,
            alignSelf: 'center',
        }}>

        <TextInput 
            placeholderTextColor='#fff' 
            style={styles.textInput}  
            placeholder={props.param.comptName[0]} 
            onChangeText={(inputText) => {text1 = inputText}}/>
        <TextInput 
            placeholderTextColor='#fff' 
            style={styles.textInput}  
            placeholder={props.param.comptName[1]} 
            onChangeText={(inputText) => {text2 = inputText}}/>
        <TextInput 
            placeholderTextColor='#fff' 
            style={styles.textInput}  
            placeholder={props.param.comptName[2]} 
            onChangeText={(inputText) => {text3 = inputText}}/>

        <TouchableHighlight 
            onPress={changTheme} 
            style={
                    {
                        width: '30%', 
                        height: 50, 
                        marginTop: 20,  
                        alignSelf: 'center', 
                        backgroundColor: props.param.theme[1], 
                        color: '#fff', 
                        borderRadius: 10, 
                        justifyContent: 'space-around'
                    }
                    }>
                    <Text style={{color: '#fff', alignSelf: 'center', fontSize: 20, }}>Ajouter</Text>
                </TouchableHighlight>

        </View>
    </View>
)
}

const mapStore = (state) => {
    return {
        param: state.param
    }
}

const styles = StyleSheet.create({
    textInput: {
        color: '#fff', 
        borderWidth: 1, 
        borderColor: '#fff', 
        borderRadius: 15, 
        fontSize: 20, 
        padding:10 , 
        margin: 10,
        alignSelf: 'center', 
        width: '60%',
    },
})

export default connect(mapStore)(ComptNameChange)
