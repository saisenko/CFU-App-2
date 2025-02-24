import { StyleSheet, Button, Image, View, Text } from "react-native";

const Profile = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.profileSection}>
        <Image style={styles.profilePic} source={require("../../assets/images/react-logo.png")}/>
        <Text style={styles.profileName}>Profile Name</Text>
      </View>

      <View style={styles.profileButtons}>
        <View style={styles.btn}>
          <Button color="#8174A0" title="Change name"/>
        </View>
        <View style={styles.btn}>
          <Button color="#8174A0" title="Change profile pic"/>
        </View>
        <View style={styles.btn}>
          <Button color="#8174A0" title="Submit form"/>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#A888B5",
  },
  profileSection: {
    justifyContent: 'center',
    marginTop: 50
  },
  profilePic: {
    height: 250,
    width: 250,
    backgroundColor: '#51456F',

    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#0000FF',

    alignSelf: 'center'
  },
  profileButtons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    marginTop: 10,
    marginBottom: 10,
    width: '80%'
  },
  profileName: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',

    marginTop: 15
  }
});

export default Profile;