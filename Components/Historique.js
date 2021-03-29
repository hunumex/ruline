import React from 'react'
import { View, Text,FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

const HistoriqueItem = (props) => {
    return (
      <View style={
        {
         flex:1,      
         width: '100%',
         height: 100,
         margin: 10,
         padding: 2,
         backgroundColor: props.colorItemsHistorique,
         borderLeftWidth: 1,
         borderRadius: 6,
         borderColor: 'white',
         alignSelf: 'center'
       }
      }>
            <View style={{width:'95%', margin: 2, alignSelf: 'center', flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
            <Text style={{
                color: 'white',
                fontSize: 20,
            }}>{props.action}</Text>
            <Text style={{
                color: 'white',
                fontSize: 15,
            }}>{props.time}</Text>
            </View>
            <View style={{width:'95%', margin: 5, alignSelf: 'center', flex: 1, justifyContent: 'center',}}>
            <Text style={{
                color: 'white',
                fontSize: 25,
            }}>{props.montans} fc</Text>
            </View>
        </View>
    )
  }

const Historique = (props) => {
    return (
        <View style={{backgroundColor: props.param.theme[0], flex: 1}}>
            <View style={styles.container}>
                <View style={{padding: 10, borderWidth: 1, borderColor: 'white', margin: 10, borderRadius: 6, width: '92%', alignSelf: 'center'}}><Text style={{color: 'white', fontWeight: 'bold'}}>historique</Text></View>
                <View style={styles.historique}>
                <FlatList
                data={props.historique.historique} 
                extraData={props.historique}
                keyExtractor={(item) => item.id}
                renderItem={(item) => <HistoriqueItem action={item.item.action} time={item.item.time} montans={item.item.montan} colorItemsHistorique={props.param.theme[1]}/>}
                />
                </View>
                
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'95%',
        height:'auto',
        alignSelf: 'center',
        margin: 5,
        padding:10,
    },
    historique: {
        flex: 1,
        width: '95%',
        height: 'auto',
        padding: 15,
        margin: 5,
        alignSelf: 'center',
    },
})

const mapStore = (state) => {
    return {
        param: state.param,
        historique: state.historique
    }
}

export default connect(mapStore)(Historique)