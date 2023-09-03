"use client";
import React, { useState } from "react";
import { SearchManuFacturer, SearchButton } from "@/components/index";
import Image from "next/image";
import { useRouter } from "next/navigation";

function SearchBar() {
  const [manuFacturer, setManuFacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manuFacturer === "" && model === "") {
      return alert("Please Fill In The Search Bar");
    }

    updateSearchParams(model.toLowerCase(), manuFacturer.toLowerCase());
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manufacturer) {
      searchParams.set("manufacturer", manuFacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManuFacturer
          manuFacturer={manuFacturer}
          setManuFacturer={setManuFacturer}
        />
        <SearchButton otherClasses={`sm:hidden`} />
      </div>
      <div className="searchbar__item">
        <Image
          className="absolute w-[20px] h-[20px] ml-4"
          src={`/model-icon.png`}
          width={25}
          height={25}
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
}

export default SearchBar;
