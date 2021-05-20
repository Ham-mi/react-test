import React, { Component } from 'react';
import {Text, View,StyleSheet,Image} from 'react-native';
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
            tabBarOptions={{
              showLabel:false
            }}
            >
            <Tab.Screen name="홈" component={homeStack} 
            options={{
              tabBarIcon:({focused})=>{
                return(
                  <View style={{alignContent:'center', justifyContent:'center'}}>
                    <Image 
                    source={focused?require('./assets/home_homeicon_fill.png'):require('./assets/home_homeicon.png')} 
                    style={{width:40, height:40,}}/>
                    </View>
                )},
            }}/>
            <Tab.Screen name="캠퍼스정보" component={compusStack}
            options={{
              tabBarIcon:({focused})=>{
                return(
                  <View style={{alignContent:'center', justifyContent:'center'}}>
                    <Image 
                    source={focused?require('./assets/home_campusicon_fill.png'):require('./assets/home_campusicon.png')} 
                    style={{width:40, height:40,}}/>
                    </View>
                )},
            }}/>
            <Tab.Screen name="마이" component={topTab}
            options={{
              tabBarIcon:({focused})=>{
                return(
                  <View style={{alignContent:'center', justifyContent:'center'}}>
                    <Image 
                    source={focused?require('./assets/myicon_fill.png'):require('./assets/myicon.png')} 
                    style={{width:40, height:40,}}/>
                    </View>
                )},
            }}/>
            <Tab.Screen name="더보기" component={topTab}
            options={{
              tabBarIcon:({focused})=>{
                return(
                  <View style={{alignContent:'center', justifyContent:'center'}}>
                    <Image 
                    source={focused?require('./assets/home_moreicon_fill.png'):require('./assets/home_moreicon.png')} 
                    style={{width:40, height:40,}}/>
                    </View>
                )},
            }}/>
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
