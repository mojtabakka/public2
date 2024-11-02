"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Drawer } from "@mui/material";

import SearchInput from "../searchInput";
import LoginText from "../login-text";
import Logo from "../logo";
export default function Layout() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <header className="shadow-lg bg-white">
        <div>
          <div
            className=" text-2xl flex justify-between items-center px-4  lg:hidden"
            onClick={() => setIsOpen(true)}
          >
            <Icon icon="gg:menu" />
            <Logo />
          </div>
          <div className=" flex justify-between px-4 gap-14   items-center lg:pt-3    ">
            <Logo className=" hidden lg:inline-block" />
            <SearchInput />
            <LoginText />
          </div>
          <h1
            className="px-6 cursor-pointer lg:text-base text-sm  lg:flex gap-1 pb-4  items-center  hidden    "
            onClick={() => setIsOpen(true)}
          >
            <Icon icon="gg:menu" />
            <div style={{ fontFamily: "shabnam" }}>دسته بندی ها</div>
          </h1>
        </div>
      </header>
      <Drawer open={isOpen} anchor="right" onClose={() => setIsOpen(false)}>
        ffkljfj
      </Drawer>
    </>
  );
}
