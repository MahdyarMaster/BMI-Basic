import {View, Text, StyleSheet} from 'react-native'
import Content from './Content'

function Body() {
  return(
    <View style={styles.BG}>
      <Content/>
    </View>
  )
}

export default Body

const styles=StyleSheet.create ({
  BG:{
    //backgroundColor:'#3b0d59',
    flex:.8,
    justifyContent:'center',
    padding:10
  }
})