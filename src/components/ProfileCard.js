import React, { useEffect, useState } from "react";
import "../components/ProfileCard.css";
function ProfileCard() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/rectangle-44@2x.png",
    "/rectangle-441@2x.png",
    "/rectangle-442@2x.png",
    "/rectangle-443@2x.png",
  ];

  const content = [
    {
      title: "Title 1",
      description: [
        "The shots are fantastic; they are quiet and understandable.",
        "We want to do more in the future.Special thanks to Mr. Vasanth & Mr. Deva..",
        "Best wishes",
        <span
          style={{ fontVariant: "small-caps", fontSize: 28, fontWeight: 500 }}
        >
          <b>Mohammed Musaraf</b>
        </span>,
      ],
    },
    {
      title: "Title 2",
      description: [
        "Such a fantastic experience with a fantastic crew.... I would definitely recommend it to my friends and family... ",
        "Thank you, Deva and Team....",
        <span
          style={{ fontVariant: "small-caps", fontSize: 28, fontWeight: 500 }}
        >
          <b>Sardar Sabeek</b>
        </span>,
      ],
    },
    {
      title: "Title 3",
      description: [
        "So genuine and friendly crew, super best photo and album quality.",
        "Best service at best price. If someone asks me about their events, I would definitely recommend them.",
        <span
          style={{ fontVariant: "small-caps", fontSize: 28, fontWeight: 500 }}
        >
          <b>Saravanan V</b>
        </span>,
      ],
    },
    {
      title: "Title 4",
      description: [
        "Genuinely nice and well-behaved team.... ",
        "I booked a 55000 bundle...My uncle's 60th Wedding anniversary. Excellent photo quality and genuine work photos quality great and video also album work are very wonderful my family members all enjoy 60th wedding book Thank you Dream Big studio team.",
        "''Special thanks to Mr. Vasanth & Mr. Deva...",
        "Best supporting photography's team",
        <span
          style={{ fontVariant: "small-caps", fontSize: 28, fontWeight: 500 }}
        >
          <b>Sathish</b>
        </span>,
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentImage = images[currentImageIndex];
  const currentContent = content[currentImageIndex];
  return (
    <div className="image-with-content">
      <div className="image-container">
        <img
          src={currentImage}
          alt={`Image ${currentImageIndex + 1}`}
          style={{ maxWidth: "100%", maxHeight: "700px" }}
        />
      </div>
      <div className="image-framecontainer">
        {currentContent.description.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
}

export default ProfileCard;
