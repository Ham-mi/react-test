import React from 'react';
import { SafeAreaView, View ,Text, TouchableOpacity,StyleSheet, Image, ScrollView} from 'react-native';

const mapList = [
    {
        name:'G01',
        title:'석당기념관(GE)'
    },
    {
        name:'G02',
        title:'의과대학강의동(S1)'
    },
    {
        name:'G03',
        title:'의과대학(S2)'
    },
    {
        name:'G04',
        title:'의과대학기초의학동(S3)'
    },
    {
        name:'G05',
        title:'구덕강의동 1,2호관(GA)'
    },
    {
        name:'G11',
        title:'구.예술대학'
    },
    {
        name:'G12',
        title:'구.예술대학실습동'
    },
];

const map =({navigation}) => {
    return (
        <SafeAreaView>
            <View style={styles.contain}>
                <ScrollView horizontal={true}>
                    {mapList.map((value,index)=> (
                        <TouchableOpacity
                            onPress={()=> alert(value.title)}>
                            <View style={styles.listup}key={index}>
                                <Text style={{fontSize:20}}>{value.name}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <Image
                    source={require('../../../assets/map_guduk_new.jpg')}
                    style = {{height:'90%',width:'100%', borderWidth:1, resizeMode:'contain'}}
                    />
            </View>
        </SafeAreaView>
    )
};

export default map;

const styles = StyleSheet.create({
    contain:{
        backgroundColor:'white',
        width:'100%',
        height:'100%'
    },
    listup:{
        width:60,
        height:40,
        backgroundColor:'#dbdbdb',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        margin:10
    }
});