import React from "react";
import Back from "../common/back/Back";
import BlogCard from "./BlogCard";
import "./blog.css";

const Blog = () => {
  return (
    <>
      <Back title="Блоги наших учителей" />
      <section className="blog padding">
        <div className="container grid2">
          <BlogCard />
        </div>
      </section>
    </>
  );
};

export default Blog;