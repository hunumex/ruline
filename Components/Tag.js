import React, {useState} from 'react'
import { StyleSheet, View, TouchableHighlight, Image} from 'react-native'

 //components
 const Tag = (props) => {

    return(
      <TouchableHighlight onPress={props.onPress} style={{alignSelf:'center', width:'20%', height:'50%', justifyContent:'center', alignItems:'center'}} underlayColor='#345068' >
      <View style={{alignSelf:'center', width:'30%', height:'65%'}} >
        <Image style={{alignSelf:'center'}} source={props.icon}/>
      </View>
      </TouchableHighlight>
    )
  }

  export default Tag