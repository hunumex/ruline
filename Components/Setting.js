import React, { useState } from "react"
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'


const Setting = (props) => {

    const goShowParam = (page) => {
        props.navigation.navigate(page)
    }
    return (
        <View style={
            {
                flex:1,
                justifyContent: 'space-between',
                justifyContent: 'center',
                backgroundColor: props.param.theme[0],
            }
        }>
            <ScrollView style={styles.listParam}>

                <DetailItem
                    nameParam='Themes'
                    color={props.param.theme[1]}
                    onPress={() => {goShowParam('ThemeChange')}}
                    itemDesc={
                        <View style={
                            {
                                backgroundColor:props.param.theme[1],
                                width: 50,
                                height: 50,
                            }
                        }>
                            <View style={styles.theme}>
                                <View style={{flex: 1, backgroundColor: props.param.theme[0]}}></View>
                                <View style={{flex: 1, backgroundColor: props.param.theme[1]}}></View>
                                <View style={{flex: 1, backgroundColor: props.param.theme[2]}}></View>
                            </View>
                        </View>
                    }
                    />

                <DetailItem
                    nameParam='Nom de Compts'
                    color={props.param.theme[1]}
                    itemDesc={<Text style={styles.textItemDetail}>Utility</Text>}
                    onPress={() => {goShowParam('ComptNameChange')}}
                />
            </ScrollView>
            <View style={styles.about}>
                <Text style={{color: 'silver', alignSelf: 'flex-end'}}>Ruline </Text>
                <Text style={{color: 'silver', alignSelf: 'flex-end'}}>2020 - 2021 </Text>
            </View>
        </View>
    )
}

const DetailItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={
                {
                    backgroundColor:props.color,
                    flex:1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                    alignSelf: 'center',
                    borderLeftWidth: 1,
                    borderRightWidth: 1,
                    borderRadius: 6,
                    borderColor : 'white',
                    padding: 15,
                    marginTop: 20,
                }
            }>    
                <Text style={styles.textItem}>{props.nameParam}</Text>
                {props.itemDesc}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    contener: {
        flex:1,
        justifyContent: 'space-between',
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    listParam: {
        alignSelf: 'center', 
        width:'95%', 
        height: '95%', 
        padding: 10,
    },
    item: {
        backgroundColor:'#092136',
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignSelf: 'center',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderRadius: 6,
        borderColor : 'white',
        padding: 15,
        marginTop: 20,
    },
    textItem: {
        fontSize: 20,
        color: 'white',
    },
    textItemDetail: {
        fontSize: 15,
        color: 'white',
        alignSelf: 'center',
    },
    descriptionItem: {
        backgroundColor:'#092136',
        width: 50,
        height: 50,
    },
    theme: {
        flex: 1,
        borderRadius:50,
        borderColor: 'white',
        borderWidth: 2,
        backgroundColor: 'red',
        overflow: 'hidden',
    },
    about: {
        padding: 20,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderRadius: 6,
        borderColor: 'white',
        width: '95%',
        height: 150,
        marginBottom: 10,
        alignSelf: 'center',
    },
})

const mapStore = (state) => {
    return {
        param : state.param
    }
}

export default connect(mapStore)(Setting)