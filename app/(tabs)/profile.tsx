import { StyleSheet, Button, Image, View, Text } from "react-native";
import React from "react";

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image
          style={styles.profilePic}
          source={require("../../assets/images/react-logo.png")}
        />
        <Text style={styles.profileName}>Profile Name</Text>
      </View>

      <View style={styles.profileButtons}>
        <View style={styles.btn}>
          <Button color="#8174A0" title="Change Name" />
        </View>
        <View style={styles.btn}>
          <Button color="#8174A0" title="Change Profile Picture" />
        </View>
        <View style={styles.btn}>
          <Button color="#8174A0" title="Submit Form" />
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
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 32,
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: '#8174A0',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#333',
  },
  profileButtons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  btn: {
    width: '80%',
    marginVertical: 10,
  },
});

export default Profile;
