import { useEffect, useState } from "react";
import axios from "axios";

const Programming = () => {
  const [images, setImages] = useState([]);
  const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos`,
          {
            params: { query: "Programming", per_page: 1 },
            headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
          }
        );
        setImages(response.data.results);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4 flex justify-center">
        Programming - Building the Future, One Line at a Time
      </h1>
      <div className="gap-4 flex justify-center mb-6">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.urls.regular}
            alt={image.alt_description || "Programming"}
            className="rounded-lg shadow-md w-[600px]"
          />
        ))}
      </div>
      <div className="descr text-lg">
        Programming is the process of designing and building software applications that perform specific tasks or solve problems. It’s a skill that combines creativity, logic, and a deep understanding of technology to turn ideas into reality.
        <br />
        <br />
        The Essence of Programming:
        <p>
          At its core, programming is about communication—translating human intentions into a language that computers can interpret and execute. It involves structuring code to handle data, automate processes, and deliver functionalities seamlessly.
        </p>
        <br />
        Common Applications:
        <ul className="list-disc ml-5">
          <li>
            Building dynamic websites and mobile apps used by millions worldwide.
          </li>
          <li>
            Developing games that provide entertainment and immersive experiences.
          </li>
          <li>
            Creating software tools for businesses to streamline operations and boost productivity.
          </li>
        </ul>
        <br />
        The Role of Algorithms:
        <p>
          Programming isn’t just about writing code; it’s about creating efficient solutions. Algorithms play a pivotal role, enabling programmers to solve problems in ways that are both scalable and optimized for performance.
        </p>
        <br />
        Continuous Learning:
        <p>
          Technology evolves rapidly, and programming languages, frameworks, and paradigms constantly change. Staying updated with trends like cloud computing, artificial intelligence, and blockchain is essential for programmers.
        </p>
        <br />
        Programming is more than a profession—it’s a mindset that empowers individuals to create, innovate, and drive technological progress.
      </div>
    </div>
  );
};

export default Programming;
