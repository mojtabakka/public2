import { Drawer, Popover } from "@mui/material";
import React, { ReactElement, useState } from "react";
import { Icon } from "@iconify/react";
import { isEmpty } from "lodash";

interface PropsType {
  sheetTitle: ReactElement;
  icon: string;
  items: Array<{
    color: string;
    id?: number;
    title?: string;
    bgColor?: string;
    border?: string;
    icon?: string;
    secondIcon?: string;
    subTitle: string;
    url: string;
  }>;
}
export default function PopoverListIcon(props: PropsType) {
  const { items, icon, sheetTitle } = props;

  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className=" relative">
      <Icon
        icon={icon}
        className="   cursor-pointer text-2xl "
        onClick={() => setOpen(true)}
      />

      <Popover
        sx={{ display: { xs: "none", md: "none", lg: "block" } }}
        className=" absolute top-10 left-5 "
        id={"helo"}
        open={open}
        onClose={() => setOpen(false)}
      >
        <div
          dir="rtl"
          id="dropdown"
          className={`  w-full  ${"hidden  lg:inline-block "}  z-10   bg-white divide-y divide-gray-100 rounded shadow-xl w-52 dark:bg-gray-700 `}
        >
          <ul
            className=" text-sm text-gray-700 dark:text-gray-200  w-full "
            aria-labelledby="dropdownDefaultButton"
            // key={key}
          >
            {!isEmpty(items) &&
              items.map((item, index) => (
                <span key={item.id ? index + item.id : ""}>
                  <li
                    // onClick={() => onClickItem(item)}
                    style={{
                      backgroundColor: item?.bgColor,
                      color: item?.color,
                    }}
                    className=" rounded  w-100 w-full "
                    key={item.id}
                  >
                    <div className="w-full" key={item.id}>
                      <a
                        href="#"
                        className="block  rounded  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-right"
                      >
                        <div className="flex items-center w-full  py-4 justify-between ">
                          <div className="flex items-center">
                            <span className="px-2">{item?.icon}</span>
                            <div>
                              <span> {item?.title} </span>
                              {item?.subTitle && (
                                <div className="text-right text-xs">
                                  {item?.subTitle}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="px-2"> {item?.secondIcon} </div>
                        </div>
                      </a>
                    </div>
                  </li>
                  {item?.border && <div className="border"></div>}
                </span>
              ))}
          </ul>
        </div>
      </Popover>

      <Drawer
        open={open}
        anchor="bottom"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "block", md: "block", lg: "none" } }}
      >
        <div className="p-3 ">
          {sheetTitle}

          {items.map((item, index) => (
            <div
              key={item.id ? index + item?.id : index}
              // key={index + item.id}
              className={`flex w-full mt-3 rounded cursor-pointer p-4 items-center border ${item.className}`}
              // onClick={() => onClickItem(item)}
            >
              <div className={`   rounded  text-sm w-full `}>
                <div className="text-sm">{item.title}</div>
                <span className="text-gray-400 text-xs">{item.subTitle}</span>
              </div>
              <div>{item.icon}</div>
            </div>
          ))}
        </div>
      </Drawer>
    </div>
  );
}
