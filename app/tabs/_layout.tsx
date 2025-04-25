import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
const Layout = () => {
  function icon(name: any, focused?: any) {
    return () => (
      <Ionicons name={name} size={18} color={focused ? "#3A98FF" : "#000"} />
    );
  }
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: icon("home-outline"),
        }}
      />
      <Tabs.Screen
        name="courses"
        options={{
          title: "Cursos",
          tabBarIcon: icon("play-outline"),
        }}
      />
    </Tabs>
  );
};
export default Layout;
