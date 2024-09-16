"use client";
import { useEffect, useState } from "react";
import FiltredBlogs from "./blogs/FiltredBlogs";
import FiltredBlogsHead from "./blogs/FiltredBlogsHead";

interface Category {
  id: string;
  name: string;
}

interface BlogAttributes {
  title: string;
  slug: string;
  publishedAt: string;
  cover: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  category: string;
}

interface Blog {
  id: string;
  attributes: BlogAttributes;
}

interface TitleData {
  title: string;
  highlighted_title: string;
}

interface BlogsFilterProps {
  categories: Category[];
  titleData: TitleData;
  blogs: Blog[];
}

export default function BlogsFilter({
  categories,
  titleData,
  blogs,
}: BlogsFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [filtredPosts, setFiltredPosts] = useState<Blog[]>([]);

  useEffect(() => {
    let posts;
    if (activeCategory === "All") {
      posts = blogs;
    } else {
      posts = blogs?.filter(
        (post: Blog) => post.attributes.category === activeCategory
      );
    }

    setFiltredPosts(posts);
  }, [activeCategory, blogs]);

  const handleActiveCategory = (categoryName: string) => {
    setActiveCategory(categoryName);
  };

  return (
    <section>
      {/* filter section */}
      <div className='mb-20 mt-24'>
        <FiltredBlogsHead
          categories={categories}
          titleData={titleData}
        />
      </div>
      <FiltredBlogs blogs={filtredPosts} />
    </section>
  );
}
