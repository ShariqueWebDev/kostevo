"use client";
import { useEffect, useState } from "react";
import ProductCard from "../ProductSection/ProductCard";
import Link from "next/link";
import { MoonLoader } from "react-spinners";
// import { BACKEND_URL } from "@/app/layout";

const ShowAllProducts = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.BACKEND_URL}/wp-json/wp/v2/products?_fields=id,slug,title,meta&per_page=${ITEMS_PER_PAGE}&page=${page}`
      );

      // Check if the response is ok (status 200)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data); // Log the data to inspect it

      if (Array.isArray(data)) {
        setProducts((prevProducts) => [...prevProducts, ...data]);

        // Hide loading if the current page returns less than ITEMS_PER_PAGE
        if (data.length < ITEMS_PER_PAGE) {
          setLoading(false);
          setHasMore(false); // or set a flag to indicate no more products
        }
      } else {
        console.error("Fetched data is not an array:", data);
        setHasMore(false); // Ensure we handle the case where data is invalid
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
      setHasMore(false); // Handle error case by indicating no more products
    } finally {
      if (hasMore) {
        setLoading(false); // Only hide loading if there are more products to load
      }
    }
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      {/* <h1>Products</h1> */}

      <div className="grid grid-cols-3 max-sm:grid-cols-1  place-items-center">
        {products?.map((product) => (
          <div key={product?.id} className="mb-10">
            <Link href={`product-details/${product?.slug}`}>
              <ProductCard
                imgPath={product?.meta?.image}
                title={product?.title?.rendered}
                description={product?.meta?._description}
              />
            </Link>
          </div>
        ))}
      </div>
      {loading && (
        <p className="flex justify-center items-center h-[150px]">
          <MoonLoader color="#ffa142" size={35} />
        </p>
      )}
      {!loading && hasMore && (
        <div className="flex justify-center items-center">
          <button
            onClick={() => {
              setPage((prevPage) => prevPage + 1); // Increment page to load more products
              fetchProducts();
            }}
            className="bg-primary text-white rounded-md  px-5 py-1.5 font-medium"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default ShowAllProducts;
