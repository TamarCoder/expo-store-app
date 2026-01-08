import { AntDesign } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const ProductsCard = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}: Product) => {
  const [count, setCount] = React.useState(1);
  const { colorScheme } = useColorScheme();

  return (
    <View className="w-full bg-white dark:bg-gray-50/10  rounded-3xl p-5  my-5">
      <View className="bg-white rounded-xl">
        <Image
          source={{ uri: image }}
          className="w-full h-72"
          style={{ resizeMode: "contain" }}
        />
      </View>
      <View className="mt-5">
        <Text className="text-sm text-black/60 dark:text-white/70">
          {category}
        </Text>
        <Text className="text-lg font-semibold dark:text-white">{title} </Text>

        <View className="flex-row  justify-between my-3 ">
          <View className="flex-row items-center gap-3">
            <AntDesign
              name="minus-circle"
              size={24}
              color={colorScheme === "light" ? "black" : "white"}
              onPress={() => setCount(count - 1)}
            />
            <Text className="text-xl dark:text-white">{count} </Text>
            <AntDesign
              name="plus-circle"
              size={24}
              color={colorScheme === "light" ? "black" : "white"}
              onPress={() => setCount(count + 1)}
            />
          </View>
          <Text className="text-2xl font-extrabold dark:text-white ">
            {price * count}
          </Text>
        </View>
        <Text
          numberOfLines={2}
          className="text-sm text-black-60 dark:text-white/70"
        > {description}</Text>
        <TouchableOpacity className="bg-black dark:bg-white flex-row justify-center w-10/12 self-center p-4  mt-5 rounded-full">
          <Text className="text-white dark:text-black font-bold">
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
