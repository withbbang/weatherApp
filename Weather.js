import React from "react";
import { StyleSheet, StatusBar, View, Text } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Haze: {
    iconsName: "weather-fog",
    gradient: ["#616161", "#9bc5c3"],
    title: "Mist",
    subTitle: "Fucking I don't know is it gonna rain",
  },
  Clouds: {
    iconsName: "cloud",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "Clouds",
    subTitle: "Fucking I don't know is it gonna rain",
  },
  Thunderstorm: {
    iconsName: "weather-lightning-rainy",
    gradient: ["#0f0c29", "#302b63", "#24243e"],
    title: "Thunderstrom",
    subTitle: "Fucking I don't know is it gonna rain",
  },
  Drizzle: {
    iconsName: "weather-rainy",
    gradient: ["#74ebd5", "#ACB6E5"],
    title: "Drizzle",
    subTitle: "Fucking I don't know is it gonna rain",
  },
  Rain: {
    iconsName: "weather-pouring",
    gradient: ["#667db6", "#0082c8", "#0082c8", "#667db6"],
    title: "Rain",
    subTitle: "Fucking I don't know is it gonna rain",
  },
  Snow: {
    iconsName: "weather-snowy-heavy",
    gradient: ["#E0EAFC", "#CFDEF3"],
    title: "Snow",
    subTitle: "Fucking I don't know is it gonna rain",
  },
  Clear: {
    iconsName: "weather-sunny",
    gradient: ["#fffc00", "#ffffff"],
    title: "Sunny",
    subTitle: "Fucking I don't know is it gonna rain",
  },
  Mist: {
    iconsName: "weather-fog",
    gradient: ["#616161", "#9bc5c3"],
    title: "Mist",
    subTitle: "Fucking I don't know is it gonna rain",
  },
  Dust: {
    iconsName: "weather-windy",
    gradient: ["#659999", "#f4791f"],
    title: "Dust",
    subTitle: "Fucking I don't know is it gonna rain",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      style={styles.container}
      colors={weatherOptions[condition].gradient}
    >
      {/* <StatusBar barStyle="light-content" /> */}
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconsName}
          color="#fff"
        />
        <Text style={styles.text}>{temp}℃</Text>
      </View>
      <View style={styles.halfContainer}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subTitle}>
          {weatherOptions[condition].subTitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 36,
    color: "#fff",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
  },
  subTitle: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 15,
    color: "#fff",
  },
});
