import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { dummyData, COLORS, SIZES, FONTS, icons, images } from "../constants";
const HeaderBar = ({ title, leftOnPressed, right, containerStyle }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingHorizontal: SIZES.padding,
        ...containerStyle,
      }}
    >
      {/**back button */}
      <View style={{ alignItems: "flex-start" }}>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: COLORS.transparentBlack,
          }}
          onPress={leftOnPressed}
        >
          <Image
            source={icons.left_arrow}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.white,
            }}
          />
        </TouchableOpacity>
      </View>
      {/**title */}
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{title}</Text>
      </View>

      {/**settings */}

      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: right ? COLORS.transparentBlack : null,
        }}
      >
        {right && (
          <Image
            source={icons.settings}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.white,
            }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({});
