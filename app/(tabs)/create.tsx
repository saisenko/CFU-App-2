import { View, TextInput, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

const Create = () => {
  const [image, setImage] = useState<string | null>(null); // added type, so TS doesn't scream at you

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,  // although deprecated, it just works
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.postContent}>
        <TextInput
          style={styles.textInput}
          placeholder='Write your post here...'
          multiline
          numberOfLines={4}
        />
        <View style={styles.imageContainer}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} />
          ) : (
            <View style={styles.placeholder} />
          )}
          <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
            <Text style={styles.imageButtonText}>Select Image</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.publishButtonContainer}>
        <Button color="#8174A0" title="Publish" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  postContent: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  textInput: {
    backgroundColor: '#fafafa',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginBottom: 16,
    fontSize: 16,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  placeholder: {
    width: '100%',
    height: 200,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
  },
  imageButton: {
    marginTop: 8,
    padding: 10,
    backgroundColor: '#8174A0',
    borderRadius: 4,
  },
  imageButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  publishButtonContainer: {
    alignItems: 'center',
  },
});

export default Create;
