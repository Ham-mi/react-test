import React from 'react';
import { SafeAreaView, View ,Text, TouchableOpacity,StyleSheet, Linking} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';

import mapHome from './mapHome';
import map1 from './map1';
import map2 from './map2';
import map3 from './map3';


const Stack = createStackNavigator();

const home =({navigation}) => {
    return (
        <Stack.Navigator
            initialRouteName='home'
            screenOptions={{headerShown:false}}>
            <Stack.Screen name='home' component={mapHome} />
            <Stack.Screen name='map1' component={map1}/>
            <Stack.Screen name='map2' component={map2}/>
            <Stack.Screen name='map3' component={map3}/>
        </Stack.Navigator>
        )
};

export default home;

const styles = StyleSheet.create({});