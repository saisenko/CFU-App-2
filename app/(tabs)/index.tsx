import { View, Text, StyleSheet, Button, Image } from 'react-native';
import React from 'react';

const Index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.post}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/react-logo.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.postText}>
          <Text style={styles.postTitle}>Post Title</Text>
          <Text style={styles.postContent}>This is the content of the post...</Text>
        </View>
      </View>

      <View style={styles.postNav}>
        <View style={styles.navbarBtn}>
          <Button color="#8174A0" title='Previous' />
        </View>
        <View style={styles.navbarBtn}>
          <Button color="#8174A0" title='Next' />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
    justifyContent: 'space-evenly'
  },
  post: {
    backgroundColor: "#fff",
    borderRadius: 8,
    flexDirection: 'column',
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
  },
  postText: {
    paddingTop: 8,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  postContent: {
    fontSize: 14,
    color: '#333',
  },
  postNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  navbarBtn: {
    width: '48%',
  },
});

export default Index;
