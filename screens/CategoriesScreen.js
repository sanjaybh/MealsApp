import { StyleSheet, FlatList } from 'react-native'
import React from 'react';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTitle from '../components/CategoryGridTitle';

const CategoriesScreen = ({navigation}) => {
  function renderCategoryItem(itemData){
    function onPressHandler(){
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id
      })
    }

    return ( 
      <CategoryGridTitle 
        title={itemData.item.title} 
        color={itemData.item.color}
        onPress={onPressHandler}
      />
    )
  }
  return (
    <FlatList 
        data={CATEGORIES} 
        keyExtractor = {(item) => item.id}
        renderItem={renderCategoryItem} 
        numColumns={2}
    />
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({})