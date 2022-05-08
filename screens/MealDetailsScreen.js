import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native'
import React, { useLayoutEffect } from 'react'

import { MEALS } from '../data/dummy-data'
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';

const MealDetailsScreen = ({route, navigation}) => {
  const mealId = route.params.mealId;

  const selectMeal = MEALS.find( (meal) => meal.id === mealId)
  //console.log(selectMeal)

  function headerButtonPressHandler() {
    console.log("Tapping button from MealDetailsScreen.js")
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton icon="star" color="white" onPress={headerButtonPressHandler}/>
      }
    })
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image
        style={styles.image}
        source={{ uri: selectMeal.imageUrl }}
      />
      <Text style={styles.title}>{selectMeal.title}</Text>
      <MealDetails 
        duration={selectMeal.duration} 
        complexity={selectMeal.complexity}
        affordability={selectMeal.affordability}
        textStyle={styles.detailText}
      />

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          {/* ingredient */}
          <Subtitle>Ingredents</Subtitle>
          <List data={selectMeal.ingredients} />
          
          {/* Steps */}      
          <Subtitle>Steps</Subtitle>
          <List data={selectMeal.steps} />
        </View>
      </View>     

    </ScrollView>
  )
}

export default MealDetailsScreen

const styles = StyleSheet.create({
  rootContainer:{
    marginBottom: 30
  },
  image:{
    width: '100%',
    height: 350
  },
  title:{
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: '#fff'
  },
  detailText: {
    color: '#fff'
  },
  listOuterContainer:{
    alignItems: 'center'
  },
  listContainer:{
    maxWidth: '80%'
  }
})