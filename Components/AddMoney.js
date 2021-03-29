import React, { useState } from "react"
import { StyleSheet, View, Text, TextInput, TouchableHighlight, Alert } from 'react-native'
import { connect } from 'react-redux'


const AddMoney = (props) => {
    let text = ""
    const time = () => {
        const date = new Date()
        return `${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`
    }
    const addMoney = (state) => {
        props.dispatch({ type: 'ADD', value: parseInt(state) })
        props.dispatch({ type: 'DISP', value: parseInt(state) })
        props.dispatch({ type: 'HISTORY', value: { action: 'Ajout', montan: parseInt(state), time: time()}})
        props.navigation.navigate('Board')
    }
    console.log(props.historique)
    const confirmAlert = () => {
        Alert.alert(
            "Confirmation : ",
            "Vous êtes sur de vouloir ajouter ce montant ?",
            [
                {text: 'Annuler', onPress: () => {console.log('ajout anuler')}, style: 'cancel'},
                {text: 'Ajout', onPress: () => {addMoney(text)}}
            ],
            {cancelable: false},
        )
    }
    return (
        <View style={
            {
                flex: 1,
                backgroundColor: props.param.theme[0],
            }
        }>
            <View style={styles.input}>

                <TextInput 
                    keyboardType='numeric' 
                    placeholderTextColor='#fff' 
                    style={styles.textInput}  
                    placeholder='0' 
                    onChangeText={(inputText) => {text = inputText }}/>

                <TouchableHighlight 
                    onPress={confirmAlert} 
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

const styles = StyleSheet.create({
    contener: {
        flex: 1,
        backgroundColor: '#000',
    },
    input: {
        flex: 1,
        justifyContent: 'center',
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        
    },
    textInput: {
        color: '#fff', 
        borderWidth: 1, 
        borderColor: '#fff', 
        borderRadius: 15, 
        fontSize: 20, 
        padding:10 , 
        alignSelf: 'center', 
        width: '60%',
    },
    btnSubmit: {
        width: '30%', 
        height: 50, 
        marginTop: 20,  
        alignSelf: 'center', 
        backgroundColor: '#092136', 
        color: '#fff', 
        borderRadius: 10, 
        justifyContent: 'space-around'
    },
    show: {
        flex: 2,
        justifyContent: 'center',
    },
})

const mapStore = (state) => {
    return {
        totalMoney: state.totalMoney,
        param: state.param,
        historique: state.historique

    }
}

export default connect(mapStore)(AddMoney)
