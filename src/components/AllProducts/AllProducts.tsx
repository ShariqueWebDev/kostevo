"use client"; // Indicates this is a client component

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
const AllProductsClient = ({ listMenuData }: { listMenuData: any }) => {
  const pathname = usePathname();

  return (
    <div className="">
      {listMenuData?.map((item: any, index: number) => {
        let isActive = pathname === `/all-products/${item.slug}`;
        return (
          <div className="" key={item?.id}>
            <ul className="space-y-3">
              <Link href={`/all-products/${item?.slug}`}>
                <li
                  className={`heading-all mb-3 hover:bg-white text-sm p-2  font-medium border-b  flex items-center gap-2 ${
                    isActive ? "bg-white hover:bg-gray-300" : ""
                  } `}
                >
                  {item?.title}
                  <ArrowRight size={15} />
                </li>
              </Link>
              {/* </Link> */}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default AllProductsClient;
