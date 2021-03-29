import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

const ShowData = (props) => {
  return(
      <View style={styles.blockData}>

        <View style={styles.dataInfo}>

          <View style={{flex:1,justifyContent:"space-around",alignItems:'center',backgroundColor:props.comptNameColor}}>
            <Text style={{color:'white',fontSize:17,flex:1}}> {props.name} </Text>
          </View>

          <View style={{flex:2,justifyContent:'space-around',}}>
            <Text style={{color:'white',fontSize:15,}}> {props.percentage} </Text>
          </View>

        </View>

        <View style={
          {
            flex: 2,
            flexDirection:'row',
            backgroundColor: props.moneyColor,
            alignItems: 'center',
            justifyContent:'flex-end',
            marginLeft:10,
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderRadius: 6,
            borderColor: 'white',
        }
        }>
          <Text style={styles.moneyText}> {props.value} </Text>
          <Text style={{color:'white', fontSize:20, width:'auto'}}> {props.money} </Text>
        </View>

      </View>
  )
}

const styles = StyleSheet.create({
    blockData: {
        width:'95%',
        alignSelf: 'center',
        height: 80,
        marginTop: 5,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
    },
    dataInfo: {
        flex: 1,
    },
    moneyText: {
        fontSize: 30,
        color: 'white',
        letterSpacing: 4,
        width:'auto',
    },
})


export default ShowData