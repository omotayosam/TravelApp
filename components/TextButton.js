import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { dummyData, COLORS, SIZES, FONTS, icons, images } from "../constants";

const TextButton = ({
  label,
  customContainerStyle,
  customLabelStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        ...customContainerStyle,
      }}
      onPress={onPress}
    >
      <Text style={{ ...FONTS.h2, ...customLabelStyle }}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({});
