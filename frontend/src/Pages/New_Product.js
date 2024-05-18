import React, { useState, useRef } from "react";
import { BiUpload } from "react-icons/bi";
import { ImagetoBase64 } from "../utility/ImagetoBase64";
import { toast } from "react-hot-toast";

const New_Product = () => {
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    file:"",
    description: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const uploadImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);
    //console.log(data);
    //console.log(e.files);
    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };

  
  // const fileInputRef = useRef(null);
  // const uploadFile = async (e) => {
  //   const data = await fileInputRef(fileInputRef.current.files[0])
  //   setData((preve) => {
  //     return {
  //       ...preve,
  //       file: data,
  //     };
  //   });
  // }


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    const { name, category, image, price, file} = data;
    if (name && category && image && price && file) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/uploadProduct`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const fetchRes = await fetchData.json();

      console.log(fetchRes);
      toast(fetchRes.message);
      setData(() => {
        return {
          name: "",
          category: "",
          image: "",
          price: "",
          file:"",
          description: "",
        };
      });
    } else {
      toast("Enter Required Fields");
    }
  };
  return (
    <div className="p-4">
      <form
        className="m-auto w-full max-w-md shadow flex flex-col p-3 bg-white "
        onSubmit={handleSubmit}
      >
        <label htmlFor="category" className="my-1">
          Semesters
        </label>
        <select
          className="bg-slate-200 p-1 my-1 rounded"
          id="category"
          name="category"
          onChange={handleOnChange}
          autoComplete="on"
          value={data.category}
        >
          <option value={""}>select semesters</option>
          <option value={"sem-1"}>Sem-1</option>
          <option value={"sem-2"}>Sem-2</option>
          <option value={"sem-3"}>Sem-3</option>
          <option value={"sem-4"}>Sem-4</option>
          <option value={"sem-5"}>Sem-5</option>
          <option value={"sem-6"}>Sem-6</option>
        </select>
        <label htmlFor="name">Subject</label>
        <input
          type={"text"}
          id="name"
          name="name"
          className="bg-slate-200 p-1 my-1 rounded"
          onChange={handleOnChange}
          autoComplete="on"
          value={data.name}
        />

        <label htmlFor="price" className="my-1">
          Unit
        </label>
        <input
          type={"text"}
          id="price"
          name="price"
          className="bg-slate-200 p-1 my-1 rounded"
          onChange={handleOnChange}
          autoComplete="on"
          value={data.price}
        />

        <label htmlFor="file">File URL</label>
        <input
          type={"text"}
          id="file"
          name="file"
          className="bg-slate-200 p-1 my-1 rounded"
          onChange={handleOnChange}
          autoComplete="on"
          value={data.file}
        />

        <label htmlFor="image" className="my-1">
          Image
          <div className="h-40 w-full bg-slate-200 my-1 rounded flex items-center justify-center cursor-pointer">
            {data.image ? (
              <img src={data.image} className="h-full" />
            ) : (
              <span className="text-5xl">
                <BiUpload />
              </span>
            )}

            <input
              type={"file"}
              accept="image/*"
              id="image"
              name="image"
              onChange={uploadImage}
              className="hidden"
              autoComplete="on"
            />
          </div>
        </label>

        




        {/* <label htmlFor="file">
            File :<br />
          </label>
          <div className="h-40 w-full bg-slate-200 my-1 rounded flex items-center justify-center cursor-pointer">
          <input type="file" 
            accept="application-pdf/*"
              id="file"
              name="file"
              onChange={uploadFile}
              className="hidden"
            autoComplete="on"
            value={data.file} />
        </div> */}
        




        <label htmlFor="description">Description</label>
        <textarea
          rows={3}
          id="description"
          name="description"
          className="bg-slate-200 p-1 my-1 rounded resize-none"
          onChange={handleOnChange}
          autoComplete="on"
          value={data.description}
        ></textarea>
        <button className="bg-red-500 hover:bg-red-600 text-white text-lg font-medium my-2 drop-shadow rounded">
          Save
        </button>
      </form>
    </div>
  );
};

export default New_Product;
