import * as React from 'react';
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen'
import MealsOverviewScreen from './screens/MealsOverviewScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="CategoriesScreen"
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { 
              backgroundColor: '#3f2f25'
            },
          }}
        >
          <Stack.Screen 
            name="MealsCategories" 
            component={CategoriesScreen} 
            options={{
              title:'All Categories'              
            }}
          />
          <Stack.Screen 
            name="MealsOverview" 
            component={MealsOverviewScreen} 
            // Second option to send params when navigation is dynamic
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: `Meals Overview (${catId})`
            //   }
            // }}
          />
          <Stack.Screen 
            name="MealDetailsScreen" 
            component={MealDetailsScreen}  
            options={{
              title:'Meal Details Screen'              
            }}           
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    </>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
