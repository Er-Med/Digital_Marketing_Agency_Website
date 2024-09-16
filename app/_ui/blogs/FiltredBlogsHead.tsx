"use client";
import clsx from "clsx";
import Title from "../Title";
import { useState } from "react";

// Define interfaces for the props
interface Category {
  id: string;
  name: string;
}

interface TitleData {
  title: string;
  highlighted_title: string;
}

interface FiltredBlogsHeadProps {
  titleData: TitleData;
  categories: Category[];
}

export default function FiltredBlogsHead({
  titleData,
  categories,
}: FiltredBlogsHeadProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const handleActiveCategory = (categoryName: string) => {
    setActiveCategory(categoryName);
  };

  return (
    <div className='flex flex-col lg:flex-row gap-y-6 justify-between items-center lg:w-[95%] mx-auto'>
      <Title
        text={titleData.title}
        highlited={titleData.highlighted_title}
        textColor='--black_color'
      />
      <ul className='flex flex-wrap justify-center md:justify-start gap-2  *:border-2 *:border-[--primary_color] *:rounded-full  *:cursor-default  *:duration-200 '>
        <li
          className={clsx(
            "py-3 px-6 hover:text-white hover:bg-[--primary_color] font-semibold",
            {
              "text-white bg-[--primary_color] font-semibold":
                activeCategory === "All",
            }
          )}
          onClick={() => {
            handleActiveCategory("All");
          }}>
          All
        </li>

        {categories.map((category) => (
          <li
            className={clsx(
              "py-3 px-6 hover:text-white hover:bg-[--primary_color] font-semibold",
              {
                "text-white bg-[--primary_color] font-semibold":
                  category.name === activeCategory,
              }
            )}
            key={category.id}
            onClick={() => {
              handleActiveCategory(category.name);
            }}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
