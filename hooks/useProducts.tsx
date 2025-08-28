"use client"

import { api } from "@/lib/axios";
import { CreateProductInput } from "@/lib/validation";
import { Product } from "@/types/products";
import {  useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const fetchAllProducts = async () => {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const createProduct = async (productDataValues: Product) => {
  try {
    const response = await api.post("/products", productDataValues);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};



export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchAllProducts,
  });
};

export const useCreateProduct = () => {

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (productDataValues: CreateProductInput) =>
      createProduct(productDataValues as Product),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      console.log("Product created successfully");
    },
    onError: () => {
      console.log("Error creating product");
    }
  });
}
