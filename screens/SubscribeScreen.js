import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Alert
} from "react-native";

import { validateEmail } from "../utils";

const SubscribeScreen = () => {
  const [email, setEmail] = useState("");

  const isEmailValid = validateEmail(email);
  // Add subscribe screen code here
  return (
    <KeyboardAvoidingView style={styles.screen}>
      <Image
        style={styles.logo}
        source={require("../assets/little-lemon-logo-grey.png")}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Subscribei to our newsletter for our</Text>
        <Text style={styles.text}>latest and delicious recipes</Text>
      </View>

      <TextInput
        style={styles.input}
        autoCorrect={true}
        value={email}
        placeholder="Type Your Email"
        onChangeText={
          setEmail
        }
      />

      <Pressable style={styles.button} onPress={() => {
        console.log(email)
        Alert.alert("Thanks for subscribing, stay tuned!")}}
        disabled={!isEmailValid}
        >
        <Text style={styles.btnText}>Subscribe</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },

  logo: {
    width: "30%",
    height: 100,
    resizeMode: "contain",
    marginTop: "10%",
  },
  textContainer: {
    alignItems: "center",
    marginTop: "5%",
  },
  input: {
    width: "90%",
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: "5%",
    paddingHorizontal: 20,
  },
  button: {
    width: "90%",
    height: 50,

    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    alignSelf: "center",
  },

  btnText: {
    color: "white",
    fontSize: 22,
  },
  text: {
    fontSize: 16,
  },
});
