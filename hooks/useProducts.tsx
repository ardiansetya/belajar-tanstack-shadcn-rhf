"use client"

import { api } from "@/lib/axios";
import { CreateProductInput } from "@/lib/validation";
import { Product } from "@/types/products";
import {  useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {toast} from "sonner";

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

const deleteProduct = async (productId: number) => {
  try {
    const response = await api.delete(`/products/${productId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}



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
      
      toast.success("Product has been created", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
        className: "bg-green-100 text-green-800",
      });

      console.log("Product created successfully");
    },
    onError: () => {
      console.log("Error creating product");
    }
  });
}

export const useDeleteProduct = () => {

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (productId: number) => deleteProduct(productId),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.info("Product has been deleted", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
        className: "bg-red-100 text-red-800",
      });
      console.log("Product deleted successfully");
    },
    onError: () => {
      console.log("Error deleting product");
    }
  });
}