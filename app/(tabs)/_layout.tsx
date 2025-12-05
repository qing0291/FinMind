import { AntDesign, Feather, FontAwesome6 } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

const DEFAULT_SIZE = 24;

const TabLayout = () => {
  return (
    // <Tabs tabBar={(props) => <TabBar {...props} inset={inset} />}>
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000000",
        tabBarStyle: { backgroundColor: "#E5E5E5" },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={DEFAULT_SIZE} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="analysis"
        options={{
          title: "Analysis",
          tabBarIcon: ({ color }) => (
            <AntDesign name="bar-chart" size={DEFAULT_SIZE} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="incomeTax"
        options={{
          title: "Tax",
          tabBarIcon: ({ color }) => (
            <FontAwesome6
              name="file-invoice-dollar"
              size={DEFAULT_SIZE}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Setting",
          tabBarIcon: ({ color }) => (
            <Feather name="settings" size={DEFAULT_SIZE} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
