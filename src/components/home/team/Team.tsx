import React, { useState, useEffect, useRef } from "react";
import img1 from "../../../assets/p1.avif";
import img2 from "../../../assets/p2.jpg";
import img3 from "../../../assets/p3.jpg";
import img4 from "../../../assets/p5.avif";
import img5 from "../../../assets/p6.jpeg";
import "./team.css";

// Array of team images
const teamImages: string[] = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img1,
  img2,
  img3,
  img4,
  img5,
]; // Added extra images for testing

const Team: React.FC = () => {
  const [showFirstSet, setShowFirstSet] = useState<boolean>(true); // Controls visibility of first set
  const [showSecondSet, setShowSecondSet] = useState<boolean>(false); // Controls visibility of second set
  const [hideFirstSet, setHideFirstSet] = useState<boolean>(false); // Hides first set
  const [hideSecondSet, setHideSecondSet] = useState<boolean>(false); // Hides second set
  const teamContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const startCycle = () => {
       setShowFirstSet(true);
      setShowSecondSet(false);
      setHideFirstSet(false);
      setHideSecondSet(false);

      const secondSetTimeout = setTimeout(() => {
        setShowSecondSet(true);
      }, 3000);

      const hideFirstSetTimeout = setTimeout(() => {
        setHideFirstSet(true);
      }, 5000);

      const showFirstSetAgainTimeout = setTimeout(() => {
        setShowFirstSet(true);
        setHideFirstSet(false);
      }, 8000);

      const hideSecondSetTimeout = setTimeout(() => {
        setHideSecondSet(true);
      }, 10000);

      const restartCycleTimeout = setTimeout(() => {
        startCycle();
      }, 13000);

      return () => {
        clearTimeout(secondSetTimeout);
        clearTimeout(hideFirstSetTimeout);
        clearTimeout(showFirstSetAgainTimeout);
        clearTimeout(hideSecondSetTimeout);
        clearTimeout(restartCycleTimeout);
      };
    };

    startCycle(); 
  }, []);

  useEffect(() => {
    const setRandomPositions = () => {
      const container = teamContainerRef.current;
      if (!container) return;

      const imgs = container.querySelectorAll<HTMLDivElement>(".random-image");
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      const placedImages: DOMRect[] = [];

      imgs.forEach((img) => {
        let randomX: number, randomY: number, validPosition: boolean;

        do {
          randomX = Math.floor(
            Math.random() * (containerWidth - img.offsetWidth)
          );
          randomY = Math.floor(
            Math.random() * (containerHeight - img.offsetHeight)
          );

          img.style.transform = `translate(${randomX}px, ${randomY}px)`;

          const imgRect = img.getBoundingClientRect();
          validPosition = true;

          for (const placedImg of placedImages) {
            if (
              imgRect.right > placedImg.left &&
              imgRect.left < placedImg.right &&
              imgRect.bottom > placedImg.top &&
              imgRect.top < placedImg.bottom
            ) {
              validPosition = false;
              break;
            }
          }
        } while (!validPosition);

        placedImages.push(img.getBoundingClientRect());
      });
    };

    setRandomPositions();
    window.addEventListener("resize", setRandomPositions);

    return () => window.removeEventListener("resize", setRandomPositions);
  }, [showFirstSet, showSecondSet]);

  return (
    <div className="team-section">
      <div className="text-center">
        <h1 className="text-3xl text-white">Meet our team</h1>
        <p className="description text-center">
          Over 10 dedicated professionals drive our success through their
          expertise, collaboration, and <br /> innovation, ensuring we lead in
          our industry.
        </p>
      </div>

      <div className="team-container" ref={teamContainerRef}>
        {showFirstSet &&
          !hideFirstSet &&
          teamImages.slice(0, 5).map((img, idx) => (
            <div
              key={idx}
              className="random-image"
              style={{ opacity: 1, transition: "opacity 1s ease" }}
            >
              <i className="b1"></i>
              <i className="b2"></i>
              <i className="b3"></i>
              <img src={img} alt={`Team member ${idx + 1}`} />
            </div>
          ))}

        {showSecondSet &&
          !hideSecondSet &&
          teamImages.slice(5, 10).map((img, idx) => (
            <div
              key={idx}
              className="random-image"
              style={{ opacity: 1, transition: "opacity 1s ease" }}
            >
              <i className="b1"></i>
              <i className="b2"></i>
              <i className="b3"></i>
              <img src={img} alt={`Team member ${idx + 1}`} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Team;
