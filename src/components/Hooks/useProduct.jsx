import { useQuery } from "@tanstack/react-query";

const useProduct = () => {
  const { data: product = [], refetch } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await fetch(`https://revenue-server.vercel.app/product`);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      return data;
    },
  });
  return [product, refetch];
};

export default useProduct;
