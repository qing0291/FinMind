import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, View } from "react-native";
import { EdgeInsets } from "react-native-safe-area-context";
import TabBarButton from "./TabBarButton";

const TabBar = (props: BottomTabBarProps & { inset: EdgeInsets }) => {
  const { state, descriptors, navigation, inset } = props;

  const primaryColor = "#1d4ed8";
  const greyColor = "#6b7280";
  
  return (
    <View style={[styles.container, { bottom: inset.bottom + 10 }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const label = options.tabBarLabel ?? options.title ?? route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TabBarButton
            key={route.key}
            routeName={route.name}
            label={label}
            isFocused={isFocused}
            onPress={onPress}
            color={isFocused ? primaryColor : greyColor}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: "96%",
    alignSelf: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 12,
    shadowOffset: { height: 4, width: 0 },
    elevation: 4,
  },
});

export default TabBar;
