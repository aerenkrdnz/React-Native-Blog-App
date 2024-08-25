import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import React, { useContext,useEffect } from 'react';
import {Context} from '../context/BlogContext';
import Feather from '@expo/vector-icons/Feather';

export default function IndexScreen({navigation}) {
  const {state,addBlogPost, deleteBlogPost, getBlogPosts} = useContext(Context);

  useEffect(()=>{
    getBlogPosts();

    const listener = navigation.addListener("focus", () => {
      getBlogPosts();
    });
    return ()=>{
      listener.remove();
    }
  },[])

  return (
    <View>      
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={()=>navigation.navigate('Show',{id:item.id})}>
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity>
                  <Feather
                    name="trash-2"
                    size={24}
                    color="black"
                    onPress={() => deleteBlogPost(item.id)}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row:{
    flexDirection:'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderColor:'black'
  },
  title:{
    fontSize:20,
    fontWeight:'bold'
  }
});
