import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking
} from 'react-native';

const home = ({navigation}) => {
    return(
        <View style={styles.all}>
            
                <View style={styles.up}>
                    <View style={styles.upItme}>
                        <Text style={{color:'white', fontSize:40}}>HOME</Text>
                    </View>
                    <View style={styles.upItme2}>
                        <Text style={{color:'black',fontSize:25}}>여백의 미</Text>
                    </View>
                </View>
                <View style={styles.down}>
                    <TouchableOpacity 
                        onPress={()=> navigation.navigate('studentID')}
                        style={styles.btn}>
                        <Text style={{color:'white', fontSize:25}}>STUDENT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={()=> navigation.navigate('playList')}
                        style={styles.btn}>
                        <Text style={{color:'white', fontSize:25}}>PLAYLIST</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        //onPress={()=> Linking.openURL('http://www.naver.com')}
                        onPress={()=> navigation.navigate('scrollTest')}
                        style={styles.btn}>
                        <Text style={{color:'white', fontSize:25}}>NAVER</Text>
                    </TouchableOpacity>
                </View>
        </View>
    );
};

const styles = StyleSheet.create({
    all : {
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        width:'100%',
        backgroundColor:'#BDBDBD'
      },
      up:{
        width:'85%',
        backgroundColor:'white',
        margin:30,
        flex:5,
        borderRadius:15,
      },
      upItme : {
        height:80,
        width:'100%',
        backgroundColor:'#0B173B',
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        justifyContent:'center',
        alignItems:'center',
      },
      upItme2 : {
        height:'70%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
      },
      down:{
        flex:5
    },
      btn : {
        width:200,
        height:65,
        borderWidth:1,
        borderRadius:20,
        backgroundColor:'#0B173B',
        justifyContent:'center',
        alignItems:'center',
        margin:8
      },
      
});


export default home;