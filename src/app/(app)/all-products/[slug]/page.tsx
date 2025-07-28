import AllProductsMainComp from "@/components/AllProducts/AllProductMainComp";

const AllProducts = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  
 
  return (
    <>
   <AllProductsMainComp slug={slug}/>
    </>
  );
};

export default AllProducts;
