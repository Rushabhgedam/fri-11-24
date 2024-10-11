import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const index = () => {
  return (
    <View>
      <Button onPress={()=> router.push("home")} title='Go to home' />
    </View>
  )
}

export default index

const styles = StyleSheet.create({})