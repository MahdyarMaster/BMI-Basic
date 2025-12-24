import {View, Text, StyleSheet} from 'react-native'

function Footer() {
  return (
    <View style={styles.BG}>
      <Text style={styles.Title}>This is just a shitty Footer</Text>
    </View>
  )
}

export default Footer

const styles=StyleSheet.create({
  BG:{backgroundColor:'#0d1d59',
  flex:.1,
  display:'flex',
  justifyContent:'center',
  alignItems:'center'
  },
  Title:{
  fontSize:30,
  fontWeight:'bold',
  color:'#fff'
  }
})