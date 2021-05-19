import React from 'react';
import { SafeAreaView, View ,Text, TouchableOpacity,StyleSheet, Image, ScrollView} from 'react-native';

const mapList = [
    {
        name:'S01',
        title:'대학본부 및 인분과학대학(A)'
    },
    {
        name:'S02',
        title:'학생회관(Q)'
    },
    {
        name:'S03',
        title:'공과대학 1호관(P1)'
    },
    {
        name:'S04',
        title:'공과대학 2호관(P2)'
    },
    {
        name:'S05',
        title:'공과대학 3호관(P3)'
    },
    {
        name:'S06',
        title:'공과대학 5호관(RS)'
    },
    {
        name:'S07',
        title:'예술체육대학 1관'
    },
    {
        name:'S08',
        title:'교수회관(W)'
    },
    {
        name:'S09',
        title:'생명자원과학대학 및 건강과학대학'
    },
    {
        name:'S11',
        title:'자연과학대학(E)'
    },
    {
        name:'S12',
        title:'공과대학 4호관(P4)'
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
                    source={require('../../../assets/map_seunghak_new.jpg')}
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