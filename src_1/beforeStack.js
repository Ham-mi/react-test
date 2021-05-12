
import React from 'react';
import {
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';

const BeforeStack = () =>{
    return( 
        <View>
            <Button title='버튼' onPress={() => alert("버튼!")}/>
            <TouchableOpacity onPress={() => alert("다른 버튼!")}>
              <View
                style={{
                  backgroundColor:'deepskyblue',
                  width:'100%',
                  height:35,
                  justifyContent:'center',
                  alignItems:'center'
                }}
                >
                <Text>버튼</Text>
              </View>

            </TouchableOpacity>

        </View>

     );
};
export default BeforeStack;
