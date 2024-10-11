import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../slice/ProductSlice";
import OrderButton from "../components/button/OrderButton";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import banner from "../assets/banner1.png";
import logo from "../assets/logo.jpg";
import cashewnuts from "../assets/cashewnuts.png";
import dates from "../assets/dates.png";
import fig from "../assets/fig.png";
import graps from "../assets/graps.png";
import honeydryfruits from "../assets/honeydryfruits.png";
import karondacandy from "../assets/karondacandy.png";
import mixednuts from "../assets/mixednuts.png";
import pista from "../assets/pista.png";
import walnut from "../assets/walnut.png";
import almond from "../assets/almond.png";
import blackgraps from "../assets/blackgraps.png";
import greenpista from "../assets/GREENPISTA.png";
import imamla from "../assets/imAMLA.png";
import amla from "../assets/AMLA.png";
import apricut from "../assets/APRICUT.png";
import honeyfig from "../assets/honeyfig.png";


const MAX_PRODUCTS = 6;

const dryFruites = [
  {
    title: "Almonds 250g",
    img: almond,
    price: 300,
    stock: true,
  },
  {
    title: "Black Dry Grapes 250g",
    img:blackgraps,
    price: 170,
    stock: true,
  },
  {
    title: "Black Dates 250g",
    img: dates,
    price: 130,
    stock: true,
  },
  {
    title: "Cashewnuts 250g",
    img: cashewnuts,
    price: 300,
    stock: true,
  },
  {
    title: "Dry Grapes 250g",
    img: graps,
    price: 160,
    stock: true,
  },
  {
    title: "Sliced Dry figs 250g",
    img: fig,
    price: 450,
    stock: true,
  },
  {
    title: "Dry Amla 250g",
    img: amla,
    price: 160,
    stock: true,
  },
  {
    title: "Pistha Salted 250g",
    img: pista,
    price: 450,
    stock: true,
  },
  {
    title: "Pistha green 250g",
    img: greenpista,
    price: 650,
    stock: true,
  },
  {
    title: "Kiwi 250g",
    img: imamla,
    price: 240,
    stock: true,
  },  
  {
    title: "Walnut 150g",
    img: walnut,
    price: 240,
    stock: true,
  },
  {
    title: "Apricot 250g",
    img: apricut,
    price: 350,
    stock: true,
  },
  {
    title: "Honey Figs 150g",
    img: honeyfig,
    price: 500,
    stock: true,
  },
  
];

const Product = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [products, setProducts] = useState([]);
  const [alertOpen, setAlertOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const [productQuantities, setProductQuantities] = useState({});

  const [upQuantity, setUpQuantity] = useState(0);

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

  const DataHandle = (data, action) => {
    let quantity = productQuantities[data.title] || 0;

    if (action === "increment") {
      if (products.length >= MAX_PRODUCTS) {
        setAlertOpen(true);
        return;
      }
      quantity += 1;
      setUpQuantity(upQuantity + 1);
      setTotal((prevTotal) => prevTotal + data.price);
      setProducts((prevProducts) => [...prevProducts, data]);
      dispatch(addProduct(data));
    } else if (action === "decrement" && quantity > 0) {
      quantity -= 1;
      setUpQuantity(upQuantity - 1);
      setTotal((prevTotal) => prevTotal - data.price);
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.title !== data.title)
      );
    }

    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [data.title]: quantity,
    }));

    if (action === "increment") {
      toast.success(`${data.title} added successfully!`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleSubmit = () => {
    if (products.length == MAX_PRODUCTS) {
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
            className="mt-[19vh] w-28 md:w-52 rounded-full md:mt-[56vh] border-4 border-gray-500 "
          />
        </div>
      </div>

      <div className="flex justify-center gap-5 text-center mt-20 sticky top-0 md:mt-[13vh] font-rubik p-4 bg-white  z-50">
        <div className="px-10 py-4 rounded-md border-2">
          <h1 className="font-poppins font-semibold text-1xl">No. of Products</h1>
          <h2 className="text-2xl">{upQuantity}</h2>
        </div>
        <div className="px-10 py-4 rounded-md border-2">
          <h1 className="font-poppins font-semibold text-1xl">Total Amount</h1>
          <h2 className="text-2xl">₹ : {total}</h2>
        </div>
      </div>

      <div>
        <div className="flex justify-center mt-3 font-rubik">
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
                  <h1 className="text-md font-medium mb-2">
                    Price: ₹{data.price}
                  </h1>

                  <div className="flex space-x-2 items-center rounded-lg">
                    <button
                      className="bg-green-500 text-white hover:bg-green-300 font-semibold py-2 px-4 rounded-full"
                      onClick={() => DataHandle(data, "increment")}
                    >
                      +
                    </button>
                    <div>
                      <h1 className="bg-green-500 px-5 py-2 rounded-full text-white">
                        {productQuantities[data.title] || 0}
                      </h1>
                    </div>
                    <button
                      className="bg-green-500 text-white hover:bg-green-300 font-semibold py-2 px-4 rounded-full"
                      onClick={() => DataHandle(data, "decrement")}
                    >
                      -
                    </button>
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
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-red-600 text-lg mb-4">
              Maximum of {MAX_PRODUCTS} products allowed!
            </h1>
            <button
              onClick={handleCloseAlert}
              className="bg-blue-500 hover:bg-blue-300 text-white font-semibold py-2 px-4 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="flex justify-center mt-8">
        <OrderButton onClick={handleSubmit} disabled={products.length === 0}>
          Preview Box
        </OrderButton>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Product;
