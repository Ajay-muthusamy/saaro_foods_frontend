import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { clearProducts } from "../../slice/ProductSlice";
import { useNavigate } from "react-router-dom";

// OrderForm Component
const OrderForm = ({ isOpen, onClose, products, total }) => {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [landMark, setLandmark] = useState("");
  const [address, setAddress] = useState("");

  const [errors, setErrors] = useState({}); // State to track form errors

  // Helper function to validate fields
  const validateFields = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!phoneNo.trim()) {
      newErrors.phoneNo = "Phone number is required";
    } else if (!/^\d{10}$/.test(phoneNo)) {
      newErrors.phoneNo = "Enter a valid 10-digit phone number";
    }
    if (!landMark.trim()) newErrors.landMark = "Pincode is required";
    if (!address.trim()) newErrors.address = "Address is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    const formErrors = validateFields();
    setErrors(formErrors);

    // If there are errors, don't submit the form
    if (Object.keys(formErrors).length > 0) return;

    const orderData = {
      customerDetails: {
        name,
        phoneNo,
        landMark,
        address,
      },
      products,
      total,
    };
    try {
      const response = await axios.post(
        "https://saroma-foods-backend-1.onrender.com/saarofoods/customer-order",
        orderData
      );
      console.log(response.data); // Log the response from the server

      // Show success notification and reset form
      toast.success("Order placed successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setName("");
      setPhoneNo("");
      setLandmark("");
      setAddress("");
      onClose(); // Close the modal after successful submission
    } catch (error) {
      console.error("Error sending order:", error);

      toast.error("Failed to place order. Please try again later.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 font-rubik">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-4">Place Your Order</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`border rounded-md p-2 w-full ${
                errors.name ? "border-red-500" : ""
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-1">Phone No</label>
            <input
              type="tel"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
              className={`border rounded-md p-2 w-full ${
                errors.phoneNo ? "border-red-500" : ""
              }`}
            />
            {errors.phoneNo && (
              <p className="text-red-500 text-sm mt-1">{errors.phoneNo}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-1">Pincode </label>
            <input
              type="text"
              value={landMark}
              onChange={(e) => setLandmark(e.target.value)}
              className={`border rounded-md p-2 w-full ${
                errors.landMark ? "border-red-500" : ""
              }`}
            />
            {errors.landMark && (
              <p className="text-red-500 text-sm mt-1">{errors.landMark}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-1">Address</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className={`border rounded-md p-2 w-full ${
                errors.address ? "border-red-500" : ""
              }`}
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address}</p>
            )}
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 text-white rounded-md px-4 py-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md px-4 py-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const PreviewOrder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const total = useSelector((state) => state.products.total);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const handleBackClick = () => {
    navigate("/");
    dispatch(clearProducts());
  };

  const handleMore = () => {
    navigate("/");
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg font-poppins">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Preview Your Sweet Box
      </h2>
      <div className="flex justify-center">
        <div>
          <div className="overflow-hidden rounded-md shadow-md w-[90vh]">
            {products.length === 0 ? (
              <p className="text-center text-gray-500">
                No products added yet.
              </p>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {products.map((product, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center justify-between border p-4 rounded-md bg-white shadow hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, translateY: -20 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-32 object-cover rounded-md mb-2"
                    />
                    <div className="text-center">
                      <h3 className="font-medium">{product.title}</h3>
                      <p>Price: ₹{product.price}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleMore}
              className="bg-yellow-500 text-white rounded-md px-16 py-3 mt-2"
            >
              +Add More
            </button>
          </div>
        </div>
      </div>

      {products.length > 0 && (
        <h3 className="mt-4 font-semibold  text-center text-3xl">
          Total: ₹{total}
        </h3>
      )}
      <div className="flex justify-center mt-5 gap-4">
        <button
          onClick={handleBackClick}
          className="bg-red-500 text-white rounded-md px-4 py-2"
        >
          Back
        </button>
        <button
          onClick={handleOpenModal}
          className="bg-green-500 text-white rounded-md px-4 py-2"
        >
          Place Your Order
        </button>
      </div>
      <OrderForm
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        products={products}
        total={total}
      />
      <ToastContainer />
    </div>
  );
};

export default PreviewOrder;
