import React from "react";
import { Icon } from "@iconify/react";
import PopoverListIcon from "../popover-list-icon";
import Link from "next/link";
import IconTitleSubtitle from "../icon-title-subtitle";

export default function LoginText() {
  const popoverItems = [
    {
      id: 1,
      title: "09124482013",
      bgColor: "white",
      border: true,
      // icon: <BsPersonCircle className=" text-xl inline-block" />,
      // secondIcon: <MdOutlineKeyboardArrowLeft className="" />,
      url: "/profile",
    },

    {
      id: 2,
      title: "سفارش ها",
      bgColor: "white",
      url: "/orders",
      // icon: <BsFillBasket3Fill />,
    },

    {
      id: 3,
      title: "آدرس ها",
      bgColor: "white",
      url: "/address",
      // icon: <GrMapLocation />,
    },
  ];
  return (
    // <div className=" flex gap-3  items-start  ">
    //   <Icon icon="uil:cart" className=" cursor-pointer mt-1" />
    //   <div className=" flex items-center  border-x px-4 cursor-pointer ">
    //     <span className=" px-1 text-xs lg:text-base md:text-base  sm:text-sm text">
    //       <span className=" hidden lg:inline-block md:hidden sm:hidden text">
    //         ثبت نام |
    //       </span>
    //       <span> ورود </span>
    //     </span>
    //   </div>
    // </div>

    <>
      {true ? (
        <div
          //   onClick={handleClicklogin}
          className="  lg:p-4 md:p-2    flex gap-2 items-center "
        >
          <Icon icon="uil:cart" className=" cursor-pointer  text-2xl" />
          <Link
            className="  text-xs lg:text-base md:text-base  sm:text-sm text  font-bold border-x  flex  items-center gap-2 px-4 "
            href={""}
          >
            <Icon icon="tabler:login" className=" text-2xl font-extrabold" />
            <h1>
              <span>ثبت نام |</span>
              ورود
            </h1>
          </Link>
        </div>
      ) : (
        <PopoverListIcon
          sheetTitle={
            <IconTitleSubtitle
              icon={"healthicons:ui-user-profile"}
              title={"مجتبی کریم"}
              subTitle={"09124482013"}
            />
            // <div className="py-1">
            //   <div>
            //     <span className="border border-white bg-white rounded-full">
            //       <span className=" ">
            //         {/* <CgProfile className=" inline-block  text-2xl  lg:text-2xl  md:text-xl sm:text-lg" /> */}
            //         fjfj
            //       </span>
            //     </span>
            //   </div>
            //   <div className=" text-gray-400">مجتبی کریمی</div>
            //   <div className="text-center mt-3 text-gray-400">
            //     09124482013
            //     {/* {localStorage.getItem("phoneNumber")} */}
            //   </div>
            // </div>
          }
          icon="iconamoon:profile-circle-fill"
          items={popoverItems}
        />
      )}
    </>
  );
}
