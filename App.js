import {View, Text, StyleSheet} from 'react-native'
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'

function App() {
  return(
    <View style={styles.BG}>
      <Header/>
      <Body/>
      <Footer/>
    </View>
  )
}

export default App

const styles=StyleSheet.create({
  BG:{backgroundColor:'#827b97',
  flex:1
  }
})