"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ListFooter {
  listProps: [string, string, string, string];
  stylesList?: string;
}

const FooterList = ({ listProps }: ListFooter) => {
  const list = listProps;
  return (
    <>
      <ul className="flex flex-col gap-5">
        <li>
          <Link className="font-bold" href={`/`}>{`About`}</Link>
        </li>
        {list &&
          list.map((item, index) => (
            <li className="" key={index + 1}>
              <Link className="text-gray-500" href={`/`}>
                {item}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

function Footer() {
  return (
    <footer className="w-full px-2 lg:px-16 py-4 md:py-8 lg:py-12 text-black-100 mt-5 border-t border-gray-100">
      <div className="w-full grid gap-12 md:gap-2 md:grid-cols-5 lg:grid-cols-6">
        <div className=" col-span-2 lg:col-span-3">
          <Link href={`/`}>
            <Image
              src={`/logo.svg`}
              alt="Car Hub Logo"
              width={118}
              height={18}
              className="object-contain"
            />
          </Link>
          <div className="capitalize mt-8">
            <p className="text-base text-gray-700">mohamed salah 2023</p>
            <p className="text-base text-gray-700">
              all rights reserved &copy;
            </p>
          </div>
        </div>
        {/* Lists */}
        <FooterList
          listProps={[
            "How it works",
            "Featured",
            "PartnerShip",
            "Bussiness Relation",
          ]}
          stylesList={`col-span-1`}
        />
        <FooterList
          listProps={[
            "How it works",
            "Featured",
            "PartnerShip",
            "Bussiness Relation",
          ]}
          stylesList={`col-span-1`}
        />
        <FooterList
          listProps={[
            "How it works",
            "Featured",
            "PartnerShip",
            "Bussiness Relation",
          ]}
          stylesList={`col-span-1`}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center mt-12">
        <p>@2023 Mohamed Salah All Rights Reserved</p>
        <div className="flex items-center gap-12">
          <Link href={`/`}>Privacy Policy</Link>
          <Link href={`/`}>Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
