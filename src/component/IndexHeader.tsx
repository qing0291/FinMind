import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {};

const IndexHeader = (props: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/app_logo_foreground.webp")}
        style={{ width: 120, height: 50 }}
      />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 8,
            backgroundColor: "#FFFFFF",
            height: 40,
            paddingHorizontal: 16,
            gap: 6,
            shadowColor: "#000",
            shadowOpacity: 0.06,
            shadowRadius: 12,
            shadowOffset: { height: 4, width: 0 },
            elevation: 4,
          }}
        >
          <Ionicons name="calendar-outline" size={22} color={"#000"} />
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>2025</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            backgroundColor: "#FFF",
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            shadowColor: "#000",
            shadowOpacity: 0.06,
            shadowRadius: 12,
            shadowOffset: { height: 4, width: 0 },
            elevation: 4,
          }}
        >
          <Ionicons name="notifications-outline" size={26} color="#000" />

          <View
            style={{
              position: "absolute",
              top: -4,
              right: -4,
              borderRadius: 100,
              width: 14,
              height: 14,
              backgroundColor: "red",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IndexHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
