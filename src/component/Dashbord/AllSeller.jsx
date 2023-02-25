import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllSeller = () => {
  const { data: sellers = [] } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch(" https://basabhara-server.vercel.app/seller").then((res) =>
        res.json()
      ),
  });
  return (
    <div>
      <h1>All Sellers</h1>
    </div>
  );
};

export default AllSeller;
