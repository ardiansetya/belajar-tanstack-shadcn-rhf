"use client"

import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = async () => {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};
