import {View, Text, StyleSheet} from 'react-native'

function Header() {
  return(
    <View style={styles.BG}>
      <Text style={styles.Title}>My BMI Proj</Text>
    </View>
)}

export default Header

const styles=StyleSheet.create({
  BG:{backgroundColor:'#2b45a6',
      flex:.1,
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
  },
  Title:{
      fontSize:40,
      color:'#fff',
      fontWeight:'bold'
  }
})