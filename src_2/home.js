import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  SafeAreaView
} from 'react-native';

const home = ({navigation}) => {
    return(
        <SafeAreaView>
          <View style={styles.contain}>
          <Image
              source={require('../assets/home(light).png')}
              style = {{flex:3,width:'85%',marginTop:10, borderWidth:1, resizeMode:'contain'}}
            />
            <View style={styles.viewup}>
              <View style={styles.viewdown}><Text>학사일정</Text></View>
              <View style={styles.viewdown}><Text>디스스탑이즈</Text></View>
            </View>
            <View style={styles.viewup}>
              <View style={styles.viewdown}><Text>교내식당</Text></View>
              <View style={styles.viewdown}><Text>도서관</Text></View>
            </View>
          </View> 
          
        </SafeAreaView>
    )
};

export default home;


const styles = StyleSheet.create({
  contain:{
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    height:'100%',
    width:'100%',
    backgroundColor:'white'
  },
  viewup:{
    //backgroundColor:'pink',
    flex:3,
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row'
  },
  viewdown:{
    //backgroundColor:'red',
    width:'38%',
    height:'83%',
    marginTop:0,
    marginBottom:0,
    marginLeft:10,
    marginRight:10,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'black',
    borderWidth:2
  },

});