import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext } from 'react'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './redux/store'
import { decrement, INCREMENT, increment } from './redux/actions/CounterActions'
import UserContext from './context/UserContext'

const index = () => {

  const { userName, setUserName } = useContext(UserContext)

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <StatusBar />
      <TextInput
        value={userName}
        onChangeText={(t) => setUserName?.(t)}
        style={{
          borderWidth: 1,
          paddingVertical: 10
        }}
      />
      <Button onPress={() => router.push("/home")} title='Go to home' />
    </View>
  )
}

export default index

const styles = StyleSheet.create({})