"use client";
import React from "react";
import { useRouter } from "next/navigation";

function BtnClearParams() {
  const router = useRouter();

  const handleClearParams = (e: any) => {
    e.preventDefault();
    const newURL = new URLSearchParams(window.location.search);
    if (
      !newURL.has("model") &&
      !newURL.has("manufacturer") &&
      !newURL.has("fuel") &&
      !newURL.has("year")
    )
      return;

    newURL.delete("model");
    newURL.delete("manufacturer");
    newURL.delete("fuel");
    newURL.delete("year");
    const newPathname = `${window.location.pathname}?${newURL.toString()}`;

    router.push(newPathname);
  };

  return (
    <button
      onClick={handleClearParams}
      className="mt-4 bg-primary-blue-100 w-fit py-2 px-4 rounded-full font-bold capitalize"
      type="button"
    >
      clear
    </button>
  );
}

export default BtnClearParams;
