import React from "react";
import Image from "next/image";
import Link from "next/link";
interface PropsType {
  className?: string;
}

export default function Logo(props: PropsType) {
  const { className } = props;
  return (
    <div className={`text-center ${className}`}>
      <Link href="/">
        <Image
          src={"/images/logo.jpeg"}
          alt="Picture of the author"
          width={50}
          height={50}
          className=" inline-block cursor-pointer"
        />
      </Link>
    </div>
  );
}
