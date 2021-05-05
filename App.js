
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';



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
  item1 : {
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
  upImage :{
    flex:2,
    width:'100%',
    backgroundColor:'#E6E6E6',
    justifyContent:'center',
    alignItems:'center'
  },
  upText :{
    flex:4,
    width:'100%',
    backgroundColor:'white',
    justifyContent:'space-between',
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
  },
  innerText1:{
    flex:4,
    alignItems:'center'
  },
  innerText2:{
    flex: 6
  },
  downImage: {
    width:'50%',
    height:'85%',
    borderWidth:1,
    borderRadius:15,
    borderColor:'#BDBDBD',
    backgroundColor:'white'
  }
});

const App = () =>{
  return(
    <View style={styles.all}>
      <View style={styles.up}>
        <View style={styles.upItme}><Text style={{fontSize:28, color:'white'}}>모바일 학생증</Text></View>
        <View style={styles.upImage}>
          <View style={styles.downImage}>
            <Image
              source={require('./ThisIs.png')}
              style = {{height:"100%",width:'100%', borderWidth:1, resizeMode:'contain'}}
            />
          </View>
          </View>
        <View style={styles.upText}>
          <View style={styles.inneritem}>
            <View style={styles.innerText1}><Text style={{fontSize:17, color:'#6E6E6E'}}>성명</Text></View>
            <View style={styles.innerText2}><Text style={{fontSize:17}}>함예빈</Text></View>
          </View>
          <View style={styles.inneritem}>
            <View style={styles.innerText1}><Text style={{fontSize:17, color:'#6E6E6E'}}>대학</Text></View>
            <View style={styles.innerText2}><Text style={{fontSize:17}}>공과대학</Text></View>
          </View><View style={styles.inneritem}>
            <View style={styles.innerText1}><Text style={{fontSize:17, color:'#6E6E6E'}}>학과</Text></View>
            <View style={styles.innerText2}><Text style={{fontSize:17}}>컴퓨터공학과</Text></View>
          </View><View style={styles.inneritem}>
            <View style={styles.innerText1}><Text style={{fontSize:17, color:'#6E6E6E'}}>학번</Text></View>
            <View style={styles.innerText2}><Text style={{fontSize:17}}>1952728</Text></View>
          </View>
        </View>
        
      </View>
      <View style={styles.down}>

      </View>
    </View>
  );
};
export default App;
