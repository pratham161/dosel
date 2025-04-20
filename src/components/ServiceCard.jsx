import React from 'react'

const ServiceCard = ({
  isreverse = false,
  title = "title",
  content = "content",
  imgsrc,
}) => {
  return (
    <div
      className={`w-full flex flex-col-reverse ${
        isreverse ? "md:flex-row-reverse" : "md:flex-row"
      } justify-around items-center gap-10 py-5`}
    >
      {/* Text Content */}
      <div className="w-full md:w-1/2 flex flex-col gap-5 px-6 md:px-0">
        <h1 className="font-monserat font-semibold text-blue-400 text-3xl md:text-5xl">
          {title}
        </h1>
        <p className="font-roboto text-white text-base md:text-xl">{content}</p>
      </div>

      {/* Image */}
      <img
        className="w-full md:w-[40%] object-cover px-6 md:px-0"
        src={imgsrc}
        alt="service"
      />
    </div>
  );
};

export default ServiceCard;
