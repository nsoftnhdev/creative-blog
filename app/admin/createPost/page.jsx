"use client";
import { assets } from "@/Assets/assets";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "Nurie",
    authorImg: "/author_img.png",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
    console.log(data);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImg", data.authorImg);
    formData.append("image", image);
    const response = await axios.post("/api/blog", formData);
    if (response.data.success) {
      toast.success(response.data.msg);
      setImage(false);
      setData({
        title: "",
        description: "",
        category: "Startup",
        author: "Nurie",
        authorImg: "/author_img.png",
      })
    } else {
      toast.error("Error");
    }
  };
    
  return (
    <>
      <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
        <p className="text-xl">Upload thumbnail</p>
        <label htmlFor="image">
          <Image
            className="mt-4"
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            width={140}
            height={70}
            alt=""
          />
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          hidden
          required
        ></input>
        <p className="text-xl mt-4">Blog Title</p>
        <input
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          type="text"
          placeholder="Type here"
          required
          name="title"
          onChange={onChangeHandler}
          value={data.title}
        />
        <p className="text-xl mt-4">Blog Description</p>
        <textarea
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          type="Write content here"
          placeholder="Type here"
          required
          rows={6}
          name="description"
          onChange={onChangeHandler}
          value={data.description}
        />
        <p className="text-xl mt-4">Blog category</p>
        <select
          name="category"
          className="w-40 mt-4 px-4 py-3 border text-gray-500"
          onChange={onChangeHandler}
          value={data.category}
        >
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Programming">Programming</option>
          <option value="Animals">Animals</option>
        </select>
        <br />
        <button className="mt-8 w-40 h-12 bg-black text-white" type="submit">
          Add
        </button>
      </form>
    </>
  );
};

export default page;
