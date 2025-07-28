// import { BACKEND_URL, description, keywords, title } from "@/app/layout";
import ProductDetailsPage from "@/components/ProductDetailsPage/ProductDetailsPage";
import { Metadata } from "next";
import React from "react";

const fetchSingleProductDetails = async (slug: string) => {
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/wp-json/custom/v1/getproductbyslug?slug=${slug}`,
      {
        next: { revalidate: 0 },
      }
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error, "blog detail could not fetch");
  }
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const data = await fetchSingleProductDetails(params.slug);

    return {
      title: data.meta?.meta_title?.[0] || title,
      description: data.meta?.meta_description?.[0] || description,
      keywords: data?.meta?.meta_keywords?.[0] || keywords,
      openGraph: {
        title: data.meta?.meta_title?.[0] || title,
        description: data.meta?.meta_description?.[0] || description,
        url: `/blog/${data.slug}`,
        type: "website",
        images: [
          {
            url: data?.meta?.image?.[0],
            width: 600,
            height: 600,
            alt: data.meta?.meta_title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: data.meta?.meta_title?.[0] || title,
        description: data.meta?.meta_description?.[0] || description,
        images: [
          {
            url: data?.meta?.image?.[0],
            width: 600,
            height: 600,
            alt: data.meta?.meta_title,
          },
        ],
      },
      alternates: {
        canonical: `http://localhost:3000/blog/${data?.slug}`,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      // title: defaultTitle,
      // description: defaultDescription,
      // openGraph: {
      //   title: defaultTitle,
      //   description: defaultDescription,
      //   url: `${process.env.FRONTEND_URL}/blog/${params.blog_slug}`,
      //   type: "website",
      //   images: [
      //     {
      //       url: `${process.env.FRONTEND_URL}/opengraph.webp`,
      //       width: 1200,
      //       height: 630,
      //       alt: defaultTitle,
      //     },
      //   ],
      // },
      // twitter: {
      //   card: "summary_large_image",
      //   title: defaultTitle,
      //   description: defaultDescription,
      //   images: [`${process.env.FRONTEND_URL}/opengraph.webp`],
      // },
      // alternates: {
      //   canonical: `${process.env.FRONTEND_URL}/blog/${params.blog_slug}`,
      // },
    };
  }
}

const ProductDetails = () => {
  return (
    <div>
      <ProductDetailsPage />
    </div>
  );
};

export default ProductDetails;
