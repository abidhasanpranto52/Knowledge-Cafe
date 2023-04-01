import React from "react";

const SideCart = ({ cart, book }) => {
  console.log(book);
  let countTime = 0;
  for (const singleItem of cart) {
    countTime = countTime + singleItem.read_time;
  }
  return (
    <div className="sticky top-0">
      <div className="p-5 w-80 lg:w-96  border-violet-600 border rounded-lg font-semibold text-xl text-violet-800 bg-violet-100">
        <h1>Spent time on read: {countTime}</h1>
      </div>
      <div className="bg-slate-200 w-80 bg-opacity-70 p-5 mt-5 rounded-lg lg:w-96 space-y-2">
        <h1 className="font-semibold text-slate-900 text-lg">
          Bookmarked Blogs: {book.length}
        </h1>
        {book.map((item) => (
          <h1 className="text-lg bg-white p-3 rounded-lg font-semibold text-slate-800">
            {item.title}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default SideCart;
