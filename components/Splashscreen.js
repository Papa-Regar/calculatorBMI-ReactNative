import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { StackActions } from '@react-navigation/native';
import logo from '../components/mainlogo.jpg'
import running from '../components/running.png';

export class Splashscreen extends Component {

    componentDidMount(){
        setTimeout(()=>{
            this.props.navigation.dispatch(StackActions.replace('Home'))
        }, 3000)
    }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={{flex:1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}} >
          <Image alt='logo' source={logo} style={{flex: 1,resizeMode:'contain', aspectRatio: 1.9, marginTop: '20%'}} />
          <Text style={{fontSize: 14, textAlign: 'center', fontFamily: 'Impact'}} >Get to know your body better with our BMI calculator</Text>
        </View>
        <View style={{flex:3, backgroundColor: 'white',justifyContent: 'center', alignItems: 'center'}} >
          <Image alt='splash' source={running} style={{flex: 1,resizeMode:'contain', aspectRatio: 0.6}}/>
        </View>
      </View>
    )
  }
}

export default Splashscreen
