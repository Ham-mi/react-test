import React, { Component } from 'react';
import {Text, View,StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import page2 from './src_1/playList';
import topTab from './src_2/toptab';
import homeStack from './src_2/teststack';
import compusStack from './src_2/compus/compusStack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainScreen = () => {
    return (
        <Tab.Navigator 
            initialRouteName="홈"
            >
            <Tab.Screen name="홈" component={homeStack} />
            <Tab.Screen name="캠퍼스정보" component={compusStack}/>
            <Tab.Screen name="마이" component={topTab}/>
            <Tab.Screen name="더보기" component={topTab}/>
        </Tab.Navigator>
    );
};

class App extends Component{
  render(){ 
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='home'
        >
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={compusStack}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MoreStack"
            component={page2}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CampusStack"
            component={page2}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;
