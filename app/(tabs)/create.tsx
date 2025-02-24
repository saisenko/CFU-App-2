import { View, TextInput, Button, StyleSheet, Image } from 'react-native'
import React from 'react'

const Create = () => {
  return (
    <View style={styles.container}>
      <View style={styles.postContent}>
        <TextInput style={styles.text} placeholder='Your post text..'/>
        <Image style={styles.img} source={require("../../assets/images/react-logo.png")}/>
      </View>

      <View style={styles.btn}>
        <Button color="#8174A0" title="Publish"/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: "#A888B5",
  },
  postContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: "#8174A0",

    maxHeight: 500,
    marginTop: 50,
  },
  btn: {
    height: 50,
    backgroundColor: "#8174A0"
  },
  text: {
    backgroundColor: "#fff",
    height: 450,
    width: 200,
  },
  img: {
    height: 150,
    width: 150,
  }
});

export default Create;