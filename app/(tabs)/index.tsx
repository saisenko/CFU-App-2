import { View, Text, StyleSheet, Button, Image } from 'react-native'
import React from 'react'

const Index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.post}>
        <View style={styles.image}>
          <Image source={require("../../assets/images/react-logo.png")}/>
        </View>
        <View style={styles.postText}>
          <Text>index</Text>
        </View>
      </View>

      <View style={styles.postNav}>
        <View style={styles.navbarBtn}>
          <Button color="#8174A0" title='<'/>
        </View>
        <View style={styles.navbarBtn}>
          <Button color="#8174A0" title='>'/>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#A888B5",
  },
  post: {
    backgroundColor: "#8174A0",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    padding: 10,
  },
  postText: {
    paddingRight: 10,
  },
  postNav: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
  },
  navbarBtn: {
    width: '50%',
  },
});

export default Index;