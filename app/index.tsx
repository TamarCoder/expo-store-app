import { ProductsList } from "@/components/ProductsList";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import React from "react";
import { Switch, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
 

  return (
    <SafeAreaView className={"flex-1 items-start justify-center bg-gray-200 dark:bg-black  dark:text-white " } 
    >
      <View className="flex-row w-full gap-3 px-5 pt-3">
        <Text className="dark:text-white">
          New Collection
        </Text>
        <Switch value={colorScheme === "dark"} onChange={toggleColorScheme}/>
      </View>
      <ProductsList />

      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </SafeAreaView>
  );
}
