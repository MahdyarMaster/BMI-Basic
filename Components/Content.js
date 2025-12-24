import {View, Text, StyleSheet, TextInput} from 'react-native'
import {useState} from 'react'

function Content() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  function toNumber(number){
    const num = parseInt(number);
  return isNaN(num) ? 0 : num;
  }
  function CalBMI(){
    const h = toNumber(height) / 100
    const w = toNumber(weight)
    if (h === 0 || w === 0) return 0;
    return (w / (h * h)).toFixed(1);
  }
  const BMIOut = CalBMI();
  function BMIFinal(){
    if (BMIOut === 0) return "داش ندادی عدد هنوز";
    if (BMIOut < 18.5) return "سوطون یه کوچولو غذا بخور(کمبود)";
    if (BMIOut < 24.9) return "خوبه تو نرمالی(نرمال)";
    if (BMIOut < 29.9) return "کم بخور عشقم(اضافه وزن)";
        return "اسکلی؟؟ برو رژیم بگیر(چاق)";
  }
  return(
    <View style={styles.BG}>
      <TextInput
      style={styles.TxtIn}
      onChangeText={(text) => setHeight(text)}
      value={height}
      placeholder="قدتو به سانتی متر بده بیبی"
      keyboardType='numeric'
      />
      <TextInput
      style={styles.TxtIn}
      onChangeText={(text) => setWeight(text)}
      value={weight}
      placeholder="وزنتو به کیلوگرم بده بیبی"
      keyboardType='numeric'
      />
      <Text style={styles.Output}>
        وضعیت : {BMIFinal()}
      </Text>
    </View>
  )
}

export default Content

const styles=StyleSheet.create({
  BG:{
    backgroundColor:'#1f33ac',
    flex:.7,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    padding:10,
    gap:5
  },
  TxtIn:{
    backgroundColor:'#fff',
    fontSize:50,
    borderRadius:5,
    width:'80%',
    direction:'rtl',
    textAlign:'right',
    fontSize:14
  },
  Output:{
    backgroundColor:'#ff00b8',
    paddingVertical:12,
    paddingHorizontal:30,
    color:'#fff',
    fontSize:20,
    borderRadius:5,
    fontWeight:'bold',
    width:'50%',
    textAlign:'center'
  }
})