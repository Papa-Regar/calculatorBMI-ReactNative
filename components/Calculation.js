import React, { Component, useState } from 'react'
import { Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, Keyboard, Image } from 'react-native'
import running from '../components/running.png';
import logo from '../components/mainlogo.jpg'

const Calculation = () => {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [BMICal, setBMICal] = useState('')
  const [description, setDescription] = useState('')

  const calculateBMI = () => {
    const BMICal = weight / ((height / 100) * (height / 100))
    setBMICal(BMICal.toFixed(1))

    if (BMICal < 18.5) {
      setDescription('Underweight');
    }
    else if (BMICal >= 18.5 && BMICal <= 24.9) {
      setDescription('Normal');
    }
    else if (BMICal >= 25 && BMICal <= 29.9) {
      setDescription('Overweight')
    }
    else if (BMICal >= 29.9) {
      setDescription('Obese')
    }
  }

  const resetBMI = () => {
    setWeight('');
    setHeight('');
    setBMICal('');
    setDescription('')
  }

  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
      <View style={{ backgroundColor: 'white', alignItems: 'center', height: '100%', }}>
      
        <View style={{backgroundColor: 'cadetblue', width: '90%', height: '50%', borderRadius: 30, elevation: 3, shadowColor: 'black', shadowOpacity: 4, shadowRadius: 10 }}>
          
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{fontSize: 30}}>Your BMI is </Text>
            <Text style={{color: 'white', fontSize: 40}}>{BMICal}</Text>
            <Text style={{fontSize: 50}} >{description}</Text>
          </View>
          
        </View>

        <TextInput placeholder='Weight-KG' value={weight} placeholderTextColor={'black'} keyboardType='numeric' onChangeText={(text) => setWeight(text)} style={{
          marginTop: 30,
          paddingVertical: '3%',
          paddingHorizontal: '15%', 
          backgroundColor: 'white',
          borderBottomWidth: 1, 
          borderRadius: 10
        }} />

        <TextInput placeholder='Height-CM' value={height} placeholderTextColor={'black'} keyboardType='numeric' onChangeText={(text) => setHeight(text)} style={{
          marginTop: 10,
          paddingVertical: '3%',
          paddingHorizontal: '15%', 
          backgroundColor: 'white',
          borderBottomWidth: 1, 
          borderRadius: 10
        }}/>
        <View style={{flexDirection: 'row', gap: '30%', marginTop: 39}}>
        <TouchableOpacity style={{backgroundColor: 'crimson', paddingVertical: '3%', paddingHorizontal: '10%', borderRadius: 10}} onPress={calculateBMI}><Text>Calculate</Text></TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: 'crimson', paddingVertical: '3%', paddingHorizontal: '13%', borderRadius: 10}} onPress={resetBMI}><Text>Reset</Text></TouchableOpacity>
        </View>
        <Image alt='logo' source={logo} style={{flex: 1,resizeMode:'contain', aspectRatio: 1.9, marginTop: '20%'}} />
        <Text style={{fontSize: 10, marginBottom: 20}}>Powered by React Native</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}


export default Calculation;
