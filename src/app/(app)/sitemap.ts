import { MetadataRoute } from "next";
// import { BACKEND_URL } from "./layout";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = [
    "about-us",
    "contact-us",
    "all-products",
    "certifications",
    "future-plan",
    "gallery",
    "industries-serve",
    "manufacture-rabale",
    "manufacture-uttar-shiv",
    "policies",
    "resource",
    "specialization-material",
    "specialization-thread",
    "terms-and-condition",
    "testimonial",
    "rfq",
    "career",
  ];

  const pagesEntries = pages.map((item) => {
    return {
      url: `${process.env.WEBSITE_URL}/${item}`,
      priority: 0.5,
    };
  });

  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/wp-json/mainCat/subCat/allProducts`
    );
    if (!response.ok) throw new Error("Failed to fetch product data");

    const servicesdata = await response.json();

    // Check if servicesdata is an array
    if (Array.isArray(servicesdata)) {
      const servicesEntries = servicesdata.flatMap((item: any) => {
        const mainCategoryEntry = {
          url: `${
            item?.children && item?.children?.length > 0
              ? `${process.env.WEBSITE_URL}/sub-category-products/${item?.slug}`
              : `${process.env.WEBSITE_URL}/products/${item?.slug}`
          }`,
          priority: 0.8,
        };

        const childEntries =
          item.children?.map((child: any) => ({
            url: `${process.env.WEBSITE_URL}/sub-category-products/${child?.slug}`,
            priority: 0.7,
          })) || [];

        const productEntries =
          item?.products?.map((child: any) => ({
            url: `${process.env.WEBSITE_URL}/product-details/${child?.slug}`,
            priority: 0.8,
          })) || [];

        return [mainCategoryEntry, ...childEntries, ...productEntries];
      });

      return [
        {
          url: `${process.env.WEBSITE_URL}`,
          priority: 1,
        },
        ...pagesEntries,
        ...servicesEntries,
      ];
    } else {
      throw new Error("Invalid services data format");
    }
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return [
      {
        url: `${process.env.WEBSITE_URL}`,
        priority: 1,
      },
      ...pagesEntries,
    ]; // Return basic sitemap if there's an error
  }
}
