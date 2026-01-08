import axios from "axios";
import { FlatList } from "react-native";
import { ProductsCard } from "./ProductsCard";
import React, { useEffect } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const ProductsList = () => {
  const [products, setProducts] = React.useState<Product[]>([]);

   useEffect(() => {
      axios.get('https://fakestoreapi.com/products')
      .then((result) => {
         setProducts(result.data)
      })
   }, []);

  return (
    <FlatList
      data={products}
      keyExtractor={(product) => product.id.toString()}
      renderItem={({ item }) => <ProductsCard rating={{
         rate: 0,
         count: 0
      }} {...item} />}
      contentContainerStyle={{ paddingHorizontal: 20 }}
    />
  );
};
