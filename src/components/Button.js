import React from 'react'

import { StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native'

export default props => {
  const stylesButton = [styles.button]

  props.typeOperation ? stylesButton.push(styles.buttonOperation) : null
  props.typeResultOperation ? stylesButton.push(styles.buttonResultOperation) : null
  props.typeClean ? stylesButton.push(styles.buttonCleanMemory) : null
  props.sizeFull ? stylesButton.push(styles.buttonFullSize) : null

  return (
    <TouchableHighlight onPress={() => props.onClick(props.label)}>
      <Text style={stylesButton}>{props.label}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    fontSize: 20,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#444',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderWidth: 1,
    borderColor: '#222',
    color: '#999',
  },
  buttonOperation: {
    color: '#FFF',
    backgroundColor: '#37709D',
    fontWeight: 'bold'
  },
  buttonResultOperation: {
    color: '#FFF',
    backgroundColor: '#A46AC7',
    fontWeight: 'bold'
  },
  buttonCleanMemory: {
    backgroundColor: '#555'
  },
  buttonFullSize: {
    width: Dimensions.get('window').width / 4 * 4
  },
})
