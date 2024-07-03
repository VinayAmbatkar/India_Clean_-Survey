import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import WelcomeText from '../Components/WelcomeText'
import InputBox from '../Components/InputBox'
import Offer from '../Components/Offer'
import Card from '../Components/Card'
import cardInfoDatabase from '../database/cardInfoDatabase'
import nameDatabase from '../database/nameDatabase'
import { useFonts } from 'expo-font'
import sizes from '../assets/Sizes'
import colors from '../assets/Colors'

type NavigationProps = {
  navigation: any,
  onPress: () => void
}

export default function HomeScreen(props: NavigationProps) {
  
const [loaded] = useFonts({
  Montserrat: require('../assets/fonts/Montserrat.ttf'),
})

if(!loaded){
  return null;
}

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
          <WelcomeText name={`${nameDatabase.name}`} onPress={ () => props.navigation.navigate('MenuScreen')} />
          <InputBox />
          <Offer onPress={ () => props.navigation.navigate('Notifyus')} />

          <View style={styles.wrapper}>
            <Text style={styles.textCategory}>Choose Category</Text>
            <TouchableOpacity>
                {/* <Text style={styles.textView}>See All</Text> */}
            </TouchableOpacity>
          </View>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <Card header={`${cardInfoDatabase.header[0]}`} result={`${cardInfoDatabase.result[0]}`} reviews={`${cardInfoDatabase.reviews[0]}`} image={require('../Images/plant1.jpg')} onPress={ () => props.navigation.navigate('Notifyus') } /> 
              <Card header={`${cardInfoDatabase.header[1]}`} result={`${cardInfoDatabase.result[1]}`} reviews={`${cardInfoDatabase.reviews[1]}`} image={require('../Images/dry.png')} onPress={ () => props.navigation.navigate('Notifyus') }/>  
          </ScrollView>
          
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <Card header={`${cardInfoDatabase.header[2]}`} result={`${cardInfoDatabase.result[2]}`} reviews={`${cardInfoDatabase.reviews[0]}`} image={require('../Images/wetwest.png')} onPress={ () => props.navigation.navigate('Notifyus') } /> 
              <Card header={`${cardInfoDatabase.header[3]}`} result={`${cardInfoDatabase.result[3]}`} reviews={`${cardInfoDatabase.reviews[1]}`} image={require('../Images/garbage.png')} onPress={ () => props.navigation.navigate('Notifyus') }/>  
          </ScrollView>
      </View>
      
    </ScrollView>
    
  )
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  textView:{
    fontFamily: 'Montserrat',
    fontWeight: '700',
    fontSize: sizes.menuText,
    color: colors.secondary,
    marginRight: 25,
  },
  textCategory:{
    fontFamily: 'Montserrat',
    fontWeight: '700',
    fontSize: sizes.buttonTextSize,
  },
  wrapper:{
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 35,
    marginBottom: 14,
    justifyContent: 'space-between',
  },
  container:{
    flex: 1,
    marginTop: 50,
  },
})
