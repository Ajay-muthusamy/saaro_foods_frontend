import React, { useState } from "react";
import dryFruites from "../json/dryfruit.json";
import { useDispatch } from "react-redux";
import { addProduct } from "../slice/ProductSlice";
import OrderButton from "../components/button/OrderButton";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import banner from '../assets/banner.png'
import logo from '../assets/logo.jpg'

const MAX_PRODUCTS = 6;

const Product = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [products, setProducts] = useState([]);
  const [alertOpen, setAlertOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const [productQuantities, setProductQuantities] = useState({});

  const handleOpenModal = (data) => {
    setImage(data);
    setOpen(true);
  };

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setImage(null);
  };

  const DataHandle = (data) => {
    if (products.length >= MAX_PRODUCTS) {
      setAlertOpen(true);
      return;
    }

    setProducts((prevProducts) => [...prevProducts, data]);
    setTotal((prevTotal) => prevTotal + data.price);

    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [data.title]: (prevQuantities[data.title] || 0) + 1,
    }));

    dispatch(addProduct(data));
    toast.success(`${data.title} added successfully!`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleSubmit = () => {
    if (products.length >= MAX_PRODUCTS) {
      navigate("/preview-box");
    } else {
      return;
    }
  };

  return (
    <section>
      <div className="relative">
        <img src={banner} alt="Logo" className="w-full" />
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={logo}
            alt="Centered Image"
            className="mt-[17vh] w-28 md:w-52 rounded-full md:mt-[48vh] border-4 border-blue-500 md:p-1"
          />
        </div>
      </div>

      <div>
        <div className="flex justify-center mt-20 md:mt-28 font-poppins">
          <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
            {dryFruites.map((data, index) => (
              <div
                key={index}
                className="flex items-center p-4 border-2 rounded space-x-4"
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className="w-32 h-32 object-cover mb-4 rounded-lg"
                  onClick={() => handleOpenModal(data)}
                />
                <div>
                  <h1 className="text-lg font-semibold mb-2">{data.title}</h1>
                  <h1 className="text-md font-medium mb-2">Price: ₹{data.price}</h1>

                  <div className="flex space-x-10 items-center rounded-lg">
                    <button
                      className="bg-green-500 text-white hover:bg-green-300 font-semibold py-2 px-12 rounded-full"
                      onClick={() => DataHandle(data)}
                    >
                      Add
                    </button>
                    <div>
                      <h1 className="bg-green-500 px-5 py-2 rounded-full text-white">
                        {productQuantities[data.title] || 0}
                      </h1>
                    </div>
                  </div>
                </div>
                {!data.stock ? (
                  <span className="text-red-500">Out of stock</span>
                ) : (
                  <span className="text-green-500"></span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleCloseModal}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-black font-bold text-xl"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <img
              src={image.img}
              alt={image?.title}
              className="w-64 h-64 object-cover rounded-lg"
            />

            <h1 className="mt-4 text-center text-lg font-semibold">
              {image?.title}
            </h1>
          </div>
        </div>
      )}

      {alertOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-black font-bold text-xl"
              onClick={handleCloseAlert}
            >
              &times;
            </button>
            <h1 className="text-center text-lg font-semibold">
              You can only add up to 6 products.
            </h1>
            <div className="mt-4 flex justify-center">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleCloseAlert}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-center my-5">
        <OrderButton onClick={handleSubmit} />
      </div>
      <ToastContainer />
    </section>
  );
};

export default Product;
