import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './redux/store'
import { decrement, INCREMENT, increment } from './redux/actions/CounterActions'
import UserContext from './context/UserContext'

const Home = () => {
  const { userName } = useContext(UserContext)
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <StatusBar />
      {/* <Button onPress={() => dispatch({ type: INCREMENT })} title='Increment' />
      <Button onPress={() => dispatch(decrement())} title='Decrement' /> */}
      <Text>{userName}</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})