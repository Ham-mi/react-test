import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

const musics = [
    {
        title:'어질어질',
        singer:'SOMI',
        count:'170만회',
        image:'',
        time:'3:08'
    },
    {
        title:'BIRTHDAY',
        singer:'SOMI',
        count:'8916만회',
        image:'',
        time:'3:05'
    },
    {
        title:'What You Waiting For',
        singer:'SOMI',
        count:'4452만회',
        image:'',
        time:'2:52'
    },
    {
        title:'Heaven',
        singer:'Ailee',
        count:'2828만회',
        image:'',
        time:'3:44'
    },
    {
        title:'Celebrity',
        singer:'IU',
        count:'7386만회',
        image:'',
        time:'3:18'
    },
    {
        title:'HOME;RUN',
        singer:'SEVENTEEN',
        count:'5188만회',
        image:'',
        time:'3:35'
    },
    {
        title:'',
        singer:'',
        count:'',
        image:'',
        time:''
    },
];

const scrollTest = ({navigation}) =>{
    return(

            <ScrollView>
                {musics.map((value,index) => (
                  <View style={styles.inneritem} key={index}>
                    <Text>{index}</Text>
                    <View style={styles.innerText1}>
                        <Text style={{fontSize:17, color:'#6E6E6E'}}>
                            {value.title}
                        </Text>
                    </View>
                    <View style={styles.innerText2}>
                        <Text style={{fontSize:17}}>
                            {value.singer}
                        </Text>
                    </View>
                  </View>
                ))}
            </ScrollView>
    )
};

export default scrollTest;

const styles = StyleSheet.create({
    inneritem : {
      flexDirection: 'row',
      //height:'25%',
      borderBottomWidth:1,
      borderColor:'#BDBDBD',
      alignItems:'center'
    },
    innerText1:{
      flex:4,
      alignItems:'center'
    },
    innerText2:{
      flex: 6
    },

  });