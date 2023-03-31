import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import meter from '../components/meter.png';
import chart from '../components/chart.jpg';

export class Info extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'cadetblue', borderRadius: 10}}>
          <Text style={{fontSize: '30', color: 'white'}} >BODY MASS INDEX</Text>
      </View>
      <View style={{flex: 2, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
          <Image source={meter} style={{resizeMode: 'contain', height: '70%'}} />
      </View>

      <View style={{flex: 3, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
      <Image source={chart} style={{resizeMode: 'contain', height: '70%', width:'98%'}} />
      <Text>For more info on BMI Chart, please search on Youtube :)</Text>
      </View>
  
  </View>
    )
  }
}

export default Info
