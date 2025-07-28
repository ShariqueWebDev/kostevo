"use client";
// import { BACKEND_URL } from "@/app/layout";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";

interface MenuMobileProps {
  // showCatMenu: boolean;
  // setShowCatMenu: React.Dispatch<React.SetStateAction<boolean>>;
  // subMenuData: any; // Adjust the type for `subMenuData` if you know the specific structure
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>; // Add this prop
}

const MenuMobile: React.FC<MenuMobileProps> = ({
  // showCatMenu,
  // setShowCatMenu,
  setMobileMenu,
  // subMenuData,
}) => {
  const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);
  const [hoveredItemId2, setHoveredItemId2] = useState<number | null>(null);
  const [subMenuHeight, setSubMenuHeight] = useState<number | null>(null);
  const [subMenuHeight2, setSubMenuHeight2] = useState<number | null>(null);

  const [categoryDataForMenu, setCategoryDataForMenu] = useState([]);

  const fetchCategoryMainCategory = async () => {
    try {
      const response = await fetch(
        `${process.env.BACKEND_URL}/wp-json/custom/v1/getAllMainCat`
      );
      const data = await response.json();
      setCategoryDataForMenu(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchCategoryMainCategory();
  }, []);

  const data = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 7,
      name: "About Us",
      url: "/about-us",
      subMenu: true,
      subMenuV1: [
        {
          id: 4,
          name: "Facilities",
          url: "#",
          subMenu: true,
          subMenuV2: [
            {
              id: 15,
              name: "Rabale Unit",
              url: "/manufacture-rabale",
            },
            {
              id: 16,
              name: "Uttar Shiv Unit",
              url: "/manufacture-uttar-shiv",
            },
          ],
        },
        {
          id: 3,
          name: "Specialization",
          url: "#",
          subMenu: true,
          subMenuV2: [
            {
              id: 13,
              name: "Thread",
              url: "/specialization-thread",
            },
            {
              id: 14,
              name: "Material",
              url: "/specialization-material",
            },
          ],
        },
        {
          id: 18,
          name: "Policy",
          url: "/policies",
        },
        // {
        //   id: 19,
        //   name: "Future Plan",
        //   url: "/future-plan",
        // },
        {
          id: 20,
          name: "QA / QC",
          url: "/certifications",
        },
      ],
    },

    {
      id: 2,
      name: "Product & Services",
      url: "/all-products/compression-tube-fittings",
      subMenu: true,
      subMenuV1: categoryDataForMenu?.map((item: any, index: number) => {
        return {
          id: item?.id,
          name: item?.name,
          url: `${
            item?.subcategories
              ? `/sub-category-products/${item?.slug}`
              : `/products/${item?.slug}`
          }`,
        };
      }),
    },

    {
      id: 22,
      name: "RFQ",
      url: "/rfq",
    },
    {
      id: 6,
      name: "Client Resource",
      url: "/resources",
    },

    {
      id: 8,
      name: "Career",
      url: "/career",
    },
    {
      id: 21,
      name: "Contact Us",
      url: "/contact-us",
    },
  ];

  // const subMenuData = [
  //   { id: 1, name: "Oral", url: "/category/oral" },
  //   { id: 2, name: "Injectables", url: "/category/injectable" },
  // ];

  const ToggleSubmenuHandler = (id: number) => {
    setSubMenuHeight((prev) => (prev === id ? null : id));
  };
  const ToggleNestedmenuHandler = (id: number) => {
    setSubMenuHeight2((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <ul className="flex px-3 flex-col lg:hidden font-normal text-lg fixed top-[88px] z-50 left-0 w-full h-[calc(100svh-70px)] bg-white border-t text-black overflow-y-auto">
        {data.map((item) => {
          const isActive = subMenuHeight === item.id;
          return (
            <React.Fragment key={item?.id}>
              {
                <li className="text-gray-700 cursor-pointer">
                  {item.url === "#" ? (
                    <div
                      className="flex justify-between"
                      onClick={() => {
                        if (item?.subMenuV1) {
                          ToggleSubmenuHandler(item.id)
                        }
                      }}
                    >
                      <span className=" hover:bg-white px-1  text-[14px] py-2.5 ">
                        {item.name}
                      </span>
                      {item?.subMenu && <ChevronDown size={15} />}
                    </div>
                  ) : (
                    <div>
                      <div className="flex justify-between items-center">
                        <Link
                          href={item.url}
                          className="hover:bg-white px-1  text-[14px] py-3 "
                          onClick={() => {
                            setMobileMenu(false);

                          }}
                        >
                          {item.name}
                        </Link>
                        {item?.subMenu && (
                          <ChevronDown
                            className={`${
                              subMenuHeight && hoveredItemId === item.id
                                ? "rotate-180"
                                : ""
                            }`}
                            size={15}
                            onClick={() => {
                              if (item?.subMenuV1) {
                                ToggleSubmenuHandler(item.id)
                                setHoveredItemId(item.id);
                              }
                            }}
                          />
                        )}
                      </div>
                      {item?.subMenu &&
                        subMenuHeight &&
                        hoveredItemId === item?.id && (
                          <>
                            <ul
                              className={`${subMenuHeight} transition-all ml-2 duration-500 rounded-md  ${""}`}
                            >
                              {item?.subMenuV1.map((itemV1, index) => {

                                return (
                                  <>
                                    <li className="hover:bg-white px-1  text-[14px] py-2.5 ">
                                      {itemV1.url === "#" ? (
                                        <div
                                          className="flex items-center justify-between"
                                          onClick={() => {
                                            if (itemV1?.subMenuV2) {
                                              ToggleNestedmenuHandler(itemV1.id)
                                              setHoveredItemId2(itemV1.id);
                                            }
                                          }}
                                        >
                                          <span className="">
                                            {itemV1.name}
                                          </span>
                                          {itemV1?.subMenuV2 && (
                                            <ChevronDown
                                              size={15}
                                              className={`${
                                                subMenuHeight2 &&
                                                hoveredItemId2 === itemV1.id
                                                  ? "rotate-180"
                                                  : ""
                                              }`}
                                            />
                                          )}
                                        </div>
                                      ) : (
                                        <div className="">
                                          <Link
                                            href={itemV1.url}
                                            onClick={() => {
                                              setMobileMenu(false);
                                            }}
                                          >
                                            {itemV1.name}
                                          </Link>
                                          {/* {itemV1?.subMenuV2 && (
                                            <ChevronDown
                                              size={15}
                                            
                                            />
                                          )} */}
                                        </div>
                                      )}
                                    </li>
                                    {itemV1?.subMenuV2 &&
                                      subMenuHeight2 &&
                                      hoveredItemId2 === itemV1?.id && (
                                        <ul
                                          className={`ml-4 text-[14px] my-3 rounded-md`}
                                        >
                                          {itemV1?.subMenuV2?.map(
                                            (itemV2: any, index: number) => (
                                              <>
                                                <li
                                                  key={index}
                                                  className="hover:bg-white px-1  text-[14px] py-2.5 "
                                                  onClick={() => {
                                                    setMobileMenu(false);
                                                  }}
                                                >
                                                  <Link
                                                    href={itemV2?.url}
                                                    className="text-gray-800  "
                                                  >
                                                    {itemV2.name}
                                                  </Link>
                                                </li>
                                              </>
                                            )
                                          )}
                                        </ul>
                                      )}
                                    {/* <Link
                                      href={itemV1?.url}
                                      onMouseEnter={(e) => {
                                        if (itemV1?.subMenuV2) {
                                          // setShowSubMenu("translate-y-[120px]");
                                        }
                                      }}
                                      onMouseLeave={(e) => {
                                        if (itemV1?.subMenuV2) {
                                          setHoveredItemId2(null);
                                          setSubMenuHeight2(false);
                                          // setShowSubMenu("translate-y-[120px]");
                                        }
                                      }}
                                      onClick={() => {
                                        if (!itemV1?.subMenuV2) {
                                          setMobileMenu(false);
                                        }
                                      }}
                                    >
                                      <li
                                        className={`py-5 w-full px-2 ${
                                          index !== item?.subMenuV1?.length - 1
                                            ? "border-b "
                                            : ""
                                        } text-[14px] text-nowrap rounded-md hover:bg-[#f7f7f7] hover:text-gray-800 pl-5 flex gap-3`}
                                      >
                                        {itemV1?.name}
                                        <div className="mt-0.5">
                                          {itemV1?.subMenuV2 && (
                                            <ChevronDown size={15} />
                                          )}
                                        </div>
                                      </li>
                                      {itemV1?.subMenuV2 &&
                                        hoveredItemId2 === itemV1?.id && (
                                          <ul
                                            className={`mx-5 text-[14px] my-3 border rounded-md`}
                                          >
                                            {itemV1?.subMenuV2?.map(
                                              (itemV2: any, index: number) => (
                                                <>
                                                  <li
                                                    key={index}
                                                    className="mx-5 py-3 border-b"
                                                    onClick={() => {
                                                      setMobileMenu(false);
                                                    }}
                                                  >
                                                    <Link
                                                      href={itemV2?.url}
                                                      className="text-gray-800  "
                                                    >
                                                      {itemV2.name}
                                                    </Link>
                                                  </li>
                                                </>
                                              )
                                            )}
                                          </ul>
                                        )}
                                    </Link> */}
                                  </>
                                );
                              })}
                            </ul>
                          </>
                        )}
                    </div>
                  )}

                  {/* neeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee */}
                  {/* <Link
                    href={item?.url}
                    onMouseEnter={(e) => {
                      if (item?.subMenuV1) {
                        setHoveredItemId(item.id);
                        setSubMenuHeight(true);
                        // setShowSubMenu("translate-y-[120px]");
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (item?.subMenuV1) {
                        setHoveredItemId(null);
                        setSubMenuHeight(false);
                        // setShowSubMenu("translate-y-[120px]");
                      }
                    }}
                    onClick={() => {
                      if (!item?.subMenuV1) {
                        setMobileMenu(false);
                      }
                    }}
                    className=""
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className=""
                        onClick={() => {
                          if (!item?.subMenuV1) {
                            setMobileMenu(false);
                          }
                        }}
                      >
                        {item.name}
                      </span>
                      {item?.subMenu && (
                        <ChevronDown
                          size={15}
                          onClick={() => {
                            if (item?.subMenuV1) {
                              setSubMenuHeight(!subMenuHeight);
                            }
                          }}
                        />
                      )}
                    </div>
                   
                  </Link> */}
                </li>
              }
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
};

export default MenuMobile;
