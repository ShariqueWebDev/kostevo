import ProductCard from "@/components/ProductSection/ProductCard";
import Link from "next/link";
import React from "react";

const RelatedProducts = ({ data, ID }: { data: any; ID:number }) => {

    const filterProducts = data?.products?.filter((item:any)=>item?.id !== ID)
    
  return (
    <div className="grid grid-cols-4 max-sm:grid-cols-2 my-10 gap-10 max-sm:gap-5 max-sm:place-items-center">
      {filterProducts?.map((item: any) => {        
        return (
          <div className="mb-7">
            <Link href={`/product-details/${item?.slug}`}>
              <ProductCard
                title={item?.meta?.title?.[0]}
                imgPath={item?.meta?.image?.[0]}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default RelatedProducts;
