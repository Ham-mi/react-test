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
        image:'https://i.ytimg.com/vi/QPASusjw7uU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCrvtB474DvfDwXx4bpwsRTQIhhyg',
        time:'3:08'
    },
    {
        title:'BIRTHDAY',
        singer:'SOMI',
        count:'8916만회',
        image:'https://i.ytimg.com/vi/BwVNflDzmYk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDgxVsis380UIYimIfVpbRyRqCamQ',
        time:'3:05'
    },
    {
        title:'What You Waiting For',
        singer:'SOMI',
        count:'4452만회',
        image:'https://i.ytimg.com/vi/v65iG3jy2Jc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCAx622empVl_6LcX3xvJsb9T3wsQ',
        time:'2:52'
    },
    {
        title:'Heaven',
        singer:'Ailee',
        count:'2828만회',
        image:'https://i.ytimg.com/vi/1osFlFTIgp4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDeUvgmNPfevusGsoU8A5n-eUNEHQ',
        time:'3:44'
    },
    {
        title:'Celebrity',
        singer:'IU',
        count:'7386만회',
        image:'https://i.ytimg.com/vi/0-q1KafFCLU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD6XIEo8_GZamiAXdYO90c7fx7WTg',
        time:'3:18'
    },
    {
        title:'HOME;RUN',
        singer:'SEVENTEEN',
        count:'5188만회',
        image:'https://i.ytimg.com/vi/fuszuY6PiIw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBFtwrK-X1COdx0cZ8Sx4dC7rpUkg',
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
              <ScrollView>
                {musics.map((value,index) => (
                  <View style={styles.inneritem} key={index}>
                    <View style={styles.innerNum}>
                      <Text style={{fontSize:17,fontWeight:'bold', color:'#6E6E6E'}}>{(index+1)}</Text>
                    </View>
                    <View style={styles.innerImage}>
                      <Image
                        //source={require(value.image)}
                        source={{uri:value.image}}
                        style = {{height:"100%",width:'100%', borderWidth:1, resizeMode:'contain'}}
                      />
                    </View>
                    <View style={styles.innerText1}>
                        <Text style={{fontSize:17, color:'#6E6E6E'}}>
                            {value.title}
                        </Text>
                        <View style={styles.innerText2}>
                        <Text style={{fontSize:17}}>
                            {value.singer}
                        </Text>
                    </View>
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
      width:'90%'
    },
    inneritem : {
      flexDirection: 'row',
      height:80,
      borderBottomWidth:1,
      borderColor:'#BDBDBD',
      alignItems:'center',
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
      justifyContent:'space-between',
      borderBottomLeftRadius:15,
      borderBottomRightRadius:15,
    },
    innerNum:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    innerImage:{
      flex:2,
      justifyContent:'center',
      alignItems:'center',
      marginTop:15,
      marginBottom:15
    },
    innerText1:{
      flex:7,
      justifyContent:'center',
      alignItems:'center',
    },
    innerText2:{
      //flex:5
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