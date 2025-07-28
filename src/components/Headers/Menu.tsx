"use client";
import { BACKEND_URL } from "@/app/layout";
// import { BACKEND_URL } from "@/app/layout";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

interface MenuProps {
  showCatMenu: boolean;
  setShowCatMenu: React.Dispatch<React.SetStateAction<boolean>>;
  subMenuData: any; // Adjust the type for `subMenuData` if you know the specific structure
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>; // Add this prop
  subMenuBgColor: string;
  setSubMenuBgColor: React.Dispatch<React.SetStateAction<string>>;
  scrollCount: number;
  menuColor: string;
  setMenuColor: React.Dispatch<React.SetStateAction<string>>;
}

const Menu: React.FC<MenuProps> = ({
  showCatMenu,
  setShowCatMenu,
  subMenuData,
  setSubMenuBgColor,
  subMenuBgColor,
  scrollCount,
  menuColor,
  setMenuColor,
}) => {
  const [showSubMenu, setShowSubMenu] = useState("hidden");
  const [animateLineId, setAnimateLineId] = useState("");
  const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);
  const [hoveredItemId2, setHoveredItemId2] = useState<number | null>(null);
  const [hoveredItemId3, setHoveredItemId3] = useState<number | null>(null);
  const path = usePathname();

  const [categoryDataForMenu, setCategoryDataForMenu] = useState([]);
  const [productsData, setProductsData] = useState({});
  const fetchedCategories = useRef(new Set()); // Store slugs of fetched categories

  const fetchCategoryMainCategory = async () => {
    try {
      const response = await fetch(
        `${process.env.BACKEND_URL}/wp-json/custom/v1/getAllMainCat`
      );
      const data = await response.json();
      setCategoryDataForMenu(data);
    } catch (error) {
      console.error("Error fetching main categories:", error);
    }
  };

  const fetchProductBySubCat = async (slug: string) => {
    if (fetchedCategories.current.has(slug)) return; // Avoid refetching if already fetched

    try {
      const response = await fetch(
        `${process.env.BACKEND_URL}/wp-json/custom/v1/getProductBySubCat/${slug}`
      );
      const data = await response.json();
      setProductsData((prevData) => ({
        ...prevData,
        [slug]: data?.products || [], // Save products under the category slug
      }));
      fetchedCategories.current.add(slug); // Mark this category as fetched
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchCategoryMainCategory();
  }, []);

  useEffect(() => {
    categoryDataForMenu.forEach((category) => {
      if (!category?.subcategories) {
        fetchProductBySubCat(category?.slug);
      }
    });
  }, [categoryDataForMenu]);

  useEffect(() => {
    // Change header background color based on the route

    if (path === "/" && scrollCount > 100) {
      setSubMenuBgColor("bg-white");
    } else if (path !== "/") {
      setSubMenuBgColor("bg-white");
    } else {
      setSubMenuBgColor("bg-black");
    }
  }, [path]);

  const data = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 2,
      name: "About Us",
      url: "/about-us",
      submenu: true,
      submenuV1: [
        // {
        //   id: 3,
        //   name: "About Company",
        //   url: "/about-us",
        // },
        {
          id: 3,
          name: "Specialization",
          // url: "#",
          submenu: true,
          submenuV2: [
            {
              id: 4,
              name: "Thread",
              url: "/specialization-thread",
            },
            {
              id: 5,
              name: "Material",
              url: "/specialization-material",
            },
          ],
        },
        {
          id: 6,
          name: "Facilities",
          url: "#",
          submenu: true,
          submenuV2: [
            {
              id: 7,
              name: "Rabale Unit",
              url: "/manufacture-rabale",
            },
            {
              id: 8,
              name: "Uttar Shiv Unit",
              url: "/manufacture-uttar-shiv",
            },
          ],
        },
        {
          id: 9,
          name: "Policy",
          url: "/policies",
        },
        // {
        //   id: 10,
        //   name: "Future Plan",
        //   url: "/future-plan",
        // },
        {
          id: 11,
          name: "QA / QC",
          url: "/certifications",
        },
      ],
    },

    {
      id: 12,
      name: "Products & Services",
      url: "/all-products/compression-tube-fittings",
      submenu: true,
      submenuV1: categoryDataForMenu.map((item: any) => ({
        id: item?.id,
        name: item?.name,
        desc: item?.description,
        url: item?.slug
          ? item?.subcategories
            ? `/sub-category-products/${item?.slug}`
            : `/products/${item?.slug}`
          : "#",
        // submenuV2:
        //   item?.subcategories && item?.subcategories.length > 0
        //     ? item?.subcategories.map((subItem: any) => {
        //         console.log(subItem?.slug, " check subcategory slug");

        //         return {
        //           id: subItem?.id,
        //           name: subItem?.name,
        //           url: subItem?.slug
        //             ? subItem?.subcategories
        //               ? `/sub-category-products/${subItem?.slug}`
        //               : `/products/${subItem?.slug}`
        //             : "#",
        //           submenuV3:
        //             productsData[subItem?.slug]?.length > 0
        //               ? productsData[subItem?.slug]?.map((productV3: any) => {
        //                   console.log(productV3, "submenuV33333333333333");
        //                   return {
        //                     id: productV3?.id,
        //                     name: productV3?.title,
        //                     url: `/product-details/${productV3?.slug}`,
        //                   };
        //                 })
        //               : [
        //                   {
        //                     id: "no-product",
        //                     name: "No product available",
        //                     url: "#",
        //                   },
        //                 ], // Fallback for no products in subcategory
        //         };
        //       })
        //     : productsData[item?.slug]?.length > 0
        //     ? productsData[item?.slug].map((product: any) => ({
        //         id: product?.id,
        //         name: product?.meta?.title?.[0],
        //         url: `/product-details/${product?.slug}`,
        //       }))
        //     : [
        //         {
        //           id: "no-product",
        //           name: "No product available",
        //           url: "#",
        //         },
        //       ], // Fallback to an empty array if no products are available
      })),
    },

    {
      id: 13,
      name: "RFQ",
      url: "/rfq",
    },
    {
      id: 14,
      name: "Client Resource",
      url: "/resources",
    },
    {
      id: 15,
      name: "Career",
      url: "/career",
    },
    {
      id: 16,
      name: "Contact Us",
      url: "/contact-us",
    },
  ];

  return (
    <>
      <ul
        className={`hidden lg:flex items-center gap-8  !z-[100] `}
      >
        {data.map((item) => {
          const isActive = path === item.url;

          return (
            <React.Fragment key={item.id}>
              {
                <li
                  className={`cursor-pointer text-sm pb-1 transition-all ease-in-out heading-all ${
                    isActive ? " border-b-[#f7a536] border-b-2" : ""
                  }`}
                >
                  <Link
                    href={item?.url}
                    className="flex items-center gap-0.5 relative"
                    onMouseEnter={(e) => {
                      if (item?.submenuV1) {
                        setHoveredItemId(item.id);
                        setShowSubMenu("translate-y-[152px] opacity-1 block");
                      }
                    }}
                    onMouseLeave={(e) => {
                      setShowSubMenu("translate-y-[152px] opacity-0 invisible");
                    }}
                  >
                    {item.name}

                    {item?.submenu && <ChevronDown size={15} />}
                    {item?.submenu && hoveredItemId === item?.id && (
                      <>
                        <ul
                          className={`absolute ${showSubMenu} -top-[93px] min-w-max transition-all bg-white shadow-md -left-5 py-3 duration-300 !-z-10 `}
                        >
                          {item?.submenuV1?.map((itemV1, index) => {
                            return (
                              <Link
                                href={itemV1?.url || ""}
                                onClick={() => {
                                  setShowSubMenu("hidden");
                                }}
                                className="group"
                              >
                                <li
                                  className={`pt-3  px-5 my-2 text-gray-800 flex gap-2
                                    ${``}
                                    `}
                                  onMouseEnter={() => {
                                    if (itemV1?.submenuV2) {
                                      setHoveredItemId2(itemV1.id);
                                    }
                                  }}
                                  onMouseLeave={() => {
                                    setHoveredItemId2(null);
                                  }}
                                >
                                  {itemV1?.name}
                                  <div className="mt-0.5">
                                    {itemV1?.submenuV2 && (
                                      <ChevronDown size={15} />
                                    )}
                                  </div>
                                  {itemV1?.submenuV2 &&
                                    hoveredItemId2 === itemV1?.id && (
                                      <ul
                                        className={` absolute ${
                                          itemV1?.submenuV2?.length <= 6
                                            ? "h-auto"
                                            : "!h-[30rem] top-0 !-mt-0 overflow-y-scroll"
                                        }  left-full !-mt-3 bg-white shadow-md py-3 border w-full`}
                                      >
                                        {itemV1?.submenuV2?.map(
                                          (itemV2: any, index: number) => (
                                            <>
                                              <li
                                                key={index}
                                                className="px-5 py-2"
                                              >
                                                <Link
                                                  href={itemV2?.url}
                                                  className="text-gray-800 py-3"
                                                  onMouseEnter={() => {
                                                    if (itemV2?.submenuV3) {
                                                      setHoveredItemId3(
                                                        itemV2.id
                                                      );
                                                    }
                                                  }}
                                                  onMouseLeave={() => {
                                                    setHoveredItemId3(null);
                                                  }}
                                                >
                                                  {itemV2.name}
                                                  {/* {itemV2?.submenuV3 &&
                                                    hoveredItemId3 ===
                                                      itemV2.id && (
                                                      <ul
                                                        className={`absolute left-full bg-white shadow-md py-3 border w-full`}
                                                      >
                                                        {itemV2.submenuV3.map(
                                                          (itemV3) => (
                                                            <li
                                                              key={itemV3.id}
                                                              className="px-5 py-2"
                                                            >
                                                              <Link
                                                                href={
                                                                  itemV3.url
                                                                }
                                                                className="text-gray-800 my-3"
                                                              >
                                                                {itemV3.name}
                                                              </Link>
                                                            </li>
                                                          )
                                                        )}
                                                      </ul>
                                                    )} */}
                                                </Link>
                                              </li>
                                            </>
                                          )
                                        )}
                                      </ul>
                                    )}
                                </li>
                              </Link>
                            );
                          })}
                        </ul>
                      </>
                    )}
                  </Link>
                </li>
              }
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
};

export default Menu;
