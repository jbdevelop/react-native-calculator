import React, { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native'


import Button from './src/components/Button'
import Display from './src/components/Display'

const App = () => {
  const [displayValue, setDisplayValue] = useState('0')
  const [operator, setOperator] = useState([])
  const [isInOperation, setIsInOperation] = useState(false)
  const [signal, setSignal] = useState(null)

  const addDigit = digit => {
    if (displayValue === '0' && digit !== '.') {
      setDisplayValue(digit)
      return
    }

    if (displayValue.length > 1) {
      if (digit === '.' && displayValue.includes('.')) {
        return
      }
    }

    if (isInOperation === true) {
      setDisplayValue(digit)
      setIsInOperation(false)
      return 
    }

    setDisplayValue(displayValue + digit)    
  }

  const cleanMemory = () => {
    setDisplayValue('0')
    setOperator([])
    setIsInOperation(false)
    setSignal(null)
  }

  const resultOperation = () => {
    setIsInOperation(true)
    if (operator.length === 1) {
      const op = eval(`${Number(operator[0])} ${signal} ${Number(displayValue)}`)
      setDisplayValue(op)
      setOperator([])
    }
  }

  const setOperation = operation => {
    setIsInOperation(true) 

    if (operator.length === 0) {
      setOperator([displayValue])
    } else if (operator.length === 1) {
      const op = eval(`${Number(operator[0])} ${signal} ${Number(displayValue)}`)
      setDisplayValue(op)
      setOperator([op])
    }

    setSignal(operation)
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Display value={displayValue} />

        <View style={styles.buttons}>
          <Button label="7" onClick={addDigit} />
          <Button label="8" onClick={addDigit} />
          <Button label="9" onClick={addDigit} />
          <Button typeOperation label="/" onClick={setOperation} />
          <Button label="4" onClick={addDigit} />
          <Button label="5" onClick={addDigit} />
          <Button label="6" onClick={addDigit} />
          <Button typeOperation label="*" onClick={setOperation} />
          <Button label="1" onClick={addDigit} />
          <Button label="2" onClick={addDigit} />
          <Button label="3" onClick={addDigit} />
          <Button typeOperation label="-" onClick={setOperation} />
          <Button typeClean label="AC" onClick={cleanMemory} />
          <Button label="0" onClick={addDigit} />
          <Button label="." onClick={addDigit} />
          <Button typeOperation label='+' onClick={setOperation} />
          <Button sizeFull typeResultOperation label="=" onClick={resultOperation} />
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})

export default App
