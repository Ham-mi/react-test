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
        title:'ALIEN',
        singer:'LEE SUHYUN',
        count:'2086만회',
        image:'https://i.ytimg.com/vi/yTXhlipykWI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACB1yDTgIkmdwe4Bds3rbnqLEbEQ',
        time:'3:24'
    },
    {
      title:'Panorama',
      singer:'IZ*ONE',
      count:'5190만회',
      image:'https://i.ytimg.com/an_webp/jeSeNxKasKA/mqdefault_6s.webp?du=3000&sqp=CIDl2oQG&rs=AOn4CLBgHuCycK7WMm6fkDlu6OGaSKNsUw',
      time:'3:52'
    },
    {
      title:'News',
      singer:'9MUSES',
      count:'455만회',
      image:'https://i.ytimg.com/vi/S7gXErQxdao/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC6F1TORFT7mRQ8kSawN2wePFBTZQ',
      time:'3:10'
    },
    {
      title:'Rollin',
      singer:'Brave Girls',
      count:'2510만회',
      image:'https://i.ytimg.com/vi/nw6mcjNlh8E/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAUcGQIe3-dq9VvqVGZXbNQRCsqSg',
      time:'3:18'
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
                      <Text style={{fontSize:10}}>
                        {value.time}
                      </Text>
                    </View>
                    <View style={styles.innerText1}>
                        <Text style={{fontSize:18, color:'#000000',paddingBottom:3}}>
                            {value.title}
                        </Text>
                        <View style={styles.innerText2}>
                          <Text style={{fontSize:15, color:'#6E6E6E',width:'50%'}}>
                            {value.singer}
                          </Text>
                          <Text style={{fontSize:15, color:'#6E6E6E',width:'50%',textAlign:'right'}}>
                            {value.count}
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
      height:'80%',
      width:'90%',
      borderRadius:15,
      borderWidth:1,
      borderColor:'#BDBDBD',
      flexDirection: 'column'
    },
    down : {
      justifyContent:'center',
      alignItems:'center',
      height:'10%',
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
      flex:0.5,
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
      //alignItems:'center',
      //backgroundColor:'pink',
      marginLeft:15
    },
    innerText2:{
      //flex:5
      width:'80%',
      flexDirection: 'row',
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