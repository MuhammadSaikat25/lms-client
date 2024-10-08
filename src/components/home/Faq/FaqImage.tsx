import React, { useRef, useEffect } from "react";
import faqGrid from "../../../assets/faqGrid.png";
import "./fi.css";

const FaqImage: React.FC = () => {
  const cardRef = useRef<HTMLImageElement | null>(null);
  const glossRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const card = cardRef.current;
    const gloss = glossRef.current;

    if (!card || !gloss) return;

    const handleMouseMove = (e: MouseEvent) => {
      const pointerX = e.clientX;
      const pointerY = e.clientY;

      const cardRect = card.getBoundingClientRect();
      const halfWidth = cardRect.width / 2;
      const halfHeight = cardRect.height / 2;

      const cardCenterX = cardRect.left + halfWidth;
      const cardCenterY = cardRect.top + halfHeight;

      const deltaX = pointerX - cardCenterX;
      const deltaY = pointerY - cardCenterY;

      const distanceToCenter = Math.sqrt(
        Math.pow(deltaX, 2) + Math.pow(deltaY, 2)
      );
      const maxDistance = Math.max(halfWidth, halfHeight);

      const degree = (distanceToCenter * 10) / maxDistance;
      const rx = deltaY / halfHeight;
      const ry = deltaX / halfWidth;

      card.style.transform = `perspective(400px) rotate3d(${-rx}, ${ry}, 0, ${degree}deg)`;

      gloss.style.transform = `translate(${-ry * 100}%, ${
        -rx * 100
      }%) scale(2.4)`;
      gloss.style.opacity = `${(distanceToCenter * 0.6) / maxDistance}`;
    };

    const handleMouseLeave = () => {
      card.style.transform = "";
      gloss.style.opacity = "0";
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="absolute">
      <img ref={cardRef} className="lg:w-[800px]" src={faqGrid} alt="FAQ" />
      <div ref={glossRef} id="gloss" className="gloss overflow-hidden"></div>
    </div>
  );
};

export default FaqImage;
