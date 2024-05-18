import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    readed: "",
    read: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    const { name, email, readed, read } = data;
    if (name && email && readed && read) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/status`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const statusRes = await fetchData.json();

      console.log(statusRes);
      toast(statusRes.message);
      if ((statusRes, alert)) {
        // toast("Hooray noted ");
        navigate("/");
      }
      setData(() => {
        return {
          name: "",
          email: "",
          readed: "",
          read: "",
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
        <label htmlFor="name" className="my-1">
          Pen Name
        </label>
        <input
          type={"text"}
          id="name"
          name="name"
          className="bg-slate-200 p-1 my-1 rounded"
          onChange={handleOnChange}
          autoComplete="on"
          value={data.name}
        />

        <label htmlFor="email" className="my-1">
          Email
        </label>
        <input
          type={"text"}
          id="email"
          name="email"
          className="bg-slate-200 p-1 my-1 rounded"
          onChange={handleOnChange}
          autoComplete="on"
          value={data.email}
        />

        <label htmlFor="readed" className="my-1">
          Readed
        </label>
        <input
          type={"text"}
          id="readed"
          name="readed"
          className="bg-slate-200 p-1 my-1 rounded"
          onChange={handleOnChange}
          autoComplete="on"
          value={data.readed}
        />

        <label htmlFor="read" className="my-1">
          Read
        </label>
        <input
          type={"text"}
          id="read"
          name="read"
          className="bg-slate-200 p-1 my-1 rounded"
          onChange={handleOnChange}
          autoComplete="on"
          value={data.read}
        />

        {/* <label htmlFor="amount" className="my-1">
          Amount
        </label>
        <input
          type={"text"}
          id="amount"
          name="amount"
          className="bg-slate-200 p-1 my-1 rounded"
          onChange={handleOnChange}
          autoComplete="on"
          value={data.amount}
        /> */}

        <button className="bg-red-500 hover:bg-red-600 text-white text-lg font-medium my-2 drop-shadow rounded">
          Commit
        </button>
      </form>
    </div>
  );
};

export default Order;
