import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useCreateProduct } from "@/hooks/useProducts";
import { CreateProductInput, createProductSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { useState } from "react";

const ModalAddProduct = ({isLoading}: {isLoading:boolean}) => {

  const [open, setOpen] = useState(false);

  const form = useForm<CreateProductInput>({
    resolver: zodResolver(createProductSchema),
  });

  const mutation = useCreateProduct();

  const onSubmit = (productDataValues: CreateProductInput) => {
    mutation.mutate(productDataValues);
    setOpen(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add Product</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Your Product</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="grid w-full max-w-sm items-center gap-2 mb-4">
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <FormControl>
                    <Input id="name" placeholder="Name" {...field} />
                  </FormControl>
                  <p className="text-sm text-red-400">
                    {form.formState.errors.name?.message}
                  </p>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="grid w-full max-w-sm items-center gap-2 mb-4">
                  <FormLabel htmlFor="description">Description</FormLabel>
                  <FormControl>
                    <Input
                      id="description"
                      placeholder="Description"
                      {...field}
                    />
                  </FormControl>
                  <p className="text-sm text-red-400">
                    {form.formState.errors.description?.message}
                  </p>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="grid w-full max-w-sm items-center gap-2 mb-4">
                  <FormLabel htmlFor="price">Price</FormLabel>
                  <FormControl>
                    <Input
                      id="price"
                      placeholder="Price"
                      {...field}
                      type="number"
                      value={field.value}
                      onChange={(e) =>
                        field.onChange(parseFloat(e.target.value))
                      }
                    />
                  </FormControl>
                  <p className="text-sm text-red-400">
                    {form.formState.errors.price?.message}
                  </p>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stock"
              render={({ field }) => (
                <FormItem className="grid w-full max-w-sm items-center gap-2 mb-4">
                  <FormLabel htmlFor="stock">Stock</FormLabel>
                  <FormControl>
                    <Input
                      id="stock"
                      placeholder="Stock"
                      type="number"
                      {...field}
                      value={field.value}
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                    />
                  </FormControl>
                  <p className="text-sm text-red-400">
                    {form.formState.errors.stock?.message}
                  </p>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem className="grid w-full max-w-sm items-center gap-2 mb-4">
                  <FormLabel htmlFor="imageUrl">Image Url</FormLabel>
                  <FormControl>
                    <Input id="imageUrl" placeholder="Image Url" {...field} />
                  </FormControl>
                  <p className="text-sm text-red-400">
                    {form.formState.errors.imageUrl?.message}
                  </p>
                </FormItem>
              )}
            />

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
                <Button type="submit">{isLoading ? "loading..." : "Create"}</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ModalAddProduct;
