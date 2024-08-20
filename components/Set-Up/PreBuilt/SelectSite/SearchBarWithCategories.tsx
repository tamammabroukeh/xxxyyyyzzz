"use client";
import { Input } from "@nextui-org/input";
import { IconSearch } from "@tabler/icons-react";
import { useState, useEffect, ChangeEvent } from "react";

const categories = [
  { id: crypto.randomUUID(), title: "All" },
  { id: crypto.randomUUID(), title: "Blog" },
  { id: crypto.randomUUID(), title: "Nature" },
  { id: crypto.randomUUID(), title: "Ecommerce" },
  { id: crypto.randomUUID(), title: "Lawyer" },
  { id: crypto.randomUUID(), title: "Hotel" },
  { id: crypto.randomUUID(), title: "Beauty" },
  { id: crypto.randomUUID(), title: "Beauty" },
  { id: crypto.randomUUID(), title: "Beauty" },
  { id: crypto.randomUUID(), title: "Beauty" },
  { id: crypto.randomUUID(), title: "Beauty" },
  { id: crypto.randomUUID(), title: "Beauty" },
  { id: crypto.randomUUID(), title: "Beauty" },
  { id: crypto.randomUUID(), title: "Beauty" },
];
const SearchBarWithCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchCategory, setSearchCategory] = useState<
    string | (readonly string[] & string) | undefined
  >(undefined);

  useEffect(() => {
    const savedCategory = localStorage.getItem("selectedCategory");

    setSelectedCategory(savedCategory || "All");
  }, []);

  useEffect(() => {
    localStorage.setItem("searchCategory", searchCategory as string);
  }, [searchCategory]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchCategory(e.target.value);
  };

  const handleCategoryClick = (title: string) => {
    setSelectedCategory(title);
    localStorage.setItem("selectedCategory", title);
  };
  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => e.preventDefault();

  const renderCategories = () =>
    categories.map((cat) => {
      return (
        <button
          key={cat.id}
          className={`
              ${selectedCategory === cat.title ? "bg-slate-300 border-1" : ""}
              text-black-200 text-sm md:text-base lg:text-md px-3 md:px-4 lg:px-5 rounded-2xl transition-colors duration-300 hover:bg-slate-300`}
          type="button"
          onClick={() => handleCategoryClick(cat.title)}
        >
          {cat.title}
        </button>
      );
    });
    // console.log(searchCategory);
    // console.log(selectedCategory);

  return (
    <div
      className="flex flex-wrap md:flex-nowrap justify-start items-center gap-5"
      // onSubmit={handleSubmit}
    >
      <div className="w-full md:w-[80%] lg:w-[50%] xl:w-[40%]">
        <Input
          classNames={{
            input: "text-slate-100",
            inputWrapper: "text-slate-100",
          }}
          placeholder="Search"
          size="md"
          startContent={<IconSearch className="text-slate-100" />}
          type="type"
          value={searchCategory}
          variant="faded"
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-wrap gap-2 md:gap-2.5 lg:gap-4 xl:gap-5">
        {renderCategories()}
      </div>
    </div>
  );
};

export default SearchBarWithCategories;
