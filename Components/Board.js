import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View, ScrollView } from 'react-native';
import ShowData from './ShowData'
import Tag from './Tag'
import { connect } from 'react-redux'

//data for app

const Board = (props) => {

  const [state, setState] = useState(false)
  const toggle = () => { 
    setState(previousState => !previousState) 
  }

    return (
        <View style={
          {
            flex:1,
            backgroundColor: props.param.theme[0],
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>

          <View style={{ 
            flex: 1,
            flexDirection:'row',
            width: '100%',
            backgroundColor: props.param.theme[1],
            alignContent:'center',
            borderColor: 'red',
          }}>
            <Tag  icon={require('../Medias/i5-50.png')} onPress={() => {props.navigation.navigate('AddMoney')}} />
            <Tag  icon={require('../Medias/i6-50.png')} onPress={() => {props.navigation.navigate('RemoveMoney')}} />
            <Tag  icon={require('../Medias/i4-50.png')} onPress={() => {props.navigation.navigate('Setting')}} />
            <Tag  icon={require('../Medias/i7-50.png')} onPress={() => {props.navigation.navigate('Historique')}} />
          </View>

          <View style={styles.block2}> 
            <ScrollView>
              <View style={styles.changer}>
      
              <View style={{justifyContent:'space-around',alignSelf:'center',flexDirection:'row', width:100, height:30, margin:10}}>
                <Text style={{alignSelf:'center', color:'white', fontSize:18}}>fc</Text>
                <Switch 
                style={{alignSelf:'center'}}
                trackColor={{false:props.param.theme[1], true:props.param.theme[1]}}
                thumbColor={state ? "#fff" : "#fff"}
                onValueChange={toggle}
                value={state}
                />
                <Text style={{alignSelf:'center', color:'white', fontSize:18}}>$</Text>
              </View>
      
            </View>
              <View style={styles.data}>

              <View style={{padding: 10, borderWidth: 1, borderColor: 'white', margin: 10, borderRadius: 6, width: '92%', alignSelf: 'center'}}><Text style={{color: 'white', fontWeight: 'bold'}}>Compts</Text></View>

                <ShowData comptNameColor={props.param.theme[2]} moneyColor={props.param.theme[1]} name='Total' value={state ? ((props.utility+props.saving+props.diver)/2000).toFixed(2) : (props.utility+props.saving+props.diver).toFixed(2)} money={state ? '$':'fc'}/>
                <View style={{width: '92%',height:40, borderColor: 'white', borderTopWidth: 1, alignSelf: 'center'}}></View>
                <ShowData comptNameColor={props.param.theme[2]} moneyColor={props.param.theme[1]} name={props.param.comptName[0]} percentage={props.param.pourcentage[0]+'%'} value={state ? (props.utility/2000).toFixed(2) : (props.utility.toFixed(2))} money={state ? '$':'fc'}/>
                <ShowData comptNameColor={props.param.theme[2]} moneyColor={props.param.theme[1]} name={props.param.comptName[1]} percentage={props.param.pourcentage[1]+'%'} value={state ? (props.saving/2000).toFixed(2) : (props.saving).toFixed(2)} money={state ? '$':'fc'}/>
                <ShowData comptNameColor={props.param.theme[2]} moneyColor={props.param.theme[1]} name={props.param.comptName[2]} percentage={props.param.pourcentage[2]+'%'} value={state ? (props.diver/2000).toFixed(2) : (props.diver.toFixed(2))} money={state ? '$':'fc'}/>

              </View>
            </ScrollView>
          </View>
        </View>
        
      );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  block2: {
    flex: 5,
    margin: 10,
    width: '100%',
    justifyContent: "space-around",
    padding: 5,
  },
  changer: {
    flex: 1,
    flexDirection:"row-reverse",
    width:'100%',
  },
  data: {
    flex: 8,
    width:'100%',
  },
 
});

const mapStore = (state) => {
  return {
    totalMoney: state.monyReducer.totalMoney,
    utility: state.monyReducer.utility,
    saving: state.monyReducer.saving,
    diver: state.monyReducer.diver,
    param: state.param,
    historique: state.historique
  }
}

export default connect(mapStore)(Board)