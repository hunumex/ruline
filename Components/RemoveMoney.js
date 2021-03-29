import React, { useState } from "react"
import { StyleSheet, View, Text, TouchableHighlight, TextInput, Alert, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

const Tag = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={props.style}>
            <Text style={styles.tagText} > {props.name} </Text>
        </TouchableOpacity>
    )
}

const RemoveMoney = (props) => {
    let text = ''
    const [tagFocus, setTagFocus] = useState('DEFAULT')
    const compt = ['Utility', 'Saving', 'Diver']

    const time = () => {
        const date = new Date()
        return `${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`
    }

    const remove = (state, montans) => {
        props.dispatch({type: state, value: montans, })
        props.dispatch({ type: 'HISTORY', value: { action: 'Retrais', montan: montans, time: time()}})
        props.navigation.navigate('Board')
    }

    const confirmAlert = () => {
        Alert.alert(
            "confirmation : ",
            "Voulez-vous vraiment faire ce retrait ? ",
            [
                {text: 'Annuler', onPress: () => {console.log('retrais anuler')}, style: 'cancel'},
                {text: 'retrais', onPress: () => {tagFocus === 'DEFAULT' ? alert("Veillez sélectionné un compt !") : remove(tagFocus, text)}}
            ],
            {cancelable: false},
        )
    }

    return (
        <View style={
            {
                flex:1,
                backgroundColor: props.param.theme[0],
            }
        }>
           <View style={styles.input}>

                <View style={styles.selectCompt}>
                    <Tag name='Utility' style={tagFocus === 'UTILITY' ? styles.tag2 : styles.tag} onPress={() => {setTagFocus('UTILITY')}}/>
                    <Tag name='Saving' style={tagFocus === 'SAVING' ? styles.tag2 : styles.tag} onPress={() => {setTagFocus('SAVING')}}/>
                    <Tag name='Diver' style={tagFocus === 'DIVER' ? styles.tag2 : styles.tag} onPress={() => {setTagFocus('DIVER')}}/>
                </View>

                <TextInput 
                    keyboardType='numeric' 
                    placeholderTextColor='#fff' 
                    style={styles.textInput}  
                    placeholder='0' 
                    onChangeText={(inputText) => {text = inputText}}/>

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
                            justifyContent: 'space-around',
                        }
                    }>

                        <Text style={{color: '#fff', alignSelf: 'center', fontSize: 20, }}>Retrait</Text>

                </TouchableHighlight>

                <View style={styles.show}>
                    <View style={styles.board}>
                        <Text style={styles.textBoard}> Compt : {compt[tagFocus]} </Text>
                    </View>
                </View>
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    tag: {
        width: 70, 
        height: '50%', 
        alignSelf: 'center', 
        borderColor: '#fff', 
        borderWidth: 1, 
        borderRadius: 30, 
        justifyContent: 'center',
    },
    tag2: {
        backgroundColor: 'silver',
        width: 70, 
        height: '50%', 
        alignSelf: 'center', 
        borderColor: '#fff', 
        borderWidth: 1, 
        borderRadius: 30, 
        justifyContent: 'center',
    },
    tagText: {
        alignSelf: 'center', 
        color: '#fff', 
        fontSize: 15,
    },
    contener: {
        flex:1,
        backgroundColor: '#000',
    },
    input: {
        flex: 1,
        justifyContent: 'center',
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        
    },
    selectCompt: {
        flex:1,
        flexDirection: 'row',
        borderBottomColor: '#fff', 
        borderBottomWidth: 1, 
        alignSelf: 'center', 
        width: '95%', 
        height: 60, 
        marginBottom: 20, 
        padding: 5, 
        justifyContent: 'space-around',
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
        justifyContent: 'space-around',
    },
    show: {
        flex:1,
        justifyContent: 'center',
    },
    board: {
        width: '70%',
        height: '70%',
        alignSelf: 'center',
        padding: 10,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 20,
    },
    textBoard: {
        color: 'white',
        fontSize: 18,
        alignSelf: 'center',
        padding: 5,
    }
})

const mapStore = (state) => {
    return {
        totalMoney: state.monyReducer.totalMoney,
        param: state.param
    }
}

export default connect(mapStore)(RemoveMoney)
