import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
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

const StudentID = ({navigation}) =>{
    return(
      <View style={styles.all}>
        <View style={styles.up}>
          <View style={styles.upItme}><Text style={{fontSize:28, color:'white'}}>PlayList</Text></View>
          <View style={styles.upText}>
              {/* 왜 스크롤뷰만 해놓으면 값이 사라질까~ */}
              <ScrollView  contentContainerStyle={{flex:1 ,flexDirection: 'column'}}>
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
          </View>
          
        </View>
        <View style={styles.down}>
          <TouchableOpacity 
            onPress={()=> navigation.navigate('home')}
            style={styles.downBtn}
          >
            <Text style={{color:'white'}}>돌아가기</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  export default StudentID;
  

  const styles = StyleSheet.create({
    all : {
      justifyContent:'center',
      alignItems:'center',
      height:'100%',
      width:'100%',
      backgroundColor:'#BDBDBD'
    }
    ,
    up : {
      justifyContent:'center',
      alignItems:'center',
      height:'70%',
      width:'90%',
      borderRadius:15,
      borderWidth:1,
      borderColor:'#BDBDBD',
      flexDirection: 'column'
    },
    down : {
      justifyContent:'center',
      alignItems:'center',
      height:'20%',
      width:'90%'//,
      //backgroundColor:'green'
    },
    inneritem : {
      flexDirection: 'row',
      height:'25%',
      borderBottomWidth:1,
      borderColor:'#BDBDBD',
      alignItems:'center'
    },
     upItme : {
      flex:1,
      width:'100%',
      backgroundColor:'#0B173B',
      borderTopLeftRadius:15,
      borderTopRightRadius:15,
      justifyContent:'center',
      alignItems:'center',
    },
    upText :{
      flex:5,
      width:'100%',
      backgroundColor:'white',
      //flexDirection: 'row',
      justifyContent:'space-between',
      borderBottomLeftRadius:15,
      borderBottomRightRadius:15,
    },
    // upScroll:{
    //     width:'100%',
    //     flexDirection: 'column',
    // },
    innerText1:{
      flex:4,
      alignItems:'center'
    },
    innerText2:{
      flex: 6
    },
    downBtn :{
      width:100,
      height:30,
      borderWidth:1,
      borderRadius:15,
      backgroundColor:'#0B173B',
      justifyContent:'center',
      alignItems:'center',
    }
  });