import React from "react";

export const Cards = ({
  imageSrc,
  imageAlt,
  title,
  price,
  originalPrice,
  discount,
  badges = [],
  reviews = { stars: 0, count: "" },
  onBuyClick,
}) => {
  // Generar estrellas según el rating
  const renderStars = (stars) => {
    const fullStars = Math.floor(stars);
    const halfStar = stars % 1 !== 0;
    const totalStars = [...Array(5)].map((_, i) => {
      if (i < fullStars)
        return <img key={i} src="icons/cards/star.svg" alt="star" />;
      if (i === fullStars && halfStar)
        return (
          <img key={i} src="icons/cards/star-half-fill.svg" alt="star-half" />
        );
      return (
        <img key={i} src="icons/cards/star-outline.svg" alt="star-outline" />
      );
    });
    return totalStars;
  };

  return (
    <div className="bg-white text-gray-700 w-full max-w-[300px] max-h-[500px] shadow-lg rounded-md overflow-hidden">
      {/* Imagen */}
      <div className="w-[150px] h-[150px] flex items-center justify-center bg-gray-100 mx-auto">
        <img
          className="max-w-full max-h-full object-contain"
          src={imageSrc}
          alt={imageAlt}
        />
      </div>
      {/* Contenido */}
      <div className="p-2 md:p-3 flex flex-col gap-2">
        {/* Badges */}
        <div className="flex flex-wrap items-center gap-1">
          {badges.map((badge, index) => (
            <span
              key={index}
              className="px-2 py-1 rounded-full text-xs bg-gray-300"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Título */}
        <h2 className="text-center md:text-start font-semibold text-lg md:text-xl overflow-ellipsis overflow-hidden whitespace-nowrap">
          {title}
        </h2>

        {/* Precio */}
        <div>
          <span className="flex items-center justify-center md:justify-start text-base md:text-lg font-bold">
            {price}
          </span>
          {originalPrice && (
            <div className="flex items-center gap-1 mt-1">
              <span className="text-xs line-through opacity-50">
                {originalPrice}
              </span>
              {discount && (
                <span className="bg-green-400 px-1 py-0.5 rounded-md text-xs text-white">
                  {discount}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Reseñas */}
        <span className="flex items-center mt-1">
          {renderStars(reviews.stars)}
          <span className="text-xs ml-1 text-gray-500">{reviews.count}</span>
        </span>

        {/* Botones de acción */}
        <div className="mt-3 flex flex-col gap-1 md:flex-row">
          <button
            onClick={onBuyClick}
            className="bg-black text-white px-4 py-1 rounded-md font-medium tracking-wider hover:bg-yellow-300 hover:text-black transition duration-700"
          >
            Comprar
          </button>
          <button className="flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md">
            <img
              className="opacity-50"
              src="icons/cards/love.svg"
              alt="wishlist"
            />
          </button>
          <button className="flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md">
            <img
              className="opacity-50"
              src="icons/cards/eye.svg"
              alt="details"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
