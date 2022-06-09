import React from "react";

const Categories = () => {
  const data = [
    {
      cateImg: "./images/Category/cat1.png",
      cateName: "Fashion",
    },
    {
      cateImg: "./images/Category/cat2.png",
      cateName: "Electronic",
    },
    {
      cateImg: "./images/Category/cat3.png",
      cateName: "Cars",
    },
    {
      cateImg: "./images/Category/cat4.png",
      cateName: "Home & Garden",
    },
    {
      cateImg: "./images/Category/cat5.png",
      cateName: "Gifts",
    },
    {
      cateImg: "./images/Category/cat6.png",
      cateName: "Music",
    },
    {
      cateImg: "./images/Category/cat7.png",
      cateName: "Health & Beauty",
    },
    {
      cateImg: "./images/Category/cat8.png",
      cateName: "Pets",
    },
    {
      cateImg: "./images/Category/cat9.png",
      cateName: "Baby Toys",
    },
    {
      cateImg: "./images/Category/cat10.png",
      cateName: "Groceries",
    },
    {
      cateImg: "./images/Category/cat11.png",
      cateName: "Books",
    },
  ];

  return (
    <>
      <div className="category">
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
