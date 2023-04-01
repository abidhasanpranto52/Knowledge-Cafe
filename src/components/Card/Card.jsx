import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard/SingleCard";
import SideCart from "../SideCart/SideCart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Card = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [book , setBook] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
//   Handling Mark as read
  const handleMarkRead = (id) => {
    const clickedItem = data.find((it) => it._id === id);
    setCart([...cart, clickedItem]);
    
  };
//   Handling add to Bookmark
const handleBookmark = (id) => {
    const clickedItem = data.find((it) => it._id === id);
    const exist = book.find(it => it._id === id);
    if (exist){
        toast.error('Already Bookmarked!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        setBook(book)
    }
    else{

        setBook([...book , clickedItem])
    }
    
}
  return (
      <div className="flex gap-10 mt-10 justify-evenly flex-col lg:flex-row items-center lg:items-stretch">
        <div>
        {data.map((SingleData) => (
          <SingleCard
          key={SingleData._id}
          SingleData={SingleData}
          handleMarkRead={handleMarkRead}
          handleBookmark={handleBookmark}></SingleCard>
      ))}
        </div>
          <div>
        <SideCart cart={cart} book={book}></SideCart>
      </div>
    </div>
  );
};

export default Card;
