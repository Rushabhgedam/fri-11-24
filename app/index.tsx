import { Button, StyleSheet, Text, TextInput, TextInputBase, View } from 'react-native'
import React, { useContext } from 'react'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './redux/store'
import { decrement, INCREMENT, increment } from './redux/actions/CounterActions'
import UserContext from './context/UserContext'

const index = () => {

  const counter = useSelector((state: RootState) => state.counter)
  const dispatch = useDispatch();


  console.log("counter from redux", counter)

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <StatusBar />
      <Button onPress={() => dispatch(increment())} title='Increment' />
      <Button onPress={() => dispatch({ type: "INCREMENT", payload: { by: 10 } })}
      title='Increment by 10' />
      <Button onPress={() => dispatch(decrement())} title='Decrement' />
      <Text>{counter}</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})