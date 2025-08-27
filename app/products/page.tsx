"use client";

import { useProducts } from "@/hooks/useProducts";
import { Product } from "@/types/products";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const ProductsPage = () => {
  const { data: productsData, isLoading, isError } = useProducts();
  console.log(productsData);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <section className="">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productsData?.map((product: Product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center items-center">
              <Image  src={product.imageUrl} width={300} height={200} alt="image" />
            </CardContent>
            <CardFooter>
              <div className="flex justify-end items-center gap-4 w-full">
                <Button variant={"outline"}>Add to Card</Button>
                <Button variant={"default"}>Buy Now</Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;
