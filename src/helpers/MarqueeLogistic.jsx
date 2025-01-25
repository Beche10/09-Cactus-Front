import React from "react";
import Marquee from "react-fast-marquee";

export const MarqueeLogistic = () => {
  return (
    <Marquee
      loop={0}
      speed={30} // Reduce la velocidad para suavidad
      gradient={false} // Elimina el gradiente
      easing="ease-in-out" // Animación más fluida
      pauseOnHover={true} // Pausa al pasar el mouse
      direction="left" // Dirección del desplazamiento
    >
      <div className="mx-auto w-full h-14 flex flex-row items-center justify-evenly gap-20 py-2 px-4 overflow-visible font-mono">
        {/* Opción 1: 3 Cuotas sin interés */}
        <div className="flex flex-row items-center gap-3 text-center p-2 flex-shrink-0">
          <img
            src="icons/logistic/bxs-credit-card.svg"
            alt="Ícono de tarjeta de crédito"
            className="w-6 h-6"
          />
          <p className="text-sm tracking-wider uppercase">
            3 Cuotas sin interés
          </p>
        </div>

        {/* Opción 2: Envío gratis */}
        <div className="flex flex-row items-center gap-3 text-center p-2 flex-shrink-0">
          <img
            src="icons/logistic/bxs-truck.svg"
            alt="Ícono de camión"
            className="w-6 h-6"
          />
          <p className="text-sm tracking-wider uppercase">
            Envío gratis a todo el país
          </p>
        </div>

        {/* Opción 3: Descuento por transferencia */}
        <div className="flex flex-row items-center gap-3 text-center p-2 flex-shrink-0">
          <img
            src="icons/logistic/Payments.svg"
            alt="Ícono de transferencia bancaria"
            className="w-6 h-6"
          />
          <p className="text-sm tracking-wider uppercase">
            10% OFF con transferencia bancaria
          </p>
        </div>

        {/* Repetición de elementos (opcional) */}
        <div className="flex flex-row items-center gap-3 text-center p-2 flex-shrink-0">
          <img
            src="icons/logistic/bxs-credit-card.svg"
            alt="Ícono de tarjeta de crédito"
            className="w-6 h-6"
          />
          <p className="text-sm tracking-wider uppercase">
            3 Cuotas sin interés
          </p>
        </div>
        <div className="flex flex-row items-center gap-3 text-center p-2 flex-shrink-0">
          <img
            src="icons/logistic/bxs-truck.svg"
            alt="Ícono de camión"
            className="w-6 h-6"
          />
          <p className="text-sm tracking-wider uppercase">
            Envío gratis a todo el país
          </p>
        </div>
        <div className="flex flex-row items-center gap-3 text-center p-2 flex-shrink-0">
          <img
            src="icons/logistic/Payments.svg"
            alt="Ícono de transferencia bancaria"
            className="w-6 h-6"
          />
          <p className="text-sm tracking-wider uppercase">
            10% OFF con transferencia bancaria
          </p>
        </div>
      </div>
    </Marquee>
  );
};


