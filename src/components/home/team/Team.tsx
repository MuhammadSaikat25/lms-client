import { useState, useEffect, useRef } from "react";
import img1 from "../../../assets/p1.avif";
import img2 from "../../../assets/p2.jpg";
import img3 from "../../../assets/p3.jpg";
import img4 from "../../../assets/p5.avif";
import img5 from "../../../assets/p6.jpeg";
import "./team.css";
// Define the shape of the team images array
const team: string[] = [img1, img3, img2, img4, img5, img2, img1, img3, img4];

const Team = () => {
  const [displayFirstSet, setDisplayFirstSet] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);
  const teamContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadingOut(true);
      setTimeout(() => {
        setDisplayFirstSet((prev) => !prev);
        setFadingOut(false);
      }, 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Helper function to check if two images overlap
    const isOverlapping = (rect1: DOMRect, rect2: DOMRect): boolean => {
      return !(
        rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom
      );
    };

    // Set random positions for each image inside the container
    const setRandomPositions = () => {
      const container = teamContainerRef.current;
      if (!container) return; // Ensure container exists

      const imgs = container.querySelectorAll<HTMLDivElement>(".random-image");
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      const placedImages: DOMRect[] = [];

      imgs.forEach((img) => {
        let randomX: number, randomY: number, validPosition: boolean;

        do {
          randomX = Math.floor(Math.random() * (containerWidth - 120)); // Random X position
          randomY = Math.floor(Math.random() * (containerHeight - 120)); // Random Y position

          img.style.transform = `translate(${randomX}px, ${randomY}px)`;

          const imgRect = img.getBoundingClientRect();
          validPosition = true;

          // Check for overlap with previously placed images
          for (const placedImg of placedImages) {
            if (isOverlapping(imgRect, placedImg)) {
              validPosition = false;
              break;
            }
          }
        } while (!validPosition); // Retry until a valid, non-overlapping position is found

        placedImages.push(img.getBoundingClientRect());
      });
    };

    setRandomPositions();
    window.addEventListener("resize", setRandomPositions); // Recalculate positions on resize

    return () => {
      window.removeEventListener("resize", setRandomPositions);
    };
  }, [displayFirstSet]);

  return (
    <div className="p-12 lg:p-0 relative">
      <div className="text-center">
        <h1 className="text-gray-300 lg:text-[32px]">Meet our team_</h1>
        <p className="text-gray-300 py-2">
          Over 10 dedicated professionals drive our success through their
          expertise, collaboration, and <br /> innovation, ensuring we lead in
          our industry.
        </p>
      </div>
      <div className=" test pl-20">
        Hello
      </div>
      <div
        className="teamImg relative"
        ref={teamContainerRef}
        style={{
          position: "relative",
          width: "100%",
          height: "500px",
          overflow: "hidden",
        }}
      >
        {displayFirstSet
          ? team.slice(0, 5).map((img, idx) => (
              <div
                key={idx}
                className="random-image border w-[120px] h-[120px] rounded-full absolute"
                style={{
                  transition: "opacity 1s ease",
                  opacity: fadingOut ? 0 : 1,
                }}
              >
                <i className="b1"></i>
                <i className="b2"></i>
                <i className="b3"></i>
                <img
                  src={img}
                  alt={`Team member ${idx + 1}`}
                  className="w-[100px] h-[100px] rounded-full"
                />
              </div>
            ))
          : team.slice(5).map((img, idx) => (
              <div
                key={idx}
                className="random-image  border  w-[120px] h-[120px] rounded-full absolute"
                style={{
                  transition: "opacity 1s ease",
                  opacity: fadingOut ? 0 : 1,
                }}
              >
                <i className="b1"></i>
                <i className="b2"></i>
                <i className="b3"></i>
                <img
                  src={img}
                  alt={`Team member ${idx + 1}`}
                  className="w-[100px] h-[100px] rounded-full"
                />
              </div>
            ))}
      </div>
    </div>
  );
};

export default Team;
