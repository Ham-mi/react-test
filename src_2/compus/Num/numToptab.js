import React from 'react';
import { SafeAreaView, View ,Text, TouchableOpacity,StyleSheet, Image, ScrollView} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import all from './all';
import se from './se';
import bu from './bu';
import gu from './gu';

const TopTab = createMaterialTopTabNavigator();

const toptab = () =>{
    return(
        <TopTab.Navigator>
            <TopTab.Screen name='전체' component={all}/>
            <TopTab.Screen name='승학' component={se}/>
            <TopTab.Screen name='부민' component={bu}/>
            <TopTab.Screen name='구덕' component={gu}/>
        </TopTab.Navigator>
    )
};

export default toptab;