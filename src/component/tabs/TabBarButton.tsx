import { icons } from "@/assets/icons";
import React from "react";
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface TabBarButtonProps extends PressableProps {
  routeName: keyof typeof icons;
  label: string;
  color: string;
  isFocused: boolean;
}

const TabBarButton = (props: TabBarButtonProps) => {
  const { isFocused, label, routeName, color, ...rest } = props;

  return (
    <Pressable {...rest} style={[styles.container]}>
      <View>
        {icons[routeName]({
          color,
          size: 20,
        })}
      </View>

      <Text
        style={{
          fontSize: 12,
          fontWeight: "500",
          color,
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    //flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
});

export default TabBarButton;
