// "use client";
// import { SubMenuForAbout, SubMenuForProduct } from "@/lib/SubMenuForMobile";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// import { IoMdClose } from "react-icons/io";

// const SubMenuForMobile = ({ name = "Product" }: { name: string }) => {
//   const [showSubMenuForMobile, setShowSubMenuForMobile] =
//     useState("-translate-x-full");

//   return (
//     <div>
//       <>
//         {
//           <div
//             className={`w-[70%] transition-all duration-300 absolute ${""} bg-white top-0 z-[300] h-svh max-sm:w-full`}
//           >
//             <div className="w-14 m-3">
//               {/* <Image href="/logo.png" alt="" /> */}
//             </div>
//             {
//               <ul className="gap-8 z-[200] pt-4 pl-3 text-black bg-white">
//                 {SubMenuForProduct?.map((item: any) => {
//                   return (
//                     <React.Fragment key={item.id}>
//                       <div className="flex items-center justify-between">
//                         <li
//                           className={` cursor-pointer text-sm p-2 mb-2 text-black`}
//                         >
//                           <Link
//                             href={`/catalog/${item?.slug}`}
//                             className={""}
//                             onClick={() => {}}
//                             // onMouseEnter={() => handleMouseEnter(item.name)}
//                             // onMouseLeave={handleMouseLeave}
//                           >
//                             {item?.name}
//                           </Link>
//                         </li>
//                       </div>
//                     </React.Fragment>
//                   );
//                 })}
//               </ul>
//             }
//             <p className="absolute top-5 right-3 " onClick={() => {}}>
//               {<IoMdClose />}
//             </p>
//           </div>
//         }
//       </>
//     </div>
//   );
// };

// export default SubMenuForMobile;
