import * as React from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View style={styles.screen}>
      <Image
        source={require("../assets/little-lemon-logo.png")}
        style={styles.logoStyle}
      />

      <View style ={styles.textContainer}>

      <Text style={styles.text}>Little Lemon, your local</Text>
      <Text style={styles.text}>Mediterranean Bistro</Text>
      </View>

      <Pressable style={styles.button} onPress={()=>{
        navigation.navigate("subscribe")
      }}>
        <Text style={styles.btnText}>
          NewsLetter
        </Text>
      </Pressable>
      
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: "space-between",
    alignItems: "center",
    // margin: 20
  },

  logoStyle: {
    width: "50%",
    height: "50%",
    resizeMode: "contain",
    alignSelf:"center",
    justifyContent:"center",
    marginTop: "20%",
  },

  text:{
    fontSize: 18,
    fontWeight:"bold",
  },
  textContainer:{
    alignItems:"center",
    marginVertical:"20%",

  },

  button:{
    width:"90%",
    height:"7%",

    backgroundColor:"green",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10,
    alignSelf:"center"
    

  },
  btnText: {
    color: "white",
    fontSize: 22,
  }
});
