import { ProductsList } from "@/components/ProductsList";
import ThemeToggle from "@/components/ThemeToggle";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { colorScheme } = useColorScheme();

  return (
    <SafeAreaView className={"flex-1 items-start justify-center bg-gray-200 dark:bg-black  dark:text-white " } 
    >
      <View className="flex-row items-center justify-between w-full gap-3 px-5 pt-3">
        <Text className="dark:text-white font-bold text-3xl">
          New Collection
        </Text>
        <ThemeToggle/>
      </View>
      <ProductsList />
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </SafeAreaView>
  );
}
