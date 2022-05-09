import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CategoriesScreen from './screens/CategoriesScreen'
import MealsOverviewScreen from './screens/MealsOverviewScreen'
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
  return (
    <Drawer.Navigator
      useLegacyImplementation    
      screenOptions={{
        headerStyle: { backgroundColor: '#76bc0e' },
        headerTintColor: '#fff',
        //sceneContainerStyle: { backgroundColor: '#87b247' },
        drawerContentStyle:{ backgroundColor: '#caddd2' },
        drawerInactiveTintColor:'#3d3ae6',
        drawerActiveTintColor: '#0e0d0d',
        drawerActiveBackgroundColor:'#85e843' ,    
      }}
    >
      <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
        title:'All Categories',
        sceneContainerStyle: { 
          backgroundColor: '#cdece2'
        },
      }} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{
        title:'Favorites',
        sceneContainerStyle: { 
          backgroundColor: '#cdece2'
        },
      }} />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="CategoriesScreen"
          screenOptions={{
            headerStyle: { backgroundColor: '#76bc0e' },
            headerTintColor: 'white',
            contentStyle: { 
              backgroundColor: '#695345'
            },
          }}
        >
          <Stack.Screen 
            name="Drawer" 
            component={DrawerNavigator} 
            options={{
              headerShown: false           
            }}
          />
          <Stack.Screen 
            name="MealsOverview" 
            component={MealsOverviewScreen}
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
