import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import React, { useContext } from 'react';
import {Context} from '../context/BlogContext';
import Feather from '@expo/vector-icons/Feather';

export default function IndexScreen() {
  const {state,addBlogPost} = useContext(Context);
  return (
    <View>
      <Button title="Ekle" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.title}</Text>
              <Feather name="trash-2" size={24} color="black" />
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
